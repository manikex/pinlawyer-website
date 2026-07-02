import { NextResponse } from 'next/server';

// ---------- Static fallback region map ----------
function getStaticRegion(pin: string): { state: string } | null {
  const prefix = pin.slice(0, 3);
  if (/^1[1-3]/.test(prefix)) return { state: 'Delhi' };
  if (/^2/.test(prefix)) return { state: 'Uttar Pradesh / Uttarakhand' };
  if (/^3[0-4]/.test(prefix)) return { state: 'Rajasthan' };
  if (/^3[6-9]/.test(prefix)) return { state: 'Gujarat' };
  if (/^4/.test(prefix)) return { state: 'Maharashtra' };
  if (/^4[5-8]/.test(prefix)) return { state: 'Madhya Pradesh' };
  if (/^49/.test(prefix)) return { state: 'Chhattisgarh' };
  if (/^5/.test(prefix)) return { state: 'Andhra Pradesh / Telangana' };
  if (/^5[6-9]/.test(prefix)) return { state: 'Karnataka' };
  if (/^6/.test(prefix)) return { state: 'Tamil Nadu' };
  if (/^6[7-9]/.test(prefix)) return { state: 'Kerala' };
  if (/^7[0-4]/.test(prefix)) return { state: 'West Bengal' };
  if (/^7[5-7]/.test(prefix)) return { state: 'Odisha' };
  if (/^7[8-9]/.test(prefix)) return { state: 'Assam / North East' };
  if (/^8/.test(prefix)) return { state: 'Bihar / Jharkhand' };
  if (/^9/.test(prefix)) return { state: 'Army Postal Service' };
  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get('pin');

  if (!pin || !/^[1-9][0-9]{5}$/.test(pin)) {
    return NextResponse.json({ status: 'error', message: 'Invalid PIN' }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const dataArray = await res.json();
    const data = Array.isArray(dataArray) ? dataArray[0] : dataArray;

    if (data?.Status === 'Success' && data?.PostOffice?.length > 0) {
      // ---------- Real data available ----------
      const offices = data.PostOffice;

      let city = '';
      let block = '';
      let useCircleInsteadOfBlock = false;

      // 1st pass: find office where Name === Block and Block ≠ "NA"
      for (const office of offices) {
        const officeBlock = (office.Block || '').trim();
        if (officeBlock && officeBlock !== 'NA' && office.Name === officeBlock) {
          city = office.Name;
          block = officeBlock;
          break;
        }
      }

      // 2nd pass: first office with a valid Block
      if (!city) {
        for (const office of offices) {
          const officeBlock = (office.Block || '').trim();
          if (officeBlock && officeBlock !== 'NA') {
            city = office.Name || '';
            block = officeBlock;
            break;
          }
        }
      }

      // 3rd fallback: all blocks are "NA" → use Circle
      if (!city) {
        const first = offices[0];
        city = (first.Name || '').replace(/\b(G\.P\.O\.|H\.O\.|S\.O\.|B\.O\.)\b/g, '').trim() || first.Name;
        block = (first.Circle || '').trim();
        useCircleInsteadOfBlock = true;
      }

      const first = offices[0];
      return NextResponse.json({
        status: 'success',
        city: city || first.Name,
        block: block,
        district: first.District || '',
        state: first.State || '',
        source: 'api',
        blockIsCircle: useCircleInsteadOfBlock,
      });
    }

    // ---------- API returned, but no records → do NOT fallback ----------
    return NextResponse.json({ status: 'error', message: 'No records' });
  } catch {
    // ---------- Network error, API unreachable → use static fallback ----------
    const region = getStaticRegion(pin);
    if (region) {
      return NextResponse.json({
        status: 'success',
        city: '',
        block: '',
        district: '',
        state: region.state,
        source: 'fallback',
        blockIsCircle: false,
      });
    }
    return NextResponse.json({ status: 'error', message: 'Service unavailable' }, { status: 500 });
  }
}
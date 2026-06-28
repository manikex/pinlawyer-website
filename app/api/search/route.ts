import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Static site pages – these don’t change often and are hardcoded for now
const staticPages = [
  { title: 'Litigation & Dispute Resolution (India)', description: 'Supreme Court, all State High Courts, NCDRC, Consumer Forums, CAT, Criminal, Family, Education, Employment matters.', url: '/practice-areas/litigation', category: 'Practice Areas' },
  { title: 'Corporate Litigation & RERA', description: 'Commercial court litigation, NCLT/NCLAT, contract disputes, real estate RERA matters.', url: '/practice-areas/corporate-litigation-rera', category: 'Practice Areas' },
  { title: 'Arbitration & ADR', description: 'Domestic arbitration, international commercial arbitration, mediation, enforcement of foreign awards.', url: '/practice-areas/arbitration-adr', category: 'Practice Areas' },
  { title: 'Company Law & International Business Advisory', description: 'Company incorporation, compliance, cross‑border contracts — UK, Canada, USA, Singapore.', url: '/practice-areas/international-business', category: 'Practice Areas' },
  { title: 'Pro Bono\'s', description: 'Free legal assistance for underprivileged communities.', url: '/pro-bono', category: 'Resources' },
  { title: 'Features – Work Process & Fees', description: 'How we engage, transparent fee structures, technology, confidentiality.', url: '/work-process', category: 'Resources' },
  { title: 'FAQs – Frequently Asked Questions', description: 'Remote legal services, travel requirements, international clients, response times.', url: '/faq', category: 'Resources' },
  { title: 'Party Testimonial', description: 'Real client stories from across India.', url: '/party-testimonial', category: 'Resources' },
  { title: 'About Us – Pin Lawyer', description: 'Our story, lead advocate Pushp Manikes, team, virtual chambers.', url: '/about', category: 'About' },
  { title: 'Contact Us', description: 'Call, WhatsApp, email, urgent contact at ₹150.', url: '/contact', category: 'Contact' },
  { title: 'Urgent Contact – Pay ₹150', description: 'Connect with a lawyer within 30‑40 minutes for genuine legal emergencies.', url: '/contact/urgent', category: 'Contact' },
  { title: 'Careers at Pin Lawyer', description: 'Join as Advocate & Associate, or apply for Legal Researcher & Intern positions.', url: '/careers', category: 'Careers' },
  { title: 'Your PIN Code & You', description: 'Check coverage, how we serve, real client journey.', url: '/your-pin-code', category: 'Vision' },
  { title: 'Help Center', description: 'Search articles, popular questions, explore topics.', url: '/help-center', category: 'Resources' },
];

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    const front = match ? match[1] : '';
    const get = (field: string) => {
      const re = new RegExp(`${field}:\\s*"?(.+?)"?$`, 'm');
      return (front.match(re) || [])[1]?.replace(/"/g, '') || '';
    };
    return {
      title: get('title'),
      description: get('excerpt'),
      url: `/law-library/${slug}`,
      category: 'Law Library',
    };
  }).filter((p) => p.title);
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get('q')?.toLowerCase() || '';
  if (!q) return NextResponse.json([]);

  const posts = getBlogPosts();
  const allItems = [...staticPages, ...posts];

  const results = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );

  return NextResponse.json(results);
}
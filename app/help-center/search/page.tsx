'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Search } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/help-center"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#E5B85C] transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Help Center
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-slate-500 mb-8">
            Showing results for <strong>&ldquo;{query}&rdquo;</strong>
          </p>
        )}

        {loading ? (
          <div className="text-center py-16">
            <p className="text-slate-500">Searching…</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No results found for &ldquo;{query}&rdquo;.</p>
            <p className="text-slate-500 text-sm mt-1">
              Try a different keyword or browse our{' '}
              <Link href="/help-center" className="text-[#E5B85C] hover:underline">
                Help Center
              </Link>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="block p-5 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                  <span className="text-xs text-[#E5B85C] bg-[#E5B85C]/10 px-3 py-1 rounded-full shrink-0 ml-4">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
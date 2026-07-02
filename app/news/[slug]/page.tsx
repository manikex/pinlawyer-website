import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getNewsBySlug } from '@/lib/news-posts';

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1E3A5F] via-[#1a3352] to-[#1E3A5F] text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#fff" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#fff" strokeWidth="1" opacity="0.6" />
          <circle cx="150" cy="80" r="2" stroke="#fff" strokeWidth="0.8" opacity="0.7" />
        </svg>

        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content – fully justified */}
      <div className="max-w-3xl mx-auto px-4 md:px-12 py-10">
        <article className="prose prose-lg max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-li:text-slate-600 dark:prose-li:text-slate-300">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split('\n\n')
                .map((block) => {
                  if (block.startsWith('## '))
                    return `<h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">${block.slice(3)}</h2>`;
                  if (block.startsWith('- ')) {
                    const items = block
                      .split('\n')
                      .filter((l) => l.startsWith('- '))
                      .map((l) => `<li class="text-justify">${l.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`)
                      .join('');
                    return `<ul class="list-disc ml-6 mb-4 space-y-2 text-justify">${items}</ul>`;
                  }
                  return `<p class="mb-4 leading-relaxed text-justify">${block
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br/>')}</p>`;
                })
                .join(''),
            }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#1E3A5F] hover:underline text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to all news
          </Link>
        </div>
      </div>
    </section>
  );
}
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Tag, MapPin, ArrowLeft } from 'lucide-react';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Simple markdown to HTML conversion
  const renderContent = (raw: string) => {
    let html = raw;
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-slate-900 mt-6 mb-2">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-3">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-slate-900 mt-8 mb-3">$1</h1>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc ml-6 mb-4 space-y-1 text-slate-600 text-justify">$1</ul>');
    html = html.replace(/\n\n/g, '</p><p class="text-slate-600 leading-relaxed mb-4 text-justify">');
    html = '<p class="text-slate-600 leading-relaxed mb-4 text-justify">' + html + '</p>';
    html = html.replace(/<p class="text-slate-600 leading-relaxed mb-4 text-justify"><\/p>/g, '');
    return html;
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/law-library" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#E5B85C] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Law Library
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {post.category}</span>
          {post.pinRegion && (
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {post.pinRegion}</span>
          )}
        </div>

        <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />

        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <Link href="/law-library" className="text-[#E5B85C] hover:underline text-sm">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
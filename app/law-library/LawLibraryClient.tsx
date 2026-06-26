'use client';

import { useState } from 'react';
import { BlogPost } from '@/lib/posts';
import Link from 'next/link';
import { BookOpen, Calendar, Tag, MapPin, ArrowRight } from 'lucide-react';

const subjectCards = [
  {
    id: 'consumer-rights',
    title: 'Consumer Rights',
    description: 'Know your rights as a consumer. Guides on filing complaints, NCDRC procedures, and more.',
    icon: '🛡️',
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400',
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Bail, anticipatory bail, cyber fraud, and criminal appeals explained simply.',
    icon: '⚖️',
    color: 'bg-red-50 border-red-200 hover:border-red-400',
  },
  {
    id: 'corporate-law',
    title: 'Corporate & Commercial',
    description: 'Company incorporation, contracts, NCLT matters, and cross-border advisory.',
    icon: '🏢',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  },
  {
    id: 'family-law',
    title: 'Family & Matrimonial',
    description: 'Divorce, maintenance, child custody, and domestic violence matters.',
    icon: '👨‍👩‍👧',
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
  },
  {
    id: 'arbitration',
    title: 'Arbitration & ADR',
    description: 'Domestic and international arbitration, mediation, and enforcement of awards.',
    icon: '🤝',
    color: 'bg-green-50 border-green-200 hover:border-green-400',
  },
  {
    id: 'property-rera',
    title: 'Property & RERA',
    description: 'Real estate disputes, homebuyer rights, and RERA compliance.',
    icon: '🏠',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  },
  {
    id: 'employment',
    title: 'Employment & Labour',
    description: 'Employment contracts, wrongful termination, and service matters.',
    icon: '💼',
    color: 'bg-teal-50 border-teal-200 hover:border-teal-400',
  },
  {
    id: 'general',
    title: 'General Legal',
    description: 'Legal awareness, updates, and miscellaneous topics.',
    icon: '📚',
    color: 'bg-slate-50 border-slate-200 hover:border-slate-400',
  },
];

export default function LawLibraryClient({ posts }: { posts: BlogPost[] }) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredPosts = selectedSubject
    ? posts.filter(
        (post) => post.category.toLowerCase().replace(/\s+/g, '-') === selectedSubject
      )
    : [];

  const selectedCard = subjectCards.find((card) => card.id === selectedSubject);

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Law Library</h1>
          <p className="text-lg text-slate-600 mt-3">
            Browse legal insights by subject. Select a category to explore articles.
          </p>
        </div>

        {!selectedSubject ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjectCards.map((card) => {
              const count = posts.filter(
                (p) => p.category.toLowerCase().replace(/\s+/g, '-') === card.id
              ).length;
              return (
                <button
                  key={card.id}
                  onClick={() => setSelectedSubject(card.id)}
                  className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${card.color} cursor-pointer group`}
                >
                  <span className="text-3xl block mb-3">{card.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-600">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{card.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{count} article{count !== 1 ? 's' : ''}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition" />
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedSubject(null)}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-6 transition"
            >
              ← Back to all subjects
            </button>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{selectedCard?.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {selectedCard?.title}
              </h2>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">No articles in this category yet. Check back soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/law-library/${post.slug}`}
                    className="block p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      {post.pinRegion && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {post.pinRegion}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
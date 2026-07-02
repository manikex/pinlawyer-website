import { getAllNews } from '@/lib/news-posts';
import NewsContent from '@/components/NewsContent';

export default function NewsPage() {
  const allNews = getAllNews();
  return <NewsContent allNews={allNews} />;
}
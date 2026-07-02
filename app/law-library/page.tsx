import { getAllPosts } from '@/lib/posts';
import LawLibraryContent from '@/components/LawLibraryContent';

export default function LawLibraryPage() {
  const posts = getAllPosts();
  return <LawLibraryContent posts={posts} />;
}
import { getAllPosts } from '@/lib/posts';
import LawLibraryClient from './LawLibraryClient';

export default function LawLibraryPage() {
  const posts = getAllPosts();
  return <LawLibraryClient posts={posts} />;
}
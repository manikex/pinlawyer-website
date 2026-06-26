import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author?: string;
  pinRegion?: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Split frontmatter and body
      const parts = fileContents.split('---\n');
      if (parts.length < 3) return null;
      const frontmatterText = parts[1];
      const body = parts.slice(2).join('---\n').trim();

      const getField = (field: string): string => {
        const regex = new RegExp(`${field}:\\s*"?(.+?)"?$`, 'm');
        const match = frontmatterText.match(regex);
        return match ? match[1].replace(/"/g, '') : '';
      };

      return {
        slug,
        title: getField('title'),
        date: getField('date'),
        excerpt: getField('excerpt'),
        category: getField('category'),
        author: getField('author') || undefined,
        pinRegion: getField('pinRegion') || undefined,
        content: body,
      };
    })
    .filter((post): post is BlogPost => post !== null && post.title !== '');

  // Sort newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const parts = fileContents.split('---\n');
  if (parts.length < 3) return null;
  const frontmatterText = parts[1];
  const body = parts.slice(2).join('---\n').trim();

  const getField = (field: string): string => {
    const regex = new RegExp(`${field}:\\s*"?(.+?)"?$`, 'm');
    const match = frontmatterText.match(regex);
    return match ? match[1].replace(/"/g, '') : '';
  };

  return {
    slug,
    title: getField('title'),
    date: getField('date'),
    excerpt: getField('excerpt'),
    category: getField('category'),
    author: getField('author') || undefined,
    pinRegion: getField('pinRegion') || undefined,
    content: body,
  };
}
import fs from 'fs';
import path from 'path';

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  section: 'updates' | 'victories'; // which main card it belongs to
}

const newsDirectory = path.join(process.cwd(), 'content', 'news');

// Categories that belong to "Latest Updates"
const updatesCategories = ['Pin Update', 'De Jure', 'Lex Loci', 'Per Curiam'];

// Categories that belong to "Case Victories"
const victoriesCategories = ['Bona Fide', 'Interim', 'De Facto', 'Sub Judice'];

function determineSection(category: string): 'updates' | 'victories' {
  if (victoriesCategories.includes(category)) return 'victories';
  return 'updates';
}

export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(newsDirectory)) return [];

  const fileNames = fs.readdirSync(newsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(newsDirectory, fileName);
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

      const category = getField('category');

      return {
        slug,
        title: getField('title'),
        date: getField('date'),
        category,
        excerpt: getField('excerpt'),
        content: body,
        section: determineSection(category),
      };
    })
    .filter((post): post is NewsPost => post !== null && post.title !== '');

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const fullPath = path.join(newsDirectory, `${slug}.mdx`);
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

  const category = getField('category');

  return {
    slug,
    title: getField('title'),
    date: getField('date'),
    category,
    excerpt: getField('excerpt'),
    content: body,
    section: determineSection(category),
  };
}
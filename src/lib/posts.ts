import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FileHandler } from '@/providers/FileHandler';
import { GetPostIdFromMarkdownFile } from '@/services/posts/GetPostIdFromMarkdownFile';
import { MarkdownReader } from '@/providers/MarkdownReader';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostInfo {
  id: string
  title: string
  date: string
  resume: string
}

export function getSortedPostsData() {
  const fileNames = FileHandler.readDirectory(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = new GetPostIdFromMarkdownFile().execute(fileName);

    const fullPath = path.join(postsDirectory, fileName);
    
    const markdownReader = new MarkdownReader(fullPath);

    const { title, date, resume } = markdownReader.getMetadata();

    return {
      id,
      title,
      date,
      resume
    };
  });

  return allPostsData.sort((a: PostInfo, b: PostInfo) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
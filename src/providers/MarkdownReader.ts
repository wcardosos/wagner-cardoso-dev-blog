import matter from 'gray-matter';
import { FileHandler } from './FileHandler';

export interface Metadata {
  title: string
  date: string
  resume: string
}

export class MarkdownReader {
  constructor(private filePath: string) {}

  getMetadata(): Metadata {
    const markdownContent = this.readFile();

    const metadata = this.parseMetadata(markdownContent);

    return metadata;
  }

  private readFile(): string {
    return FileHandler.readFile(this.filePath) as string;
  }

  private parseMetadata(content: string): Metadata {
    const { data: { title, date, resume } } = matter(content);

    return {
      title,
      date,
      resume
    };
  }
}
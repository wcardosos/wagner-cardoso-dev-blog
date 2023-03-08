import path from 'path';
import { FileHandler } from '../../providers/FileHandler';
import { MarkdownReader } from '../../providers/MarkdownReader';
import { GetPostIdFromMarkdownFile } from './GetPostIdFromMarkdownFile';

export class GetAllPosts {
  private postsDirectory = path.join(process.cwd(), 'posts');
  execute() {
    const fileNames = FileHandler.readDirectory(this.postsDirectory);

    const allPosts = fileNames.map(fileName => {
      const id = new GetPostIdFromMarkdownFile().execute(fileName);

      const fullPath = path.join(this.postsDirectory, fileName);
      
      const markdownReader = new MarkdownReader(fullPath);

      const { title, date, resume } = markdownReader.getMetadata();

      return {
        id,
        title,
        date,
        resume
      };
    });

    return allPosts;
  }
}
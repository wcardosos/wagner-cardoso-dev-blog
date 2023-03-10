import { MarkdownReader } from '../../providers/MarkdownReader';
import path from 'path';

export class GetPostById {
  private postsDirectory = path.join(process.cwd(), 'posts');

  execute(id: string) {
    const fullPath = path.join(this.postsDirectory, `${id}.md`);
    const markdownReader = new MarkdownReader(fullPath);

    const { title, date, resume } = markdownReader.getMetadata();

    return {
      title,
      date,
      resume,
    };
  }
}

import { MarkdownReader } from '../../providers/MarkdownReader';
import path from 'path';
import { Post } from '../../entities/Post';

export class GetPostById {
  private postsDirectory = path.join(process.cwd(), 'posts');

  execute(id: string): Post {
    const fullPath = path.join(this.postsDirectory, `${id}.md`);
    const markdownReader = new MarkdownReader(fullPath);

    const { title, date, resume } = markdownReader.getMetadata();
    const content = markdownReader.getContent();

    return {
      id,
      title,
      date,
      resume,
      content
    };
  }
}

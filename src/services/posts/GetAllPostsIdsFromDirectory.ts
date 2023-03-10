import path from 'path';
import { FileHandler } from '../../providers/FileHandler';
import { GetPostIdFromMarkdownFile } from './GetPostIdFromMarkdownFile';

export class GetAllPostsIdsFromDirectory {
  private postsDirectory = path.join(process.cwd(), 'posts');

  execute() {
    const fileNames = FileHandler.readDirectory(this.postsDirectory);

    const getPostIdFromMarkdownFile = new GetPostIdFromMarkdownFile();

    const allPostsIds = fileNames.map(fileName => getPostIdFromMarkdownFile.execute(fileName));

    return allPostsIds;
  }
}
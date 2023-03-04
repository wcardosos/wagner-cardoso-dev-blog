export class GetPostIdFromMarkdownFile {
  execute(markdownFileName: string): string {
    return markdownFileName.replace(/\.md$/, '');
  }
}
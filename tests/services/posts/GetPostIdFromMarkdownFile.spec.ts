import { describe, expect, it } from 'vitest';
import { GetPostIdFromMarkdownFile } from '../../../src/services/posts/GetPostIdFromMarkdownFile';

describe('Service: GetPostIdFromMarkdownFile', () => {
  describe('execute', () => {
    it('Should return the post id', () => {
      const markdownFileNameMock = 'post.md';

      const postId = new GetPostIdFromMarkdownFile().execute(markdownFileNameMock);

      expect(postId).toBe('post');
    });
  });
});

import { describe, expect, it, vi } from 'vitest';
import { GetPostById } from '../../../src/services/posts/GetPostById';
import { MarkdownReader } from '../../../src/providers/MarkdownReader';

vi.mock('../../../src/providers/MarkdownReader');

describe('Service: GetPostById', () => {
  const getPostByIdService = new GetPostById();
  describe('execute', () => {
    it('Should return the post by id', () => {
      const markdownReaderGetMetadataSpy = vi.spyOn(MarkdownReader.prototype, 'getMetadata');

      markdownReaderGetMetadataSpy.mockReturnValue({
        title: 'Post 1',
        resume: 'Post 1 resume',
        date: '2023-03-07'
      });

      const post = getPostByIdService.execute('post-id');

      expect(MarkdownReader).toHaveBeenCalledWith(expect.stringContaining('/post-id.md'));
      expect(post).toEqual({
        title: 'Post 1',
        resume: 'Post 1 resume',
        date: '2023-03-07'
      });
    });
  });
});

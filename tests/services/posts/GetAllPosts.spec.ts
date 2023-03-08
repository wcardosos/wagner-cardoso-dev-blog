import { describe, expect, it, vi } from 'vitest';
import { GetAllPosts } from '../../../src/services/posts/GetAllPosts';
import { FileHandler } from '../../../src/providers/FileHandler';
import { MarkdownReader } from '../../../src/providers/MarkdownReader';
import { GetPostIdFromMarkdownFile } from '../../../src/services/posts/GetPostIdFromMarkdownFile';

describe('Service: GetAllPosts', () => {
  const getAllPostsService = new GetAllPosts();
  describe('execute', () => {
    it('Should return all posts', () => {
      const fileHandlerReadDirectorySpy = vi.spyOn(FileHandler, 'readDirectory');
      const markdownReaderGetMetadataSpy = vi.spyOn(MarkdownReader.prototype, 'getMetadata');
      const getPostIdFromMarkdownFileSpy = vi.spyOn(GetPostIdFromMarkdownFile.prototype, 'execute');

      fileHandlerReadDirectorySpy.mockReturnValue(['markdown 1', 'markdown 2']);
      markdownReaderGetMetadataSpy
        .mockImplementationOnce(() => ({
          title: 'Post 1',
          resume: 'Post 1 resume',
          date: '2023-03-07'
        }))
        .mockImplementationOnce(() => ({
          title: 'Post 2',
          resume: 'Post 2 resume',
          date: '2023-03-07'
        }));
      getPostIdFromMarkdownFileSpy.mockReturnValue('id');

      const FILES_COUNT = 2;


      const allPosts = getAllPostsService.execute();

      expect(fileHandlerReadDirectorySpy).toHaveBeenCalled();
      expect(markdownReaderGetMetadataSpy).toHaveBeenCalledTimes(FILES_COUNT);
      expect(allPosts).toEqual([
        {
          id: 'id',
          title: 'Post 1',
          resume: 'Post 1 resume',
          date: '2023-03-07'
        },
        {
          id: 'id',
          title: 'Post 2',
          resume: 'Post 2 resume',
          date: '2023-03-07'
        },
      ]);
    });
  });
});

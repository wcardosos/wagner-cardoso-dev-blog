import { describe, expect, it, vi } from 'vitest';
import { GetAllPostsIdsFromDirectory } from '../../../src/services/posts/GetAllPostsIdsFromDirectory';
import { FileHandler } from '../../../src/providers/FileHandler';
import { GetPostIdFromMarkdownFile } from '../../../src/services/posts/GetPostIdFromMarkdownFile';

describe('Service: GetAllPostsIdsFromDirectory', () => {
  const getAllPostsIdsFromDirectoryService = new GetAllPostsIdsFromDirectory();

  describe('execute', () => {
    it('Should return the posts ids', () => {
      const fileHandlerReadDirectorySpy = vi.spyOn(FileHandler, 'readDirectory');
      const getPostIdFromMarkdownFileSpy = vi.spyOn(GetPostIdFromMarkdownFile.prototype, 'execute');
  
      fileHandlerReadDirectorySpy.mockReturnValue(['post-1.md', 'post-2.md', 'post-3.md']);
      getPostIdFromMarkdownFileSpy
        .mockImplementationOnce(() => 'post-1')
        .mockImplementationOnce(() => 'post-2')
        .mockImplementationOnce(() => 'post-3');

      const postsIds = getAllPostsIdsFromDirectoryService.execute();

      expect(fileHandlerReadDirectorySpy).toHaveBeenCalled();
      expect(getPostIdFromMarkdownFileSpy).toHaveBeenCalledWith('post-1.md');
      expect(getPostIdFromMarkdownFileSpy).toHaveBeenCalledWith('post-2.md');
      expect(getPostIdFromMarkdownFileSpy).toHaveBeenCalledWith('post-3.md');
      expect(postsIds).toEqual(['post-1', 'post-2', 'post-3']);
    });
  });
});
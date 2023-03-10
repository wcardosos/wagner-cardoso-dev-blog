import { describe, expect, it, vi } from 'vitest';
import { MarkdownReader } from '../../src/providers/MarkdownReader';
import { FileHandler } from '../../src/providers/FileHandler';

vi.mock('fs', () => ({
  default: {
    readFileSync: vi.fn().mockReturnValue('markdown content')
  }
}));
vi.mock('gray-matter', () => ({
  default: vi.fn().mockReturnValue({
    data: {
      title: 'Post title',
      date: '2023-03-04',
      resume: 'Post resume'
    },
    content: 'content'
  })
}));

describe('Provider: MarkdownReader', () => {
  const fileHandlerReadFileSpy = vi.spyOn(FileHandler, 'readFile');
  fileHandlerReadFileSpy.mockReturnValue('markdown content');

  const markdownReader = new MarkdownReader('file path');
  
  describe('getMetadata', () => {
    it('Should return the markdown metadata', () => {
      const metadata = markdownReader.getMetadata();

      expect(fileHandlerReadFileSpy).toHaveBeenCalledWith('file path');
      expect(metadata).toEqual({
        title: 'Post title',
        date: '2023-03-04',
        resume: 'Post resume'
      });
    });
  });

  describe('getContent', () => {
    it('Should return the markdown content', () => {
      const content = markdownReader.getContent();

      expect(fileHandlerReadFileSpy).toHaveBeenCalledWith('file path');
      expect(content).toBe('content');
    });
  });
});

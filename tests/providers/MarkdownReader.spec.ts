import { describe, expect, it, vi, Mocked } from 'vitest';
import { MarkdownReader } from '../../src/providers/MarkdownReader';
import fs from 'fs';

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
    }
  })
}));

describe('Provider: MarkdownReader', () => {
  const fsMock = fs as Mocked<typeof fs>;

  const markdownReader = new MarkdownReader('file path');
  
  describe('getMetadata', () => {
    it('Should return the markdown metadata', () => {
      const metadata = markdownReader.getMetadata();

      expect(fsMock.readFileSync).toHaveBeenCalledWith('file path', 'utf-8');
      expect(metadata).toEqual({
        title: 'Post title',
        date: '2023-03-04',
        resume: 'Post resume'
      });
    });
  });
});

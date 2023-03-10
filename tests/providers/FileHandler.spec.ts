import { describe, expect, it, vi, Mocked, Mock } from 'vitest';
import { FileHandler } from '../../src/providers/FileHandler';
import fs from 'fs';

vi.mock('fs', () => ({
  default: {
    readdirSync: vi.fn().mockReturnValue(['file 1', 'file 2']),
    readFileSync: vi.fn().mockReturnValue('file content')
  }
}));

describe('Provider: FileHandler', () => {
  const fsMock = fs as Mocked<typeof fs>;

  describe('readDirectory', () => {
    it('Should return all files in directory', () => {
      const filesInDirectory = FileHandler.readDirectory('directory');

      expect(fsMock.readdirSync).toHaveBeenCalledWith('directory');
      expect(filesInDirectory).toEqual(['file 1', 'file 2']);
    });
  });

  describe('readFile', () => {
    it('Should return the file content', () => {
      const fileContent = FileHandler.readFile('file');

      expect(fsMock.readFileSync).toHaveBeenCalledWith('file');
      expect(fileContent).toBe('file content');
    });
  });
});

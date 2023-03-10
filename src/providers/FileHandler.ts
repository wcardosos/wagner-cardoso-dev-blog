import fs from 'fs';

export class FileHandler {
  static readDirectory(path: string): string[] {
    return fs.readdirSync(path);
  }

  static readFile(filePath: string): string |Buffer {
    return fs.readFileSync(filePath);
  }
}
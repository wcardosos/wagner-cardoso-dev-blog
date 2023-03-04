import fs from 'fs';

export class FileHandler {
  static readDirectory(path: string): string[] {
    return fs.readdirSync(path);
  }
}
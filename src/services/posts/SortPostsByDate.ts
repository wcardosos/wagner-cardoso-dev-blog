import { Post } from '@/entities/Post';


export class SortPostsByDate {
  execute(posts: Post[]): Post[] {
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
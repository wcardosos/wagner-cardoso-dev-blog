import { SortPostsByDate } from '../../../src/services/posts/SortPostsByDate';
import { describe, expect, it} from 'vitest';

describe('Service: SortPostsByDate', () => {
  const sortPostsByDateService = new SortPostsByDate();

  describe('execute', () => {
    const postsMock = [
      {
        id: 'id',
        title: 'Post 1',
        resume: 'Post 1 resume',
        date: '2023-03-07'
      },
      {
        id: 'id',
        title: 'Post 3',
        resume: 'Post 3 resume',
        date: '2023-03-09'
      },
      {
        id: 'id',
        title: 'Post 2',
        resume: 'Post 2 resume',
        date: '2023-03-08'
      },
    ];

    it('Should return the posts sorted', () => {
      const postsSorted = sortPostsByDateService.execute(postsMock);

      expect(postsSorted).toEqual([
        {
          id: 'id',
          title: 'Post 3',
          resume: 'Post 3 resume',
          date: '2023-03-09'
        },
        {
          id: 'id',
          title: 'Post 2',
          resume: 'Post 2 resume',
          date: '2023-03-08'
        },
        {
          id: 'id',
          title: 'Post 1',
          resume: 'Post 1 resume',
          date: '2023-03-07'
        },
      ]);
    });
  });
});
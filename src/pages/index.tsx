import Intro from '@/components/Intro';
import PostComponent from '@/components/Post';
import { Post } from '@/entities/Post';
import { GetAllPosts } from '@/services/posts/GetAllPosts';
import { SortPostsByDate } from '@/services/posts/SortPostsByDate';
import Head from 'next/head';
import Link from 'next/link';
interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Wagner Cardoso - Blog</title>
      </Head>
      <main className="py-12">
        <Intro />

        <section className="grid gap-6 pt-12">
          {
            posts.map(({id, title, date, resume}) => (
              <Link
                href={`/posts/${id}`}
                key={id}
              >
                <PostComponent
                  title={title}
                  date={new Date(date)}
                  resume={resume}
                />
              </Link>
            ))
          }
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const getAllPostsService = new GetAllPosts();
  const sortPostsByDateService = new SortPostsByDate();
  
  const allPosts = getAllPostsService.execute();

  const postsSorted = sortPostsByDateService.execute(allPosts);

  return {
    props: {
      posts: postsSorted
    }
  };
}

import Intro from '@/components/Intro';
import Post from '@/components/Post';
import Head from 'next/head';

import { getSortedPostsData } from '@/lib/posts';

interface PostInfo {
  id: string
  title: string
  date: string
  resume: string
}

interface HomeProps {
  posts: PostInfo[]
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
              <Post
                key={id}
                title={title}
                date={new Date(date)}
                resume={resume}
              />
            ))
          }
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return {
    props: {
      posts
    }
  };
}

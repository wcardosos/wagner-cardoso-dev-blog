import Intro from '@/components/Intro';
import Post from '@/components/Post';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wagner Cardoso - Blog</title>
      </Head>
      <main className="py-12">
        <Intro />

        <section className="grid gap-6 pt-12">
          <Post
            title="Título legal da postagem massa"
            date={new Date()}
            resume="Resumo da postagem massa um pouco maior"
          />
          <Post
            title="Título legal da postagem"
            date={new Date()}
            resume="Resumo da postagem massa"
          />
          <Post
            title="Título legal da postagem"
            date={new Date()}
            resume="Resumo da postagem massa"
          />
        </section>
      </main>
    </>
  );
}

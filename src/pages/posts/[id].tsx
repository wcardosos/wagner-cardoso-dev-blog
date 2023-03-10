import { Post as PostEntity } from '@/entities/Post';
import { GetAllPostsIdsFromDirectory } from '@/services/posts/GetAllPostsIdsFromDirectory';
import { GetPostById } from '@/services/posts/GetPostById';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

interface HomeProps {
  post: PostEntity;
}

export default function Post({ post: { title, date } }: HomeProps) {
  const dateFormatted = new Date(date).toLocaleDateString(
    'pt-br', 
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="py-12 lg:px-4">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl text-red-500">{title}</h1>
          <p className="text-sm">{dateFormatted}</p>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const postsIds = new GetAllPostsIdsFromDirectory().execute();

  const paths = postsIds.map(postId => ({
    params: {
      id: postId
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = new GetPostById().execute(params?.id as string);

  return {
    props: {
      post
    }
  };
}

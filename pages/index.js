import Head from 'next/head';
import SearchGithub from '../components/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Github Search</title>
        <meta
          name="description"
          content="A app that lets you search github repos"
        />
      </Head>

      <SearchGithub />
    </div>
  );
}

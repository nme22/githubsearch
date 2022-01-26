import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Github Search</title>
        <meta
          name="description"
          content="A app that lets you search github repos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

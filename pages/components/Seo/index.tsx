import Head from "next/head";

interface ISeoProps {
  title?: string;
  description: string;
}

const Seo = ({ title, description }: ISeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;

// import { useRouter } from "next/router";

import AppFrame from "@components/re_usables/app_frame/AppFrame";
// import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Article = {
  data?: any;
  meta?: any;
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = async () => {
  //   const res = await fetch(
  //     `http://localhost:1337/api/articles?filters[slug][$eq]=welcome-to-the-void-a-long-await&populate=*`
  //   );
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const article = await res.json();
  return { props: { article } };
};

export default function Article({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("hey", article);
  //   const router = useRouter();
  //   return <div>{router.query.articleId}</div>;
  return (
    <AppFrame>
      <article>
        {/* <h1>{article.data[0].attributes.title}</h1> */}
        {/* <h1>{String(article)}</h1> */}
      </article>
    </AppFrame>
  );
}

// const article = getArticleBySlug(context.query.articleId);
//localhost:1337/api/articles/1?populate=*
// const article = await fetch(`http://localhost:1337/api/articles/${context.query.articleId}`);
// const article = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${context.query.articleId}&populate=*`);

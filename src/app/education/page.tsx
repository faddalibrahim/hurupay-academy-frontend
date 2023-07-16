// "use client";
import AppFrame from "@components/re_usables/app_frame/AppFrame";
import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import { getAllArticles } from "@network/functions";
import { BASE_URL } from "@network/urls";
import Link from "next/link";

export default async function Education({ searchParams }: any) {
  console.log(searchParams);
  const ARTICLES = await getAllArticles(searchParams?.page ?? 1);
  const ALL_ARTICLES = ARTICLES.data;
  const { pagination: PAGINATION } = ARTICLES.meta;
  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-lg">Articles ({PAGINATION.total})</h1>
        <div className="flex flex-wrap flex-col md:justify-start md:flex-row items-center gap-5">
          {ALL_ARTICLES.map((article: any) => {
            const { id } = article;
            const { title, publishedAt, featuredImage, slug } =
              article.attributes;
            return (
              <ArticleCard
                key={id}
                link={`/education/${slug}`}
                image={`${BASE_URL}${featuredImage.data.attributes.url}`}
                title={title}
                date={new Date(publishedAt.split("T")[0]).toDateString()}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-4">
          {PAGINATION.page > 1 && (
            <Link href={`/education?page=${PAGINATION.page - 1}`}>prev</Link>
          )}
          {PAGINATION.page} of {PAGINATION.pageCount}
          {PAGINATION.page < PAGINATION.pageCount && (
            <Link href={`/education?page=${PAGINATION.page + 1}`}>next</Link>
          )}
        </div>
      </div>
    </AppFrame>
  );
}

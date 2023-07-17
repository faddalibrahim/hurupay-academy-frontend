// "use client";
import AppFrame from "@components/re_usables/app_frame/AppFrame";
import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import { getAllArticles } from "@network/functions";
import { BASE_URL } from "@network/urls";
import Link from "next/link";

export default async function Education({ searchParams }: any) {
  console.log(searchParams);
  let articles;
  let allArticles: any[] = [];
  let pagination;

  try {
    articles = await getAllArticles(searchParams?.page ?? 1);
    allArticles = articles.data;
    pagination = articles.meta.pagination;
  } catch (e) {
    console.log(e);
  }

  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-lg">Articles ({pagination?.total})</h1>
        <div className="flex flex-wrap flex-col md:justify-start md:flex-row items-center gap-5">
          {allArticles.map((article: any) => {
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
          {pagination?.page > 1 && (
            <Link href={`/education?page=${pagination?.page - 1}`}>prev</Link>
          )}
          {pagination?.page} of {pagination?.pageCount}
          {pagination?.page < pagination?.pageCount && (
            <Link href={`/education?page=${pagination?.page + 1}`}>next</Link>
          )}
        </div>
      </div>
    </AppFrame>
  );
}

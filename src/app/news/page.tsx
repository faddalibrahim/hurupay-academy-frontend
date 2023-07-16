import AppFrame from "@components/re_usables/app_frame/AppFrame";
import NewsCard from "@components/re_usables/news_card/NewsCard";
import { getAllNews } from "@network/functions";
import Link from "next/link";

export default async function News({ searchParams }: any) {
  const NEWS = await getAllNews(searchParams?.page ?? 1);
  const ALL_NEWS = NEWS.data;
  const { pagination: PAGINATION } = NEWS.meta;
  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-lg">News ({PAGINATION.total})</h1>
        <div className="flex flex-wrap flex-col md:justify-start md:flex-row items-center gap-5">
          {ALL_NEWS.map((news: any) => {
            const { id } = news;
            const { title, link, featuredImageUrl } = news.attributes;
            return (
              <NewsCard
                key={id}
                link={link}
                image={featuredImageUrl}
                title={title}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-4">
          {PAGINATION.page > 1 && (
            <Link href={`/news?page=${PAGINATION.page - 1}`}>prev</Link>
          )}
          {PAGINATION.page} of {PAGINATION.pageCount}
          {PAGINATION.page < PAGINATION.pageCount && (
            <Link href={`/news?page=${PAGINATION.page + 1}`}>next</Link>
          )}
        </div>
      </div>
    </AppFrame>
  );
}

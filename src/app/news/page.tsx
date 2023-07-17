import AppFrame from "@components/re_usables/app_frame/AppFrame";
import NewsCard from "@components/re_usables/news_card/NewsCard";
import { getAllNews } from "@network/functions";
import Link from "next/link";

export default async function News({ searchParams }: any) {
  let news;
  let allNews: any[] = []
  let pagination;


  try{
     news = await getAllNews(searchParams?.page ?? 1);
    allNews = news.data;
    pagination = news.meta.pagination;
  }catch(e){
    console.log(e)
  }

  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-lg">News ({pagination?.total})</h1>
        <div className="flex flex-wrap flex-col md:justify-start md:flex-row items-center gap-5">
          {allNews.map((news: any) => {
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
          {pagination?.page > 1 && (
            <Link href={`/news?page=${pagination?.page - 1}`}>prev</Link>
          )}
          {pagination?.page} of {pagination?.pageCount}
          {pagination?.page < pagination?.pageCount && (
            <Link href={`/news?page=${pagination?.page + 1}`}>next</Link>
          )}
        </div>
      </div>
    </AppFrame>
  );
}

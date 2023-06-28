import AppFrame from "@components/re_usables/app_frame/AppFrame";
import NewsCard from "@components/re_usables/news_card/NewsCard";

export default function News() {
  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4">
        <div>
          <div className="flex flex-wrap flex-col md:justify-center md:flex-row items-center gap-7">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

import AppFrame from "@components/re_usables/app_frame/AppFrame";
import ArticleCard from "@components/re_usables/article_card/ArticleCard";

export default function Education() {
  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <div className="flex flex-wrap flex-col md:justify-center md:flex-row items-center gap-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </AppFrame>
  );
}

import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import Button from "@components/re_usables/button/Button";

export default function RecentArticles() {
  return (
    <div className="flex flex-col gap-10 py-10 px-5 justify-center">
      <div className="flex justify-between items-center md:justify-between">
        <h1 className="text-xl md:text-2xl">Recent Articles</h1>
        <Button>{`>`}</Button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

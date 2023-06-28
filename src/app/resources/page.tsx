import AppFrame from "@components/re_usables/app_frame/AppFrame";
import ArticleCard from "@components/re_usables/article_card/ArticleCard";

export default function Resources() {
  return (
    <AppFrame>
      <div className="flex flex-col gap-5 p-10">
        <h1 className="text-2xl">Web3 Resources</h1>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="books"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="books" className="cursor-pointer">
              Books
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="podcasts"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="podcasts" className="cursor-pointer">
              Podcasts
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="websites"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="websites" className="cursor-pointer">
              Websites
            </label>
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-10 md:flex-row">
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

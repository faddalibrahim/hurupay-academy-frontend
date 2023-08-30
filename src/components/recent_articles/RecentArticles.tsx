import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import Button from "@components/re_usables/button/Button";
import Link from "next/link";
import { getRecentArticles } from "@network/functions";
import { BASE_URL } from "@network/urls";

export default async function RecentArticles() {
  const ARTICLE_COUNT = 4;

  let recentArticles: any[] = [];

  try {
    recentArticles = await getRecentArticles(ARTICLE_COUNT);
    console.log(recentArticles);
  } catch (e) {
    console.log(e);
    recentArticles = [];
  }

  // console.log(recentArticles[0].attributes.featuredImage.data.attributes.url);
  return (
    <div className="flex flex-col gap-10 py-10 px-5 justify-center">
      <div className="flex justify-between items-center md:justify-between">
        <h1 className="text-xl md:text-2xl">Recent Articles</h1>
        <Button>
          <Link href="/education">
            <small>view all</small>
          </Link>
        </Button>
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:justify-start items-center gap-5">
          {recentArticles.map((article: any) => {
            const { id } = article;
            const { title, content, publishedAt, featuredImage, slug } =
              article.attributes;
            return (
              <ArticleCard
                key={id}
                link={`/education/${slug}`}
                image={`${featuredImage.data[0].attributes.url}`}
                title={title}
                date={new Date(publishedAt.split("T")[0]).toDateString()}
              />
            );
          }) ?? null}
        </div>
      </div>
    </div>
  );
}

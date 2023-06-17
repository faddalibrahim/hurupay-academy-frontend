import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import Footer from "@components/re_usables/footer/Footer";
import Navbar from "@components/re_usables/navbar/Navbar";
import SubscribeToNewsletter from "@components/re_usables/subscribe_to_newsletter/SubscribeToNewsletter";

export default function Education() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="px-4 py-10">All Articles</h1>
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
      <SubscribeToNewsletter />
      <Footer />
    </div>
  );
}

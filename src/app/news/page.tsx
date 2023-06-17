import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import Footer from "@components/re_usables/footer/Footer";
import Navbar from "@components/re_usables/navbar/Navbar";
import NewsCard from "@components/re_usables/news_card/NewsCard";
import SubscribeToNewsletter from "@components/re_usables/subscribe_to_newsletter/SubscribeToNewsletter";

export default function News() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-10 px-4">
        <h1 className="px-4">News</h1>
        <div className="flex flex-wrap flex-col md:justify-center md:flex-row items-center gap-5">
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
      <SubscribeToNewsletter />
      <Footer />
    </div>
  );
}

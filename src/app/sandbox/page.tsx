import Button from "@components/re_usables/button/Button";
import ArticleCard from "@components/re_usables/article_card/ArticleCard";
import Footer from "@components/re_usables/footer/Footer";
import SubscribeToNewsletter from "@components/re_usables/subscribe_to_newsletter/SubscribeToNewsletter";
import AppDisplay from "@components/page_components/app_display/AppDisplay";
import RecentArticles from "@components/recent_articles/RecentArticles";
import Welcome from "@components/page_components/welcome/Welcome";
import Navbar from "@components/re_usables/navbar/Navbar";

export default function Sandbox() {
  return (
    <div className="w-fit">
      <Navbar />
      <Welcome />
      <RecentArticles />
      <AppDisplay />
      <SubscribeToNewsletter />
      <Footer />
    </div>
  );
}

import AppDisplay from "@components/page_components/app_display/AppDisplay";
import Welcome from "@components/page_components/welcome/Welcome";
import Footer from "@components/re_usables/footer/Footer";
import Navbar from "@components/re_usables/navbar/Navbar";
import SubscribeToNewsletter from "@components/re_usables/subscribe_to_newsletter/SubscribeToNewsletter";
import RecentArticles from "@components/recent_articles/RecentArticles";

export default function Home() {
  return (
    <main className="w-fit">
      <Navbar />
      <Welcome />
      <RecentArticles />
      <AppDisplay />
      <SubscribeToNewsletter />
      <Footer />
    </main>
  );
}

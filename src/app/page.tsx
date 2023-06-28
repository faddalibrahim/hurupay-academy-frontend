import AppDisplay from "@components/page_components/app_display/AppDisplay";
import Welcome from "@components/page_components/welcome/Welcome";
import AppFrame from "@components/re_usables/app_frame/AppFrame";
import Footer from "@components/re_usables/footer/Footer";
import Navbar from "@components/re_usables/navbar/Navbar";
import SubscribeToNewsletter from "@components/re_usables/subscribe_to_newsletter/SubscribeToNewsletter";
import RecentArticles from "@components/recent_articles/RecentArticles";
import App from "next/app";

export default function Home() {
  return (
    <AppFrame>
      <>
        <Welcome />
        <RecentArticles />
        <AppDisplay />
      </>
    </AppFrame>
  );
}

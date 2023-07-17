import AppDisplay from "@components/page_components/app_display/AppDisplay";
import Welcome from "@components/page_components/welcome/Welcome";
import AppFrame from "@components/re_usables/app_frame/AppFrame";
import RecentArticles from "@components/recent_articles/RecentArticles";

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

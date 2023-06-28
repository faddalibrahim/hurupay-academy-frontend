import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import SubscribeToNewsletter from "../subscribe_to_newsletter/SubscribeToNewsletter";

type AppFrameProps = {
  children: JSX.Element;
};

export default function AppFrame({ children }: AppFrameProps) {
  return (
    <main className="w-fit flex flex-col justify-between h-screen">
      <Navbar />
      <div className="grow overflow-y-scroll">
        {children}
        <SubscribeToNewsletter />
        <Footer />
      </div>
    </main>
  );
}

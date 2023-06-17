import Footer from "@components/re_usables/footer/Footer";
import GradientCard from "@components/re_usables/gradient_card/GradientCard";
import Navbar from "@components/re_usables/navbar/Navbar";
import ProfileCard from "@components/re_usables/profile_card/ProfileCard";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 justify-center md:flex-row justify-around py-10 px-10">
        <GradientCard
          title="Mission"
          content="To empower the African youth by providing them with knowledge and skills they need to thrive in the world of blockchain technology and cryptocurrencies. We aim to accelerate the adoption of these technologies and help our students achieve financial freedom"
        />
        <GradientCard
          title="Vision"
          content=" Our vision at Hurupay Academy is to create a world where every young African can access the tools and resources they need to become financially independent. We strive to be the leading platform for blockchain and cryptocurrency education in Africa, empowering the next generation of entrepreneurs and innovators to shape the future of finance on the continent."
        />
      </div>
      <div>
        <div className="flex items-center">
          <hr className="border-4 border-[#222] w-full" />
          <h1 className="text-4xl px-5">TEAM</h1>
          <hr className="border-4 border-[#222] w-full" />
        </div>

        <div className="px-5 py-8 flex flex-col items-center gap-4 md:flex-row justify-around">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

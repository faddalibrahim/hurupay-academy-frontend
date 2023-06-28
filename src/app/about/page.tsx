import AppFrame from "@components/re_usables/app_frame/AppFrame";
import GradientCard from "@components/re_usables/gradient_card/GradientCard";
import ProfileCard from "@components/re_usables/profile_card/ProfileCard";

export default function About() {
  const TEAM = [
    {
      name: "Philip Mburu",
      role: "CEO, Hurupay",
      image: "philip-mburu.jpeg",
    },
    {
      name: "James Mugambi",
      role: "COO, Hurupay",
      image: "james-mugambi.jpeg",
    },
    {
      name: "Allan Okoth",
      role: "CTO, Hurupay",
      image: "allan-okoth.jpeg",
    },
    {
      name: "Pascal Mathias",
      role: "Board Member, Hurupay",
      image: "pascal-mathias.jpeg",
    },
    {
      name: "Collins Wanga",
      role: "Community Mgr, Hurupay",
      image: "collins-wanga.jpg",
    },
    {
      name: "Daniel Byiringiro",
      role: "Cofounder, UniGhana",
      image: "daniel-byiringiro.jpeg",
    },
    {
      name: "Rebecca Eliezer",
      role: "Digital Marketer, Hurupay",
      image: "rebecca-eliezer.jpeg",
    },
  ];
  return (
    <AppFrame>
      <>
        <article className="p-10">
          <strong className="text-2xl md:text-3xl">Hurupay Academy</strong> was
          born out of our experience and frustration when learning about
          Bitcoin, Ethereum, Blockchain, DeFi, and NFTs. Like many others, we
          embarked on our learning journey by conducting web searches, only to
          find a scattered array of resources that were either too basic or too
          technical and filled with jargon. We felt overwhelmed and struggled to
          find a structured and approachable learning path.
          <br />
          <br />
          Realizing that there was a gap in the educational landscape, we
          decided to take matters into our own hands and create Hurupay Academy.
          Our goal was to provide a resource that offered a structured,
          non-technical approach to learning about these revolutionary
          technologies. We wanted to make the learning experience accessible to
          individuals without a technical background, ensuring they could grasp
          the concepts without feeling overwhelmed.
          <br />
          <br />
          With a passion for education and a desire to empower others, we set
          out to curate high-quality, freely available content that covers the
          essentials of Bitcoin, Ethereum, Blockchain, DeFi, NFTs, and more. We
          carefully crafted the course materials, drawing upon our own research,
          industry expertise, and feedback from learners like you.
          <br />
          <br />
          Hurupay Academy is the result of our dedication to bridging the gap
          between complex technologies and everyday learners. We are committed
          to providing a platform that empowers individuals to understand and
          navigate the world of digital finance and decentralized technologies,
          enabling them to make informed decisions and participate in the
          growing ecosystem.
        </article>
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

          <div className="w-full flex justify-center items-center">
            <div className="px-5 py-8 flex flex-wrap flex-col items-center gap-8 md:flex-row justify-center">
              {TEAM.map((member) => (
                <ProfileCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    </AppFrame>
  );
}

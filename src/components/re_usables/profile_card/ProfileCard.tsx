import Image from "next/image";

type ProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
  image: string;
};

export default function ProfileCard({
  name = "Full Name",
  role = "Title",
  bio = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
            minus modi beatae rem `,
  image,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col bg-[#111] w-[20rem] shadow-lg rounded-md px-8 py-5 gap-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="w-[5rem] h-[5rem] border-3 border-white">
            <Image
              src={`/${image}`}
              width={70}
              height={70}
              alt="Profile of person"
              style={{borderRadius: "50%"}}
            />
          </div>
          <section>
            <h1 className="text-[#FFC100] text-lg">{name}</h1>
            <small className="text-white">{role}</small>
          </section>
        </div>
        
      </div>
    </div>
  );
}

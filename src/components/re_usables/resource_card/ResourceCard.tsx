import Image from "next/image";
import Link from "next/link";

type ResourceCardProps = {
  link?: string;
  image?: string;
  title?: string;
};

export default function ResourceCard({
  link = "/",
  image = "crypto-graph.jpg",
  title = "Title",
}: ResourceCardProps) {
  return (
    <div className="bg-white w-fit shadow-md rounded-md w-[15rem] h-[17rem]">
      <Link href={link}>
        <Image
          src={image}
          width={200}
          height={200}
          alt="Picture of the article"
          loading="lazy"
          style={{ width: "100%", height: "10rem" }}
        />
        <div className="px-2 py-3 flex flex-col gap-4">
          <div>
            <h2 className="text-lg">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

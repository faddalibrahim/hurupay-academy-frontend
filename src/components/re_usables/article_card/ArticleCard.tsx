import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  link?: string;
  image?: string;
  title?: string;
  date?: string;
};

export default function ArticleCard({
  link = "/",
  image = "crypto-graph.jpg",
  title = "Title",
  date = "date",
}: ArticleCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md w-[15rem] h-[17rem]">
      <Link href={link}>
        <Image
          src={image}
          width={240}
          height={240}
          alt="Picture of the article"
          loading="lazy"
          style={{ width: "15rem", maxWidth: "15rem", height: "10rem" }}
        />
        <div className="px-2 py-3 flex flex-col gap-4">
          <div>
            <h2 className="text-lg">{title}</h2>
            <small className="text-gray-400">{date}</small>
          </div>
        </div>
      </Link>
    </div>
  );
}

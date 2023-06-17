import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  link?: string;
  image?: string;
  title?: string;
  date?: string;
  description?: string;
};

export default function ArticleCard({
  link = "/",
  image = "crypto-graph.jpg",
  title = "Title",
  date = "date",
  description = "description",
}: ArticleCardProps) {
  return (
    <div className="bg-white w-max shadow-md rounded-md">
      <Link href={link}>
        <Image
          src={`/${image}`}
          width={300}
          height={300}
          alt="Picture of the article"
          loading="lazy"
        />
        <div className="px-2 py-3 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl">{title}</h2>
            <small>{date}</small>
          </div>
          <article className="text-ellipsis overflow-hidden">
            {description}
          </article>
        </div>
      </Link>
    </div>
  );
}

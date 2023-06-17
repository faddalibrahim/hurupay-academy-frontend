import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  link?: string;
  image?: string;
  title?: string;
};

export default function NewsCard({
  link = "/",
  image = "crypto-graph.jpg",
  title = "Title",
}: NewsCardProps) {
  return (
    <div className="bg-white w-max shadow-lg rounded-md">
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
            <h2 className="text-lg">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

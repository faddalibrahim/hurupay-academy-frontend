import { type } from "os";

type GradientCardProps = {
  title: string;
  content: string;
};

export default function GradientCard({ title, content }: GradientCardProps) {
  return (
    <div className="flex flex-col gap-5 p-8 rounded bg-gradient-to-r from-[#FFC100] to-[#FFA800] hover:bg-gradient-to-l w-fit">
      <h1 className="text-2xl font-medium">{title}</h1>
      <article>{content}</article>
    </div>
  );
}

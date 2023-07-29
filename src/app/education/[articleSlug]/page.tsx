import AppFrame from "@components/re_usables/app_frame/AppFrame";
import Image from "next/image";
import { getArticleBySlug, parseMarkdown } from "@network/functions";
import { BASE_URL } from "@network/urls";
import CommentSection from "@components/page_components/comment_section/CommentSection";

type ArticleParams = {
  params: {
    articleSlug: string;
  };
};

export default async function Article({ params }: ArticleParams) {
  const article = await getArticleBySlug(params.articleSlug);

  if (!article.data.length) {
    return (
      <AppFrame>
        <>
          <h1>404</h1>
          <p>Sorry! The article you are looking for cannot be found</p>
        </>
      </AppFrame>
    );
  }

  const { title, content, publishedAt, featuredImage, comments } = await article
    .data[0].attributes;
  const articleId = article.data[0].id;
  const articleContent = await parseMarkdown(content);

  return (
    <AppFrame>
      <div className="flex flex-col justify-center items-center bg-gray-100">
        <div className="p-8 md:w-4/6 bg-white">
          <article>
            <div>
              <Image
                src={`${BASE_URL}${featuredImage.data[0].attributes.url}`}
                alt="Article Featured Image"
                width={0}
                height={0}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
              <br />
              <h1 className="text-2xl md:text-4xl font-bold text-capitalise">
                {title}
              </h1>
              <section className="text-gray-500 mt-1 mb-2">
                <small>
                  {new Date(publishedAt.split("T")[0]).toDateString()}
                </small>{" "}
                | <small>{comments?.data?.length ?? 0} comment(s)</small>
              </section>
              <p dangerouslySetInnerHTML={{ __html: articleContent }}></p>
            </div>
          </article>
          <CommentSection comments={comments} articleId={articleId} />
        </div>
      </div>
    </AppFrame>
  );
}

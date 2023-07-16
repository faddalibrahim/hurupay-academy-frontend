import { remark } from "remark";
import html from "remark-html";
import {
  ALL_ARTICLES_ROUTE,
  ALL_NEWS_ROUTE,
  ALL_RESOURCES_ROUTE,
  IMAGE_POPULATER,
  SORT_DESCENDING,
  ADD_NEWSLETTER_EMAIL,
  ADD_COMMENTS_ROUTE,
} from "./urls";

function articleSlugUrl(slug: string) {
  return ALL_ARTICLES_ROUTE + `?filters[slug][$eq]=${slug}&${IMAGE_POPULATER}`;
}

function paginate(page: number, pageSize = 5) {
  return `pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
}

export async function getArticleBySlug(slug: string) {
  const URL = articleSlugUrl(slug);
  const res = await fetch(URL);
  const article = await res.json();

  return article;
}

export async function getAllArticles(page = 1) {
  const PAGINATION = paginate(page);
  const URL = `${ALL_ARTICLES_ROUTE}?${PAGINATION}&${IMAGE_POPULATER}&${SORT_DESCENDING}`;
  const res = await fetch(URL);
  return await res.json();
}

export async function getRecentArticles(count: number) {
  const allArticles = await getAllArticles();
  return allArticles.data.slice(0, count);
}

export async function parseMarkdown(content: string) {
  const result = await remark().use(html).process(content);
  return result.toString();
}

// NEWS
export async function getAllNews(page = 1) {
  const PAGINATION = paginate(page);
  const URL = `${ALL_NEWS_ROUTE}?${PAGINATION}&${SORT_DESCENDING}`;
  const res = await fetch(URL);
  return await res.json();
}

// RESOURCES

export async function getAllResources(page = 1) {
  const PAGINATION = paginate(page);
  const URL = `${ALL_RESOURCES_ROUTE}?${PAGINATION}&${SORT_DESCENDING}`;
  const res = await fetch(URL);
  return await res.json();
}

export async function addUserEmailToNewsletter(email: string) {
  const res = await fetch(ADD_NEWSLETTER_EMAIL, {
    body: JSON.stringify({ data: { subscription_email: email } }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return res.json();
}

export async function postComment(data: any, articleId: number) {
  const payload = {
    data: {
      article: {
        connect: [articleId],
      },
      content: data.comment,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    },
  };

  const res = await fetch(ADD_COMMENTS_ROUTE, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return res.json();
}

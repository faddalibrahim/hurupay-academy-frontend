// general
export const BASE_URL = "http://127.0.0.1:1337";
export const IMAGE_POPULATER = "populate=*";
export const SORT_DESCENDING = "sort=id:desc";

// articles
export const ARTICLES_API_ROUTE = "/api/articles";
export const ALL_ARTICLES_ROUTE = `${BASE_URL}${ARTICLES_API_ROUTE}`;

// NEWS
export const NEWS_API_ROUTE = "/api/news";
export const ALL_NEWS_ROUTE = `${BASE_URL}${NEWS_API_ROUTE}`;

// RESOURCES
export const RESOURCES_API_ROUTE = "/api/resources";
export const ALL_RESOURCES_ROUTE = `${BASE_URL}${RESOURCES_API_ROUTE}`;

// NEWSLETTER
export const NEWSLETTER_API_ROUTE = "/api/newsletter-subscriptions";
export const ADD_NEWSLETTER_EMAIL = `${BASE_URL}${NEWSLETTER_API_ROUTE}`;

// comments
export const COMMENTS_API_ROUTE = "/api/comments";
export const ADD_COMMENTS_ROUTE = `${BASE_URL}${COMMENTS_API_ROUTE}`;

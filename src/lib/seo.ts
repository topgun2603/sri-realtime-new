import { useEffect } from 'react';

const SITE = 'https://srirealtime.com';
const BRAND = 'SRI REAL TIME';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

interface SeoOptions {
  /** Page-specific title. Brand name is appended automatically. */
  title: string;
  description: string;
  /** Route path, e.g. "/services". */
  path: string;
}

/** Keeps document metadata in step with the active route. */
export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} — ${BRAND}`;
    const url = `${SITE}${path === '/' ? '/' : path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setCanonical(url);
  }, [title, description, path]);
}

const BASE = '/api';

async function request(path, options) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Kuch galat ho gaya');
  return data;
}

export const getCompany = () => request('/company');
export const getPosts = () => request('/posts');
export const getPost = (slug) => request(`/posts/${slug}`);
export const sendContact = (body) => request('/contact', { method: 'POST', body: JSON.stringify(body) });

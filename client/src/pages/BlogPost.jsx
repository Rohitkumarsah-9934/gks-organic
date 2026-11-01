import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import useFetch from '../useFetch.js';
import { getPost } from '../api.js';

export default function BlogPost() {
  const { slug } = useParams();
  const { data: post, loading, error } = useFetch(() => getPost(slug), [slug]);

  return (
    <section className="container-page max-w-3xl py-10">
      <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-maroon hover:underline">
        <ArrowLeft className="h-4 w-4" /> Sab articles
      </Link>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-maroon">{error}</p>}
      {post && (
        <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <div className="text-6xl">{post.emoji}</div>
          <span className="mt-4 inline-block rounded-full bg-leaf-light px-3 py-1 text-xs font-medium text-leaf-dark">{post.category}</span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-maroon">{post.title}</h1>
          <p className="mt-1 text-xs text-gray-500">{new Date(post.createdAt).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
          <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-gray-700">{post.content}</div>
        </article>
      )}
    </section>
  );
}

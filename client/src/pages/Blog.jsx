import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import useFetch from '../useFetch.js';
import { getPosts } from '../api.js';

export default function Blog() {
  const { data: posts, loading, error } = useFetch(getPosts);
  const [q, setQ] = useState('');

  const filtered = useMemo(
    () => (posts || []).filter((p) => (p.title + p.excerpt + p.category).toLowerCase().includes(q.toLowerCase())),
    [posts, q]
  );

  return (
    <>
      <PageHeader title="Blog & Articles" subtitle="Healthy living, recipes aur superfood tips." />
      <section className="container-page py-10">
        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input className="input pl-12" placeholder="Articles search kijiye..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && (
          <p className="text-center text-maroon">
            Articles load nahi hue ({error}). MongoDB chalu hai aur `npm run seed` chalaya?
          </p>
        )}
        {!loading && !error && filtered.length === 0 && <p className="text-center text-gray-500">Koi article nahi mila.</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p._id}
              to={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-lime-100 to-green-200 text-6xl">{p.emoji}</div>
              <div className="p-5">
                <span className="rounded-full bg-leaf-light px-3 py-1 text-xs font-medium text-leaf-dark">{p.category}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-maroon group-hover:underline">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

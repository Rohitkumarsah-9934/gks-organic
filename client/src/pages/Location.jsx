import { MapPin, Phone, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import useFetch from '../useFetch.js';
import { getCompany } from '../api.js';

export default function Location() {
  const { data: company, loading, error } = useFetch(getCompany);

  return (
    <>
      <PageHeader title="Our Location" subtitle="Hamse milne ke liye yahan aaiye." />
      <section className="container-page grid gap-6 py-10 lg:grid-cols-3">
        <div className="space-y-4 rounded-3xl bg-leaf-soft p-6 lg:col-span-1">
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-sm text-maroon">{error}</p>}
          {company && (
            <>
              <p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-maroon" />{company.contact.address}</p>
              <p className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-maroon" />7079816996</p>
              <p className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-maroon" />{company.contact.hours}</p>
            </>
          )}
        </div>
        <div className="overflow-hidden rounded-3xl shadow-sm lg:col-span-2">
          <iframe
            title="GKS Organic location"
            src={company?.contact.mapEmbed || 'https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed'}
            className="h-80 w-full border-0 sm:h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

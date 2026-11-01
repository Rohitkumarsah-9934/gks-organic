
import {
  CheckCircle2,
  Leaf,
  Heart,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import useFetch from '../useFetch.js';
import { getCompany } from '../api.js';

const benefitIcons = [Leaf, Heart, ShieldCheck, Sparkles];

function BenefitSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
      <div className="h-14 w-14 rounded-2xl bg-gray-200" />
      <div className="mt-6 h-5 w-2/3 rounded bg-gray-200" />
      <div className="mt-4 h-3 w-full rounded bg-gray-100" />
      <div className="mt-2 h-3 w-4/5 rounded bg-gray-100" />
    </div>
  );
}

export default function Benefits() {
  const { data: company, loading, error } = useFetch(getCompany);

  const benefits = company?.benefits || [];

  return (
    <>
      <PageHeader
        title="Benefits"
        subtitle="Nature's superfood in every spoon - jaaniye kyun GKS Organic chune."
      />

      {/* Benefits Intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 md:py-20">

        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <Leaf size={17} />
              The Goodness of Nature
            </span>

            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-green-950 md:text-5xl">
              Good Health Begins
              <span className="block text-green-700">
                With Natural Goodness
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Discover the benefits of choosing GKS Organic.
              We believe in bringing natural goodness and quality
              products closer to your everyday life.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-green-800 shadow-sm">
                <CheckCircle2 size={18} />
                Natural Goodness
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-green-800 shadow-sm">
                <Heart size={18} />
                Better Lifestyle
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="container-page py-16 md:py-20">

        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-green-700">
            Why Choose Us
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-maroon md:text-4xl">
            Benefits of GKS Organic
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore what makes our natural products a meaningful
            choice for your everyday lifestyle.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-maroon" />
        </div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <BenefitSkeleton key={index} />
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">
              Benefits load nahi hue.
            </p>
            <p className="mt-2 text-sm text-red-600">
              Please try again later. ({String(error)})
            </p>
          </div>
        )}

        {!loading && !error && benefits.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => {
              const Icon =
                benefitIcons[index % benefitIcons.length];

              return (
                <article
                  key={benefit.title || index}
                  className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
                >

                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>

                      <span className="font-serif text-4xl font-bold text-green-100 transition-colors group-hover:text-green-200">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                    </div>

                    <h3 className="mt-7 font-serif text-xl font-bold text-maroon transition-colors group-hover:text-green-800 md:text-2xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {benefit.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 border-t border-green-50 pt-5 text-sm font-semibold text-green-700">
                      <CheckCircle2 size={17} />
                      GKS Organic
                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        )}

        {!loading && !error && benefits.length === 0 && (
          <div className="rounded-3xl border border-dashed border-green-200 bg-green-50/50 px-6 py-14 text-center">
            <Leaf className="mx-auto text-green-600" size={45} />
            <h3 className="mt-4 font-serif text-2xl font-bold text-maroon">
              Benefits Coming Soon
            </h3>
            <p className="mt-2 text-gray-600">
              We are updating our benefits. Please check back soon.
            </p>
          </div>
        )}

      </section>

      {/* Bottom CTA */}
      <section className="bg-green-950 py-14 md:py-16">
        <div className="container-page text-center">

          <Sparkles className="mx-auto mb-5 text-green-300" size={34} />

          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Choose Natural. Choose Better.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100/80">
            Make natural goodness a part of your everyday lifestyle
            with GKS Organic.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-900 transition-all hover:bg-green-100 hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={19} />
          </a>

        </div>
      </section>
    </>
  );
}


import { Link } from 'react-router-dom';
import {
  Leaf,
  Heart,
  ShieldCheck,
  Recycle,
  Sprout,
  Target,
  Eye,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import useFetch from '../useFetch.js';
import { getCompany } from '../api.js';
import Beetroot from "../Images/Beetroot.jpeg";

const values = [
  {
    icon: Leaf,
    title: 'Pure & Natural',
    description: 'Bringing natural goodness and purity into your everyday life.',
  },
  {
    icon: ShieldCheck,
    title: 'High Quality',
    description: 'Committed to maintaining quality in every product we offer.',
  },
  {
    icon: Heart,
    title: 'Better Health',
    description: 'Making healthy and nutritious choices accessible to everyone.',
  },
  {
    icon: Recycle,
    title: 'Eco Friendly',
    description: 'Promoting a greener and more sustainable lifestyle.',
  },
];

export default function About() {
  const { data: company, loading, error } = useFetch(getCompany);

  const contact =  {
  phone: "+91 7079816996",
  email: "support.gks@gmail.com",
  address: " Jaipur, Rajasthan, India",
  whatsapp: "+91 7079816996",
  workingHours: "Monday - Saturday, 9:00 AM - 6:00 PM",
};

  return (
    <>
      <PageHeader
        title="About GKS Organic"
        subtitle="Our story, our passion and our commitment to natural goodness."
      />

      {/* HERO SECTION */}
     
<section className="relative w-full min-h-[600px] overflow-hidden">

  {/* Beetroot Background Image */}
  <img
    src="https://images.pexels.com/photos/7511800/pexels-photo-7511800.jpeg?auto=compress&cs=tinysrgb&w=1920"
    alt="Fresh Organic Beetroot"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex items-center min-h-[600px]">

    <div className="max-w-3xl text-white">

      <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/40 bg-white/10 font-semibold">
        <Leaf size={20} />
        Welcome to GKS Organic
      </span>

      <h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
        Nature's Goodness,
        <span className="block text-green-300">
          Your Healthy Lifestyle.
        </span>
      </h1>

      <p className="text-lg md:text-xl mt-6 leading-9 text-white/90">
        We believe that healthy living begins with nature.
        Our commitment is to bring natural, quality and
        nutritious food products closer to every home.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link
          to="/benefits"
          className="px-8 py-4 rounded-full bg-white text-green-800 font-semibold hover:bg-green-100 transition"
        >
          Explore Benefits
        </Link>

        <Link
          to="/contact"
          className="px-8 py-4 rounded-full border border-white font-semibold hover:bg-white hover:text-green-800 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* WHO WE ARE */}
      <section className="overflow-hidden bg-[#fafbf6] py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1000"
              alt="Nature and organic farming"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-xl sm:h-[480px]"
            />

            <div className="absolute -bottom-6 right-5 rounded-2xl bg-green-800 p-6 text-white shadow-xl sm:right-8">
              <Sprout size={34} />
              <p className="mt-2 font-serif text-xl font-bold">
                Naturally Better
              </p>
              <p className="mt-1 text-sm text-green-100">
                A healthier way of living
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <span className="font-semibold uppercase tracking-[3px] text-green-700">
              Who We Are
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Bringing Nature's
              <span className="block text-green-700">
                Goodness to Life
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              We are passionate about bringing the goodness of nature
              to your everyday life. At GKS Organic, we believe that
              quality food and healthy choices play an important role
              in creating a better lifestyle.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Our focus is on providing natural, high-quality and
              nutritious food products while encouraging people to
              make better choices for themselves and the environment.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Commitment to natural goodness',
                'Focus on quality and purity',
                'A healthier lifestyle for everyone',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/benefits"
              className="mt-9 inline-flex items-center gap-2 font-bold text-green-800 hover:gap-4 transition-all"
            >
              Discover More <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-semibold uppercase tracking-[3px] text-green-700">
              What We Believe
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Everything we do is guided by our commitment to
              nature, quality, health and sustainability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-3xl border border-green-100 bg-[#f8faf5] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:bg-green-50 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition group-hover:bg-green-800 group-hover:text-white">
                  <Icon size={35} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative overflow-hidden bg-[#164b32] py-20 text-white sm:py-24">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="container-page relative z-10">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[3px] text-green-200">
              Our Purpose
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-5xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-300 text-green-950">
                <Target size={32} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-green-50/90">
                {company?.mission ||
                  'Hamara mission hai har ghar tak shuddh, prakritik aur poshak khaana pahunchana.'}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-300 text-green-950">
                <Eye size={32} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-green-50/90">
                To inspire healthier communities by making natural
                food choices more accessible and promoting a
                sustainable relationship with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#fafbf6] py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="font-semibold uppercase tracking-[3px] text-green-700">
              Why GKS Organic
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              A Natural Choice
              <span className="block text-green-700">
                for a Better Tomorrow
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Choosing natural products is a step towards a
              healthier lifestyle. We aim to make that choice
              easier with our focus on quality and nature.
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Leaf className="h-7 w-7 shrink-0 text-green-700" />
                <div>
                  <h4 className="font-bold text-gray-900">Natural Focus</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Inspired by the goodness of nature.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="h-7 w-7 shrink-0 text-green-700" />
                <div>
                  <h4 className="font-bold text-gray-900">Quality First</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Focused on quality in every choice.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Heart className="h-7 w-7 shrink-0 text-green-700" />
                <div>
                  <h4 className="font-bold text-gray-900">Healthy Living</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Encouraging mindful food choices.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Recycle className="h-7 w-7 shrink-0 text-green-700" />
                <div>
                  <h4 className="font-bold text-gray-900">Green Future</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Supporting a sustainable lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={Beetroot}
              alt="Healthy fresh organic food"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-xl sm:h-[480px]"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <Sparkles className="h-7 w-7 text-green-700" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-green-900">
                    Choose Natural
                  </h4>
                  <p className="text-sm text-gray-600">
                    Make every choice count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY CONTACT DETAILS */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-semibold uppercase tracking-[3px] text-green-700">
              Get In Touch
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-5xl">
              We'd Love to Hear From You
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Have a question? Connect with the GKS Organic team.
            </p>
          </div>

          {loading ? (
            <p className="py-10 text-center text-gray-500">
              Loading company details...
            </p>
          ) : error ? (
            <p className="py-10 text-center text-red-600">
              Unable to load company details.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MapPin,
                  title: 'Our Address',
                  value: contact.address || 'Jaipur, Rajasthan, India',
                },
                {
                  icon: Phone,
                  title: 'Phone Number',
                  value: contact.phone || '+91 7079816996',
                },
                {
                  icon: Mail,
                  title: 'Email Address',
                  value: contact.email || 'supportgks@gmail.com',
                },
                {
                  icon: Clock,
                  title: 'Working Hours',
                  value: contact.hours || 'Monday - Saturday',
                },
              ].map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-green-100 bg-[#f8faf5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-gray-900">
                    {title}
                  </h3>

                  <p className="mt-3 break-words text-sm leading-7 text-gray-600">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#164b32] px-4 py-16 text-center text-white sm:py-20">
        <div className="container-page">
          <Leaf className="mx-auto h-12 w-12 text-green-200" />

          <h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">
            Make a Natural Choice Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
            Discover the goodness of nature and take a step towards
            a healthier and more mindful lifestyle with GKS Organic.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-900 transition hover:-translate-y-1 hover:bg-green-100"
          >
            Get In Touch <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}

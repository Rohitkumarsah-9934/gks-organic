
import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Leaf,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import PageHeader from '../components/PageHeader.jsx';
import { sendContact } from '../api.js';

const empty = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({
    type: 'idle',
    text: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: 'loading', text: '' });

    try {
      const res = await sendContact(form);

      setStatus({
        type: 'success',
        text: res?.message || 'Your message has been sent successfully!',
      });

      setForm(empty);
    } catch (err) {
      setStatus({
        type: 'error',
        text: err?.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or need assistance? We'd love to hear from you."
      />

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 md:py-24">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="container-page relative">

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-800 shadow-sm">
                <Leaf size={17} />
                Get In Touch
              </span>

              <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-green-950 md:text-5xl">
                Let's Start a
                <span className="block text-green-700">
                  Healthy Conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 md:text-lg">
                At GKS Organic, we value your thoughts and questions.
                Whether you want to know more about our products or
                simply share your feedback, we're here to listen.
              </p>

              {/* Contact Highlights */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <MessageCircle size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Have a Question?
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Send us your queries and feedback.
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Product Enquiries
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Ask us about our organic products.
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      We're Here to Help
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Share your requirements with our team.
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom Note */}
              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-green-900 p-5 text-white">

                <Sparkles className="mt-1 shrink-0 text-green-300" size={22} />

                <div>
                  <h3 className="font-semibold">
                    Your Feedback Matters!
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-green-100/80">
                    Every message helps us understand your needs
                    and improve your experience with GKS Organic.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Contact Form */}
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-xl shadow-green-900/5 sm:p-9">

              <div className="mb-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Send size={27} />
                </div>

                <h2 className="mt-5 font-serif text-3xl font-bold text-maroon">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form below. Fields marked with *
                  are required.
                </p>

              </div>

              <form onSubmit={onSubmit} className="space-y-5">

                {/* Name and Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      className="input w-full transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={onChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      className="input w-full transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={onChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    className="input w-full transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={onChange}
                    autoComplete="tel"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    className="input min-h-36 w-full resize-y transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    name="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-green-800 px-7 py-4 font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-900 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status.type === 'loading' ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {status.type === 'success' && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                    <p>{status.text}</p>
                  </div>
                )}

                {/* Error Message */}
                {status.type === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                    <p>{status.text}</p>
                  </div>
                )}

                <p className="text-xs leading-5 text-gray-400">
                  By submitting this form, you agree to let GKS Organic
                  use your details to respond to your enquiry.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

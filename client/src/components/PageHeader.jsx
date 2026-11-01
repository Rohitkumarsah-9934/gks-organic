export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-b from-leaf-light to-cream py-10 text-center sm:py-14">
      <div className="container-page">
        <h1 className="font-serif text-3xl font-bold text-leaf-dark sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-gray-600">{subtitle}</p>}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-maroon" />
      </div>
    </section>
  );
}

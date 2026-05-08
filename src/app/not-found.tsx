import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-3">This page took a long weekend.</h1>
      <p className="mt-5 max-w-prose text-stone-700">
        The page you're looking for moved, was renamed, or never existed in the first place.
        No worries — let's get you somewhere useful.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/services" className="btn-secondary">See Services</Link>
      </div>
    </section>
  );
}

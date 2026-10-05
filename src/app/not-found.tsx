import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="max-w-md rounded-xl border border-border bg-white p-8 shadow-sm">
        <span className="text-sm font-semibold uppercase tracking-wider text-leaf">
          404 Error
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-ink">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          Sorry, we couldn&apos;t find the page or recipe you are looking for in the Pet Rasoi pantry.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-forest px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client error in development
    console.error("Storefront Application Error:", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center"
      role="alert"
    >
      <div className="max-w-md rounded-xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          We encountered an unexpected error while loading this page. You can try refreshing or return to the storefront.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md border border-border bg-cream px-4 py-2 text-sm font-semibold text-ink hover:bg-cream-dark focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          >
            Return to Pet Rasoi
          </Link>
        </div>
      </div>
    </main>
  );
}

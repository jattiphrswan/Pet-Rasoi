export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-label="Loading Pet Rasoi kitchen..."
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-leaf/20 border-t-forest" />
        <span className="text-sm font-medium text-ink-muted">
          Preparing Pet Rasoi kitchen...
        </span>
      </div>
    </div>
  );
}

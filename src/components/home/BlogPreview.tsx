import Link from "next/link";

export function BlogPreview() {
  const posts = [
    {
      title: "Understanding Pet Food Labels",
      category: "Feeding Tips",
      date: "Oct 5, 2026",
      desc: "Learn how to read guaranteed analysis values, crude protein, and moisture percentages like a pro.",
    },
    {
      title: "Transitioning to Ready-to-Serve Meals",
      category: "Nutrition Guide",
      date: "Oct 3, 2026",
      desc: "A simple 7-day gentle transition schedule to avoid tummy upsets when introducing freshly cooked food.",
    },
    {
      title: "The Power of Natural Bone Broth",
      category: "Pet Wellness",
      date: "Sep 28, 2026",
      desc: "Why pouring warm bone broth over daily meals provides instant hydration, collagen, and joint comfort.",
    },
  ];

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
            Kitchen Journal
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-ink">
            Pet Nutrition &amp; Feeding Guides
          </h2>
        </div>
        <Link href="#blog" className="mt-2 sm:mt-0 text-xs font-semibold text-sage-dark hover:underline">
          View All Articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <article
            key={i}
            className="rounded-xl border border-border bg-white p-5 flex flex-col justify-between shadow-subtle hover:border-sage-border transition"
          >
            <div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-sage-dark">
                <span>{post.category}</span>
                <span>•</span>
                <span className="text-ink-subtle">{post.date}</span>
              </div>
              <h3 className="mt-2 font-serif font-bold text-base text-ink hover:text-sage-dark transition cursor-pointer">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">{post.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <span className="text-xs font-semibold text-sage-dark hover:underline cursor-pointer">
                Read Article →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

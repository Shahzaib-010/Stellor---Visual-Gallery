import Link from "next/link";
import blogs from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
      <div className="mb-10 max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          Journal
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Notes from the making side of the studio.
        </h1>
        <p className="text-base leading-7 text-stone-300">
          Starter blog content is sourced from the local `data/blogs.js` file.
        </p>
      </div>

      <div className="grid gap-5">
        {blogs.map((post) => (
          <article
            key={post.slug}
            id={post.slug}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-stone-500" />
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-medium text-white">
              {post.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
              {post.excerpt}
            </p>
            <Link
              href={`/blog#${post.slug}`}
              className="mt-5 inline-flex text-sm font-medium text-amber-300 transition hover:text-amber-200"
            >
              Read article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

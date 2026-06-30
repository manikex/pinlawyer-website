export default function Loading() {
  return (
    <section className="min-h-screen bg-white px-4 py-16 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
        <div className="mt-8 h-10 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-slate-200" />
        <div className="mt-10 space-y-4">
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      </div>
    </section>
  );
}

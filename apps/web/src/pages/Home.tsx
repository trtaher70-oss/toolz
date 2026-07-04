import { Link } from 'react-router-dom'
import { tools } from '../data/tools'

const categoryLabel = {
  productivity: 'إنتاجية',
  developer: 'مطورين',
  business: 'أعمال',
} as const

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink" dir="rtl">
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-14 text-center">
        <h1 className="font-display font-bold text-5xl tracking-tight">Toolz</h1>
        <p className="mt-3 font-display font-bold text-lg">
          <span className="text-blueprint">12 أداة.</span>{' '}
          <span className="text-active">90 يوم.</span>{' '}
          <span className="text-open">تُبنى علنًا.</span>
        </p>
        <p className="mt-4 text-ink/70 max-w-xl mx-auto">
          مجموعة أدوات ويب عملية ومجانية ومفتوحة المصدر للطلاب، المطورين، المستقلين، وصنّاع
          المحتوى.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#tools"
            className="rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium"
          >
            استكشف الأدوات
          </a>
          <a
            href="https://github.com/trtaher70-oss/toolz"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              to={`/tools/${tool.slug}`}
              className="rounded-2xl border border-ink/10 bg-white/40 p-5 hover:border-blueprint/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-bold">{tool.name}</span>
                <span className="text-[11px] text-ink/50 border border-ink/15 rounded-full px-2 py-0.5">
                  {categoryLabel[tool.category]}
                </span>
              </div>
              <p className="text-sm text-ink/60">{tool.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

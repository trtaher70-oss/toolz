import { useParams, Navigate } from 'react-router-dom'
import ToolShell from '../components/ToolShell'
import { getToolBySlug } from '../data/tools'

export default function ToolPlaceholder() {
  const { slug } = useParams()
  const meta = slug ? getToolBySlug(slug) : undefined

  if (!meta) return <Navigate to="/" replace />

  return (
    <ToolShell meta={meta}>
      <ul className="mb-6 flex flex-wrap gap-2">
        {meta.features.map((f) => (
          <li
            key={f}
            className="rounded-full bg-blueprint/10 text-blueprint text-sm px-3 py-1"
          >
            {f}
          </li>
        ))}
      </ul>
      <p className="text-ink/70">
        هذه الأداة مجدولة لأسبوع {meta.week} من خطة الـ90 يوم، ولسه ما بُنيت. الكود رح يضاف هنا
        داخل <code className="text-sm">/tools/{meta.slug}</code>.
      </p>
    </ToolShell>
  )
}

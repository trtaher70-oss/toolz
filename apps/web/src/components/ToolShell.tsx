import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { ToolMeta } from '../data/tools'

interface ToolShellProps {
  meta: ToolMeta
  children: ReactNode
}

const statusLabel: Record<ToolMeta['status'], string> = {
  building: 'قيد البناء',
  planned: 'قادمة',
  released: 'متاحة',
}

export default function ToolShell({ meta, children }: ToolShellProps) {
  return (
    <div className="min-h-screen bg-paper text-ink" dir="rtl">
      <header className="border-b border-ink/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg">
          Toolz
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-full border border-ink/15 px-3 py-1 text-ink/70">
            {statusLabel[meta.status]}
          </span>
          <span className="font-display font-bold">{meta.name}</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-ink/60 mb-6">{meta.description}</p>
        <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">{children}</div>
      </main>

      <footer className="mx-auto max-w-3xl px-6 pb-10 text-xs text-ink/50">
        التخزين: محلي في متصفحك · Toolz — 12 Tools. 90 Days. Built in Public.
      </footer>
    </div>
  )
}

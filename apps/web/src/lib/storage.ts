/**
 * Local-first storage helper.
 * Every tool owns its own namespaced key: `toolz.<tool>.data`
 * Supabase sync (Phase 2) will read/write through this same interface later.
 */
const key = (tool: string) => `toolz.${tool}.data`

export function loadToolData<T>(tool: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key(tool))
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function saveToolData<T>(tool: string, data: T): void {
  try {
    localStorage.setItem(key(tool), JSON.stringify(data))
  } catch {
    // storage full or unavailable — fail silently, local-first has no hard dependency on it
  }
}

export function exportToolData(tool: string): string {
  return localStorage.getItem(key(tool)) ?? '{}'
}

export function importToolData(tool: string, json: string): void {
  JSON.parse(json) // validate before writing
  localStorage.setItem(key(tool), json)
}

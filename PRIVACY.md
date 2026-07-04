# Privacy

Toolz stores user data locally in the browser by default.

- We do not collect user data by default.
- We do not require accounts by default.
- We do not use paid AI APIs by default.
- Some optional cloud features may require external services such as Supabase or Cloudflare.

Each tool keeps its data under its own storage key (`toolz.<tool>.data`) and never shares it
with another tool or a server unless that tool's optional sync feature is explicitly enabled.

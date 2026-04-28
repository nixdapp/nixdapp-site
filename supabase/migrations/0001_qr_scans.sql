-- QR-sticker scan log.
--
-- Each scan of a QR / print campaign URL writes one row here.
-- We capture the variant (sticker-a, sticker-b, etc.) plus standard
-- UTMs and request metadata so we can compare conversion across
-- placements.
--
-- Append-only: there is no UPDATE or DELETE path from the website.
-- The table grows; query with date filters in the dashboard.

create table if not exists public.qr_scans (
  id          bigserial primary key,
  variant     text        not null,
  utm_source  text,
  utm_medium  text,
  utm_campaign text,
  referer     text,
  user_agent  text,
  scanned_at  timestamptz not null default now()
);

create index if not exists qr_scans_variant_idx
  on public.qr_scans (variant, scanned_at desc);

create index if not exists qr_scans_scanned_at_idx
  on public.qr_scans (scanned_at desc);

-- Row-level security: anon role can INSERT (the website's redirect
-- handler runs with the anon key), but no read access from the
-- public web. Read happens via the service role from the dashboard
-- or admin queries.
alter table public.qr_scans enable row level security;

drop policy if exists "qr_scans_anon_insert" on public.qr_scans;
create policy "qr_scans_anon_insert"
  on public.qr_scans
  for insert
  to anon
  with check (true);

-- A convenience view for "which sticker is winning" — counts per
-- variant per day. Filter by date range in your queries.
create or replace view public.qr_scans_daily as
select
  date_trunc('day', scanned_at)::date as day,
  variant,
  utm_campaign,
  count(*) as scans
from public.qr_scans
group by 1, 2, 3
order by 1 desc, 4 desc;

comment on table public.qr_scans is
  'Append-only log of QR/sticker scan redirects from /dl/[variant].';
comment on view public.qr_scans_daily is
  'Daily scan counts per variant. Use for sticker A/B comparison.';

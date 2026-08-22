# Repository Map — Mind-Reply + angellllkr-eng

> One product = one repo. No scattered duplicates.
> Last verified: 22 August 2026 — 22/22 live URLs confirmed HTTP 200.

## Live URL → Repo mapping

| # | Product | Live URL | Source Repo | Host |
|---|---|---|---|---|
| 1 | Sofia Tech Ledger (home) | https://mind-reply.github.io/A11-K/ | Mind-Reply/A11-K | GitHub Pages |
| 2 | Sofia Tech Ledger (NIS2) | https://mind-reply.github.io/A11-K/nis2.html | Mind-Reply/A11-K | GitHub Pages |
| 3 | Sofia Tech Ledger (announcements) | https://mind-reply.github.io/A11-K/announcements.html | Mind-Reply/A11-K | GitHub Pages |
| 4 | Sofia Tech Ledger (buy) | https://mind-reply.github.io/A11-K/buy.html | Mind-Reply/A11-K | GitHub Pages |
| 5 | Sofia Tech Ledger (founder) | https://mind-reply.github.io/A11-K/a11k-founder.html | Mind-Reply/A11-K | GitHub Pages |
| 6 | Sofia Tech Ledger (a11k-announcements) | https://mind-reply.github.io/A11-K/a11k-announcements.html | Mind-Reply/A11-K | GitHub Pages |
| 7 | Public Hub | https://mind-reply.github.io/angellllkr-eng.github.io/ | Mind-Reply/angellllkr-eng.github.io | GitHub Pages |
| 8 | A11K Ops Center | https://mind-reply.github.io/angellllkr-eng.github.io/ops-center/ | Mind-Reply/angellllkr-eng.github.io | GitHub Pages |
| 9 | A11K Security Gateway | https://mind-reply.github.io/angellllkr-eng.github.io/security-gateway/ | Mind-Reply/angellllkr-eng.github.io | GitHub Pages |
| 10 | Financial Momentum Ledger | https://mind-reply.github.io/angellllkr-eng.github.io/momentum-ledger/ | Mind-Reply/angellllkr-eng.github.io | GitHub Pages |
| 11 | ResellerPro | https://reseller-pro.vercel.app/ | local: resellerpro-platform-original | Vercel |
| 12 | Nova: CarrySignal | https://reseller-pro.vercel.app/nova/carrysignal.html | local: resellerpro-platform-original | Vercel |
| 13 | Nova: SignalCard | https://reseller-pro.vercel.app/nova/signalcard.html | local: resellerpro-platform-original | Vercel |
| 14 | Nova: SignalDesk | https://reseller-pro.vercel.app/nova/signaldesk.html | local: resellerpro-platform-original | Vercel |
| 15 | Nova: SignalSupply | https://reseller-pro.vercel.app/nova/signalsupply.html | local: resellerpro-platform-original | Vercel |
| 16 | Aether-X | https://aether-x.vercel.app/ | (Vercel project) | Vercel |
| 17 | Kratos-S | https://kratos-s.vercel.app/ | (Vercel project) | Vercel |
| 18 | MindReply | https://mindreply.vercel.app/ | (Vercel project) | Vercel |
| 19 | TapCraft | https://tapcraft.vercel.app/ | (Vercel project) | Vercel |
| 20 | RouteForge | https://routeforge.vercel.app/ | (Vercel project) | Vercel |
| 21 | AM Service Ads | https://am-service-ads-engine.vercel.app/ | Mind-Reply/am-service-ads-engine | Vercel |
| 22 | Stripe Payment Link | https://buy.stripe.com/00w9ANbQYfgkcyk3Gq63K07 | Stripe (test mode) | Stripe |

## Consolidation rules

1. **One product = one repo.** If a product has multiple deployments, they all trace back to one source repo.
2. **GitHub Pages** serves static sites from `gh-pages` branch (A11-K) or `main` branch (angellllkr-eng.github.io).
3. **Vercel** serves dynamic Next.js/Node apps. Each Vercel project should map to a GitHub repo.
4. **No orphan deployments.** Every live URL must trace to a named repo.
5. **Archived repos** are retained for reference but not linked from the hub.

## Repos to consolidate (TODO)

- ResellerPro local repo (`resellerpro-platform-original`) needs to be pushed to a GitHub repo
- Aether-X, Kratos-S, MindReply, TapCraft, RouteForge Vercel projects need GitHub repos created
- Duplicate `resellerpro-platform.vercel.app` should be consolidated to `reseller-pro.vercel.app`

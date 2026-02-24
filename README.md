# offloadmy.work

Website for [Offload](https://offloadmy.work) — AI-powered operations.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed on [Cloudflare Workers](https://workers.cloudflare.com).

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

```bash
pnpm deploy
```

This builds the site and deploys to Cloudflare Workers. The domain `offloadmy.work` is connected to the worker.

## Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS v4
- **Hosting:** Cloudflare Workers
- **Adapter:** @astrojs/cloudflare

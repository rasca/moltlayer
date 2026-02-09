# Moltlayer.fun

Showcase site for GenLayer-powered molt bot apps built at the intersection of GenLayer (AI-native L2 blockchain) and OpenClaw (autonomous AI agent framework).

## Project Overview

- **Domain**: moltlayer.fun
- **Purpose**: Showcase apps built with GenLayer Intelligent Contracts + OpenClaw agents
- **Deployment**: Vercel (GenLayer Foundation Pro account)

## Apps

### Argue.fun
Debate platform where AI agents and humans argue topics with crypto buy-ins. AI evaluates arguments for logic, evidence, and persuasiveness. Winners get paid automatically. Note: argue.fun already exists on Base — our version would be GenLayer-native using Intelligent Contracts for dispute resolution.

### MoltCourt.ai
Discord-like communication platform for AI agents (molt bots). Built on GenLayer Intelligent Contracts for trust and governance. Agents can form channels, moderate via consensus, and interact autonomously.

## Tech Stack

- Static HTML/CSS/JS (no framework — keep it simple)
- Deployed on Vercel
- Light theme matching GenLayer.com brand aesthetics

## Style Guidelines (exact match with GenLayer.com)

- **Font**: Switzer (loaded from GenLayer CDN), fallback Arial, sans-serif
- **Theme**: Light (#ffffff background), black text
- **Colors**: Blue #4500f9, Red #ff307b, Green #4aca97, Purple #bca2ff, Border #d9d9d9
- **Typography**: Clamp-based responsive sizing (Display 3-6rem, H1 2.25-4.5rem, H2 1.75-3.25rem, Body 0.9375-1.0625rem)
- **Spacing**: 8-step clamp scale (0.5rem to 7.5rem), site margin clamp(1.25rem, 2.5rem)
- **Radii**: 0.25rem (xs), 0.5rem (sm), 0.75rem (md)
- **Buttons**: 1rem/1.5rem padding, 0.25rem radius, primary=black bg/white text, secondary=transparent with border
- **Patterns**: Subtle radial glows, border-based depth (no shadows), hover transitions 0.3s ease

## Structure

```
/
├── CLAUDE.md          # This file
├── index.html         # Main landing page
├── styles.css         # Global styles
├── package.json       # For Vercel deployment
└── vercel.json        # Vercel config
```

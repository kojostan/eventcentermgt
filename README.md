# Asenso Hall Event Center

A responsive, five-page event venue website for ICFC Assembly of God in Fairfield, Ohio. Built with React, TypeScript, Vinext, and Cloudflare Workers through Sites.

## Pages

- Home: venue introduction, 11 event types, inspiration gallery, review placeholders, conversion links.
- Rental Information: member/non-member quote cards, half-day/full-day/multi-day options, availability inquiry.
- Policies: supplied agreement summarized faithfully; separate non-refundable booking and refundable security deposits, as confirmed by the owner; expandable FAQs.
- Gallery: nine categories, masonry layout, keyboard-accessible modal viewer and filtering.
- Contact: Lady Ruth, 513-111-2222, info@icfcassembly.org, 1367 Hicks Blvd, Fairfield, OH 45014; embedded map; reservation request.

## Run locally

Requires Node.js 22.13 or later.

```sh
npm run install:ci
npm run db:generate
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_open_baron_strucker.sql
npm run dev
```

Apply each local migration once, in order. Some Windows sandboxes prevent tsx from reading the username; `node scripts/generate-db-portable.cjs` generates the same Drizzle migrations with a process-local temporary cache label.

## Requests and operations

Both forms POST to /api/requests and store validated records in the Sites D1 database, table `event_requests`. Reservations include setup/start/end times, organization, membership, renter printed name, acknowledgment date, age and policy acknowledgment. The acknowledgment is not an electronic signature or an approved booking. No payment or agreement-signing workflow is implemented.

Records are pending until reviewed by the venue. Submission references use the AH prefix. Duplicate IDs are idempotent. Server validation rejects past/invalid dates, invalid guest counts, inconsistent times, missing reservation acknowledgments and prohibited form origins. A honeypot and five-submissions-per-hour IP-hash limit reduce abuse. No public endpoint exposes submitted personal information.

**Email notifications are not connected.** The owner can review requests using Sites database tools. A dedicated management interface, email delivery, and payment processing require further configuration. The public repository contains source only, no submissions or credentials.

## Content to complete

- Rental amounts, deposit amounts, capacity, exact half/full-day hours, equipment and available extras await venue confirmation.
- Verified testimonials and social profile URLs await owner input. Empty stars are labeled as unrated; no customer reviews were invented.
- Images are illustrative stock; replace with venue photographs. See ASSETS.md.
- The original PDF is kept private. Website policy copy derives from it; guests can request the formal agreement from the venue.

## Publishing

The .openai/hosting.json manifest retains the Sites project identity and logical D1 binding. Sites owns provisioning and applies saved Drizzle migrations at publication. Do not commit environment secrets, .sites-runtime, .wrangler, node_modules, or dist. New Sites are owner-private until access is changed explicitly.

The same source is published to https://github.com/kojostan/eventcentermgt. Future GitHub edits must also be synchronized and republished through Sites to update the hosted website.

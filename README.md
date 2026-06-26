# Leetsouls

Yes.

Its leetcode embedded into Fromsoft games as a mod

Good luck. or just dont die

## Leetsouls Design
![alt text](<Leetsouls Design.png>)

## Leetcode Randomizer Design

## Elden Ring Edition

Currently the only supported edition.

### How to Install

### How to Run

## Technologies Used

puppeteer

## Details about architecture

### API Request vs Cache for Randomizer

Moving from API Request per Randomize to Series of API Calls once, then caching the question names in json for fast lookup later.

```md
Fetching a single page:
- Fetching a page: 538.204ms
- Fetching a page: 372.856ms
- Fetching a page: 408.733ms
- Fetching a page: 205.154ms
- Fetching a page: 307.328ms

Calling by index from cache:
- Syncing_first_time: 8349ms
- cache_time: 0.953ms
- cache_time: 0.736ms
- cache_time: 0.893ms
- cache_time: 0.9ms
- cache_time: 0.754ms

Average via fetch then randomize: 366.455ms
Average via cache then randomize: 0.8472ms
```

Average Time reduction per request: -365.6078ms

8349ms / 366.455ms = 22 requests

Also questions are cached in leetcode-cache.json therefore user does not have to spend 8349ms for first sync.
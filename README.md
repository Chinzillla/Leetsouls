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

## Metrics/logging

Fetching a single page:
Fetching a page: 538.204ms
Fetching a page: 372.856ms
Fetching a page: 408.733ms
Fetching a page: 205.154ms
Fetching a page: 307.328ms

Calling by index from cache:
cache_time: 0.953ms
cache_time: 0.736ms
cache_time: 0.893ms
cache_time: 0.9ms
cache_time: 0.754ms

Average via fetch then randomize: 366.455ms
Average via cache then randomize: 0.8472ms

Time reduction: -365.6078ms

Decided to cache the problems instead of call the api request for each randomization. Saved 365ms per call.
import fs from 'node:fs/promises';
import { fetchLeetcodePage } from './helpers.js';

let skip = 0;
let total = 3199;
let allFreeQuestions = [];

console.log('Starting Leetcode free questions sync...');
console.time('leetcode_sync');

while (skip < total) {
  const questions = await fetchLeetcodePage(skip);
  allFreeQuestions.push(...questions);
  skip += 100;
}

console.log(`Cached ${allFreeQuestions.length} free questions`);
console.timeEnd('leetcode_sync');

await fs.writeFile(
  './leetcode-cache.json',
  JSON.stringify(allFreeQuestions, null, 2)
);
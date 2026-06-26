import { openLeetBrowser, getRandomQuestion } from './helpers.js';

const question = await getRandomQuestion();
await openLeetBrowser(question);
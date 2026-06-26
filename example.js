import puppeteer from 'puppeteer';
import { wait } from './helpers.js';

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
});

const pages = await browser.pages();
const page = pages[0];

await page.goto('https://www.google.com');

// 40 minutes
await wait(2400000);
await browser.close()


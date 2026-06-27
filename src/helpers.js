import puppeteer from 'puppeteer';
import fs from 'fs/promises';

export async function getRandomQuestion(){
    const file = await fs.readFile('./leetcode-cache.json', 'utf8');
    const cache = JSON.parse(file);
    const random_index = Math.floor(Math.random() * cache.length) + 1;

    return cache[random_index]
}

export function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds)
    })
}

export async function openLeetBrowser(question_name) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const pages = await browser.pages();
    const page = pages[0];

    await page.goto(`https://leetcode.com/problems/${question_name}`);
    await wait(2400000);
    await browser.close()
}

export async function fetchLeetcodePage(skip) {

    const query = `query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
            problemsetQuestionList: questionList(
                categorySlug: $categorySlug
                limit: $limit
                skip: $skip
                filters: $filters
            ) {
                total: totalNum
                questions: data {
                    titleSlug
                    paidOnly: isPaidOnly
                }
            }
        }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                categorySlug: '',
                skip: 0,
                limit: 100,
                filters: {},
            },
        }),
    });

    const json = await response.json();

    const questions = json.data.problemsetQuestionList.questions;
    const freeSlugs = questions
        .filter((question) => question.paidOnly === false)
        .map((question) => question.titleSlug);

    return freeSlugs
}
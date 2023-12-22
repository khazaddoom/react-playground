import fs from 'fs'
import puppeteer from 'puppeteer'

// results is a boolean array of results
const results = []

// launch the headless browser for testing
const browser = await puppeteer.launch({
    // executablePath: '/usr/bin/google-chrome',
    headless: false,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
    ]
})
const page = await browser.newPage()
page.on('console', message => console.log(`Browser log: `, message.text()))

// go to user source code page
await page.goto('http://localhost:5173')

// add jQuery and chai for unit testing support
await Promise.all([
    page.addScriptTag({
        url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
    }),
    page.addScriptTag({
        url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js'
    })
])

// add chai-dom
await page.addScriptTag({
    url: 'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js'
})

// Challenge 1: Input elements and calculate button
{
    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            expect(document.getElementById('totalCost')).to.exist
            expect(document.getElementById('numberOfIntervals')).to.exist
            expect(document.getElementById('calculate')).to.exist
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 1 failed: Required input elements or calculate button not found.')
            return false
        }
    })

    results.push(result)
}

// Challenge 2: Functionality of calculate button and output display
{
    // Type in the input fields
    await page.type('#totalCost', '10000')
    await page.type('#numberOfIntervals', '10')

    // Click the calculate button
    await page.click('#calculate')

    // Wait for React to update the DOM
    await page.waitForTimeout(1000)

    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            const outputText = document.getElementById('output').textContent.trim()
            console.error(outputText)
            expect(outputText.includes('1000.00')).to.be.true;
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 2 failed: Incorrect output or output format.')
            return false
        }
    })

    results.push(result)
}

// write the results array boolean
// fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))

await browser.close().catch(err => {})

// Exit the process
process.exit(0)

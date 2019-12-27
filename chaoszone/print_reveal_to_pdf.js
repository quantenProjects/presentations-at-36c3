const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://quantenprojects.github.io/presentations-at-36c3/lightning-talk/index.html?print-pdf');
    await page.pdf({path: 'slides.pdf', width: '373.3mm', height:'210mm', preferCSSPageSize: false, margin:{top:0,right:0,bottom:0,left:0}});
	await browser.close();
})()

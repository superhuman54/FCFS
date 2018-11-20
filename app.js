const {Builder, By, Key, until} = require('selenium-webdriver');
const { id, password } = require('./account.json');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.nike.com/kr/ko_kr/c/xc/2018energyweek');
        await driver.findElement(By.className('login')).click()
        await driver.wait(until.elementLocated(By.className("uk-form-large"))).then(async result => {
            const inputUsername = await result.findElement(By.id('j_username'));
            const inputPassword = await result.findElement(By.id('j_password'));

            await inputUsername.sendKeys(id, Key.TAB);
            await inputPassword.sendKeys(password, Key.RETURN);

            const btnposes = await driver.findElements(By.className("btnpos"))
            const href = await btnposes[1].getAttribute("data-click-area")
        });
        // await textfield.findElement(By.name('j_username')).sendKeys("superhuman54", Key.TAB)
        // await driver.findElement(By.css('j_username')).sendKeys('superhuman54', Key.TAB).then()
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {

    }
})();


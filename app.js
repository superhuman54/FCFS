const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.nike.com/kr/ko_kr');
      await driver.findElement(By.className('login')).click();
      const textfield = await driver.findElement(By.className("uk-form-row"));
      await textfield.findElement(By.name('j_username')).sendKeys("superhuman54", Key.TAB)
    // await driver.findElement(By.css('j_username')).sendKeys('superhuman54', Key.TAB).then()
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {

  }
})();


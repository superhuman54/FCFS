const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.nike.com/kr/ko_kr');
      await driver.findElement(By.className('login')).click()
      await driver.wait(until.elementLocated(By.className("uk-form-large"))).then(async result => {
          const inputUsername = await result.findElement(By.id('j_username'));
          const inputPassword = await result.findElement(By.id('j_password'));

          await inputUsername.sendKeys("", Key.TAB);
          await inputPassword.sendKeys("", Key.RETURN);

      });


      // await textfield.findElement(By.name('j_username')).sendKeys("superhuman54", Key.TAB)
    // await driver.findElement(By.css('j_username')).sendKeys('superhuman54', Key.TAB).then()
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {

  }
})();


module.exports = (browser) => {
    browser
    //Checking that all the correct information is displayed on employees
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .getText('p[id="employeeTitle"]', function(results) {
        console.log(results)
    })
    .getText('span[id="employeeID"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="nameEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="phoneEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="emailEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    .useXpath()
    .click('(//li)[3]')
    .useCss()
    .getText('p[id="employeeTitle"]', function(results) {
        console.log(results)
    })
    .getText('span[id="employeeID"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="nameEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="phoneEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="emailEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    browser.refresh()
    .pause(300)
    //Making sure everything is visible
    .useXpath()
    .assert.visible('(//li)[3]')
    .assert.visible('(//li)[4]')
    .assert.visible('(//li)[5]')
    .assert.visible('(//li)[6]')
    .useCss()
    // .end()   
}
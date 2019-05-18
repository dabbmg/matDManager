module.exports = (browser) => {
    browser
    .waitForElementPresent('li[name="addEmployee"]')
    .click('li[name="addEmployee"]')
    .pause(500)
    .setValue('input[name="searchBox"]', 'New')
    .useXpath()
    .click('(//li)[2]')
    .useCss()
    .assert.containsText('p[id="employeeTitle"]', 'New Employee')
    browser
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'Nicolaj')
    .click('button[id="saveBtn"]')
    .assert.containsText('p[id="employeeTitle"]', 'Nicolaj')
    browser
    .click('button[name="delete"]')
    .acceptAlert(function(results) {
        console.log(results)
    })
    .useXpath()
    .pause(200)
    .expect.element('(//li)[3]').to.not.be.present
    browser
    .useCss()
    .pause(300)
    .click('button[name="clearSearch"]')
    .useXpath()
    .pause(300)
    .waitForElementPresent('(//li)[5]')

}
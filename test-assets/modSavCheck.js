module.exports = (browser, nameEntry, phoneEntry, emailEntry, titleEntry) => {
    browser
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', nameEntry)
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', phoneEntry)
    .clearValue('input[name="emailEntry"]')
    .setValue('input[name="emailEntry"]', emailEntry)
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', titleEntry)
    .click('button[id="saveBtn"]')
    .useXpath()
    .click('(//li)[3]')
    .assert.containsText('(//li)[2]', nameEntry)
    browser
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .pause(500)
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'Timothy Duffy')
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', '1234567890')
    .clearValue('input[name="emailEntry"]')
    .setValue('input[name="emailEntry"]', 'abctest.com')
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', 'Manager')
    .click('button[id="saveBtn"]')
    .useXpath()
    .click('(//li)[3]')
    .assert.containsText('(//li)[2]', 'Timothy Duffy')
    browser
    .click('(//li)[2]')
    .useCss()
}
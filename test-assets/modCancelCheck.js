module.exports = (browser) => {
    browser
    //Cancelling Name
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[class="neutralButton"]')
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    //Cancelling Title
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[class="neutralButton"]')
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    //Cancelling Phone
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[class="neutralButton"]')
    .getValue('input[name="phoneEntry"]', function(results) {
        console.log(results)
    })
    //Cancelling Email
    .clearValue('input[name="emailEntry"]')
    .setValue('input[name="emailEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[class="neutralButton"]')
    .getValue('input[name="emailEntry"]', function(email) {
        console.log(email)
    })
    //All Together
    browser.refresh()
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .clearValue('input[name="emailEntry"]')
    .setValue('input[name="emailEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[class="neutralButton"]')
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="emailEntry"]', function(email) {
        console.log(email)
    })
    .getValue('input[name="phoneEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })
    .getValue('input[name="titleEntry"]', function(results) {
        console.log(results)
    })

}
module.exports = (browser) => {
    browser
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[id="saveBtn"]')
    .assert.containsText('span[class="errorMessage"]', 'The name field must be between 1 and 30 characters long.')
    browser
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'Timothy Duffy')
    .click('button[id="saveBtn"]')
    .getValue('input[name="nameEntry"]', function(results) {
        console.log(results)
    })
}
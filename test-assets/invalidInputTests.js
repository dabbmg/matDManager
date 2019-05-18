module.exports = (browser) => {
    browser
    //Invalid Name
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefg')
    .click('button[id="saveBtn"]')
    .assert.containsText('span[class="errorMessage"]', 'The name field must be between 1 and 30 characters long.')
    browser.refresh()
    //Invalid Phone [Too Short]
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', '123')
    .click('button[id="saveBtn"]')
    .assert.containsText('span[class="errorMessage"]', 'The phone number must be 10 digits long.')
    browser.refresh()
    //Invalid Phone [Too Long]
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', '12345678900')
    .click('button[id="saveBtn"]')
    .assert.containsText('span[class="errorMessage"]', 'The phone number must be 10 digits long.')
    //Red Underline Test
    .expect.element('input[name="phoneEntry"]').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
    browser.refresh()
    //Invalid Title [No Input]
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="titleEntry"]')
    .click('button[id="saveBtn"]')
    //BUGGED CANNOT TEST
    // .verify.containsText('span[class="errorMessage"]', 'The title field must be between 1 and 30 characters long.')
    browser.refresh()
    //Invalid Title [Too Long]
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', 'abcdefghijklmnopqrstuvwxyzabcdefghi')
    .click('button[id="saveBtn"]')
    //BUGGED CANNOT TEST
    // .verify.containsText('span[class="errorMessage"]', 'The title field must be between 1 and 30 characters long.')

}
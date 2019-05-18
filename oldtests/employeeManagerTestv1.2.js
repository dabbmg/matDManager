module.exports = {
    beforeEach: browser=> {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
        .waitForElementPresent('.titleBar', 2000)
    },
    after: browser => {
        browser.end()
    },
    'Can we see employee files and do they display the correct information': browser => {
        browser
        .assert.visible('li[name="employee1"]')
        .assert.visible('li[name="employee2"]')
        .assert.visible('li[name="employee3"]')
        .assert.visible('li[name="employee4"]')
        .assert.visible('li[name="employee5"]')
        .click('li[name="employee1"]')
        .assert.visible('input[name="nameEntry"]')
        .assert.visible('input[name="phoneEntry"]')
        .assert.visible('input[name="titleEntry"]')
        .assert.visible('span[name="employeeID"]')
        .assert.visible('button[name="save"]')
        .assert.visible('button[name="cancel"]')
        .assert.visible('p[name="employeeName"]')
    },
    'Can we modify employee files': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"', 'Bernice')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1234567890')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'Title')
        .click('#saveBtn')
        .assert.valueContains('input[value="Bernice"]', 'Bernice')
        .assert.valueContains('input[value="1234567890"]', '1234567890')
        .assert.valueContains('input[value="Title"]', 'Title')
    },
    'Invalid Name Error Test/Does the Name Entry Accept over 30 Characters': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"', 'abcdefghijklmnopqrstuvwxyzabcdefg')
        .click('#saveBtn')
        .useXpath()
        .assert.containsText('//div[contains(text(), "The name field must be between 1 and 30 characters long.")]', 'The name field must be between 1 and 30 characters long.')
        .useCss()
    },
    'Check phone number field only accepts 10 characters': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1')
        .click('#saveBtn')
        .useXpath()
        .assert.containsText('//div[contains(text(), "The phone number must be 10 digits long.")]', 'The phone number must be 10 digits long.')
        .useCss()
    },
    'Every editable field should be populated to save': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .click('#saveBtn')
        .assert.elementPresent('span[class="errorMessage"]')
    },
    'Saving a change should persist as you access other records': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Bernice')
        .click('#saveBtn')
        .click('li[name="employee2"]')
        .assert.containsText('li[class="listText"]', 'Bernice')
        .click('li[name="employee1"]')
        .assert.valueContains('input[value="Bernice"]', 'Bernice')
    },
    'Cancel Button Functionality': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Bernice')
        .click('.neutralButton')
        .assert.containsText('li[class="listText"]', 'Bernice Ortiz')
    },
    'Red Underline Test': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', 'Fake')
        .click('#saveBtn')
        .expect.element('input[name="phoneEntry"]').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
    },
    'Can save after error is presented': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1')
        .click('#saveBtn')
        .assert.containsText('span[class="errorMessage"]', 'The phone number must be 10 digits long.')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1234567890')
        .click('#saveBtn')
        .assert.hidden('span[class="errorMessage"]')
    },
    'Add New Employee': browser => {
        browser
        .click('li[name="addEmployee"]')
        .assert.elementPresent('li[name="employee11"]')
        .click('li[name="employee11"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Rosa Parks')
        .click('#saveBtn')
        .assert.visible('input[value="Rosa Parks"]')
    }
}
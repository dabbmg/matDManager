module.exports = (browser) => {
    browser
    .waitForElementPresent('input[name="searchBox"]')
    .click('li[name="addEmployee"]')
    .setValue('input[name="searchBox"]', 'New Employee')
    .expect.element('ul[class="listContainer"]').text.to.contain('New Employee')
    browser
    .useXpath()
    .waitForElementPresent('(//li)[2]')
    .click('(//li)[2]')
    .useCss()
    //Name Test
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', 'Superman')
    .click('button[id="saveBtn"]')
    .pause(300)
    .expect.element('ul[class="listContainer"]').text.to.not.contain('New Employee')
    browser
    .clearValue('input[name="searchBox"]')
    .setValue('input[name="searchBox"]', 'Superman')
    .pause(200)
    .expect.element('ul[class="listContainer"]').text.to.contain('Superman')
    browser
    //Phone Test
    .clearValue('input[name="searchBox"]')
    .setValue('input[name="searchBox"]', '1111')
    .pause(300)
    .expect.element('ul[class="listContainer"]').text.to.contain('Superman')
    browser
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', '3234567890')
    .click('button[id="saveBtn"]')
    .expect.element('ul[class="listContainer"]').text.to.not.contain('Superman')
    browser
    //Email Test
    .clearValue('input[name="emailEntry"]')
    .setValue('input[name="emailEntry"]', 'superman@email.com')
    .click('button[id="saveBtn"]')
    .pause(300)
    .clearValue('input[name="searchBox"]')
    .setValue('input[name="searchBox"]', 'superman@email.com')
    .pause(300)
    .expect.element('ul[class="listContainer"]').text.to.contain('Superman')
    browser
    //Title Test
    .clearValue('input[name="searchBox"]')
    .setValue('input[name="searchBox"]', 'New Employee')
    .pause(300)
    .expect.element('ul[class="listContainer"]').text.to.contain('Superman')
    browser
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', 'Mighty Man')
    .click('button[id="saveBtn"]')
    .pause(300)
    .expect.element('ul[class="listContainer"]').text.to.not.contain('Superman')
    browser
    //Delete and Clear Button Test
    .click('button[name="delete"]')
    .acceptAlert()
    .expect.element('ul[class="listContainer"]').text.to.not.contain('Superman')
    browser
    .click('button[name="clearSearch"]')
    .expect.element('ul[class="listContainer"]').text.to.not.contain('Superman')
    browser
    .expect.element('ul[class="listContainer"]').text.to.contain('Timothy Duffy')
}
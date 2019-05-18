var em2Page
module.exports = {
    beforeEach: browser => {
        em2Page = browser.page.em2()
        em2Page.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Info Check': browser => {
        em2Page
        .infoChck(browser)
    },
    'Modification Save Check': browser => {
        em2Page
        .modChck(browser)
    },
    'Modification Cancel Check': browser => {
        em2Page
        .modCancelChck(browser)
    },
    'Invalid Input Error Tests': browser => {
        em2Page
        .invalidInputTest(browser)
    },
    //Live API, annoying to Test
    'Add and Delete Employees': browser => {
        em2Page
        .addDltEmployee(browser)
    },
    'Save after fixing an Error': browser =>{
        em2Page
        .saveAfterErr(browser)
    },
    'Search Functionality Test': browser =>{
        em2Page
        .searchTest(browser)
    }
}
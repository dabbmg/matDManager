let infoCheck = require('../test-assets/infoCheck')
let modSavCheck = require('../test-assets/modSavCheck')
var validEntries = require('../test-assets/validEntryArray')
let invalidInputTests = require('../test-assets/invalidInputTests')
let modCancelCheck = require('../test-assets/modCancelCheck')
let addDeleteEmployee = require('../test-assets/addDeleteEmployee')
let saveAfterError = require('../test-assets/saveAfterError')
let searchBarTest = require('../test-assets/searchBarTest')

var managerCommands = {
    infoChck: function(em2Page) {
        infoCheck(em2Page)
        return this
    },
    modChck: function(em2Page) {
        modSavCheck(em2Page, 'Captain America', '1234567890', 'cap@manager.com', 'First Avenger')
        return this
    },
    invalidInputTest: function(em2Page) {
        invalidInputTests(em2Page)
        return this
    },
    modCancelChck: function(em2page) {
        modCancelCheck(em2page)
        return this
    },
    addDltEmployee: function(em2Page) {
        addDeleteEmployee(em2Page)
        return this
    },
    saveAfterErr: function(em2Page) {
        saveAfterError(em2Page)
        return this
    },
    searchTest: function(em2Page) {
        searchBarTest(em2Page)
        return this
    }
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [managerCommands],
    elements: {

    }
}
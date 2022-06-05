const { expect } = require('expect')
const { test } = require('picomatch')
const Manager = require('../lib/Manager.js')

test('office test', () => {
    const testOffice = 10
    const employeeGen = new Manager('mike', 156, 'michaely.ishmail@gmail.com', testOffice)
    expect(employeeGen.officeNumber).toBe(testOffice)
})

test('office return test', () => {
    const testOffice = 10
    const employeeGen = new Manager('mike', 156, 'michaely.ishmail@gmail.com', testOffice)
    expect(employeeGen.getOfficeNumber()).toBe(testOffice)
})

test('role test', () => {
    const testRole = 'Manager'
    const employeeGen = new Manager('mike', 156, 'michaely.ishmail@gmail.com', 10)
    expect(employeeGen.getRole()).toBe(testRole)
})
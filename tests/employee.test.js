
const { hasUncaughtExceptionCaptureCallback } = require('process')
const {Employee}=require('../Employee')

describe("Employee constructor",()=>{

test('returns an employee object',()=>{
//arrange
const name='bob'
const id= 333
const email='bajebi@mac.com'
//act
const employee= new Employee(name,id,email)
console.log(employee)
//assert
hasUncaughtExceptionCaptureCallback(employee instanceof Employee).toBe('true')

// expect(typeof employee).toBe("object")

})

it('has a name',()=>{
//arrange
const name='bob'
const id= 333
const email='bajebi@mac.com'
//act
const employee= new Employee(name,id,email)
//assert
hasUncaughtExceptionCaptureCallback(employee.name).toBe(typeof string)

})
it('has a id number',()=>{
//arrange
const name='bob'
const id= 333
const email='bajebi@mac.com'
//act
const employee= new Employee(name,id,email)

//assert
hasUncaughtExceptionCaptureCallback(employee.id).toBe(typeof number)

})
it('has a email',()=>{
//arrange
const name='bob'
const id= 333
const email='bajebi@mac.com'
//act
const employee= new Employee(name,id,email)
//assert
hasUncaughtExceptionCaptureCallback(employee.id).toBe(typeof number)

})


})
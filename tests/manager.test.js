const { hasUncaughtExceptionCaptureCallback } = require('process')

const {Manager}=require('../Manager')

describe("manager method",()=>{

test('returns an office number',()=>{
//arrange

const officeNumber= 333

//act
const manager= new Employee(officeNumber)
console.log(manager)
//assert
hasUncaughtExceptionCaptureCallback(manager instanceof Manager).toBe('true')

// expect(typeof employee).toBe("object")

})

// it('has a name',()=>{
// //arrange
// //act
// //assert

// })
// it('has a id number',()=>{
// //arrange
// //act
// //assert

// })
// it('has a email',()=>{
// //arrange
// //act
// //assert

// })


})

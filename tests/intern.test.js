

const Intern= require('../lib/Intern')

// describe("xxxxxxxxxxxxx",()=>{

it('gets intern school',()=>{
//arrange
const intern= new Intern("Bobby",227,'emailme@aol.com','UW')
//act
//assert
  expect(typeof intern.school).toBe('string')
})



it('gets role',()=>{
    //arrange
  
    const intern= new Intern("Bobby",227,'emailme@aol.com','UW')
    //assert
    
    expect(intern.getRole()).toEqual('intern')
    
})




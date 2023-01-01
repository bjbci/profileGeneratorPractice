

const Intern= require('../lib/Intern')

// describe("xxxxxxxxxxxxx",()=>{

it('gets intern school',()=>{
//arrange
const intern= new Intern("Bobby",227,'emailme@aol.com')
//act
//assert
  expect(intern.school).toEqual(expect.any('string'))
})



it('gets role',()=>{
    //arrange
  
    const intern= new Intern("Bobby",227,'emailme@aol.com')
    //assert
    
    expect(intern.getRole()).toEqual('Intern')
    
})



// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

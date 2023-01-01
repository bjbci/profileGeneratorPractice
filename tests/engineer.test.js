

const Engineer= require('../lib/Engineer')

// describe("engineer",()=>{

// })
// it('verifies github',()=>{
//     //arrange
  
//     const engineer= new Engineer('employee',"Bobby",227,'emailme@aol.com')
//     expect(engineer.github()).toEqual
    
//      })


it('gets role',()=>{
    //arrange
  
    const engineer= new Engineer("Bobby",227,'emailme@aol.com')
    //assert
    
    expect(engineer.getRole()).toEqual('Engineer')
    
})





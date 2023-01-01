

const Manager=require('../lib/Manager')

// describe("manager properties",()=>{



       
test('returns an office number',()=>{

//act
const manager= new Manager("Bobby",227,'emailme@aol.com',1010)

//assert
expect(typeof manager.office).toBe('number')


})





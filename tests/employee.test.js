
const Employee=require('../lib/Employee')

// describe("Employee constructor",()=>{//  MULTIPLE TEST GO INSIDE ONE DESCRIBE

it('returns an employee object',()=>{
//arrange
const employee= new Employee("Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof employee.name).toBe('string')
expect(typeof employee.id).toBe('number')
expect(typeof employee.email).toBe('string')
})



it('gets the correct name',()=>{
//arrange
const employee= new Employee("Bobby",227,'emailme@aol.com')
//act
//assert
expect(employee.getName()).toBe('Bobby')
})




it('returns an id',()=>{
//arrange
const employee= new Employee('employee',"Bobby",227,'emailme@aol.com')
//act
//assert
// let gID =getId()
// console.log(gID)
expect(typeof employee.getId()).toBe('string')
})




it('returns an employee email',()=>{
//arrange
const employee= new Employee("Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof employee.getEmail()).toBe('string')
})



const Employee=require('../lib/Employee')

// describe("Employee constructor",()=>{//  MULTIPLE TEST GO INSIDE ONE DESCRIBE

it('returns an employee object',()=>{
//arrange
const employee= new Employee(employee,"Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof manager).toBe('object')
})



it('gets the correct name',()=>{
//arrange
const employee= new Employee(employee,"Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof employee.getName()).toBe('string')
})




it('returns an id',()=>{
//arrange
const employee= new Employee('employee',"Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof employee.getId()).toBe('number')
})




it('returns an employee email',()=>{
//arrange
const employee= new Employee(employee,"Bobby",227,'emailme@aol.com')
//act
//assert
expect(typeof employee.getEmail()).toBe('string')
})


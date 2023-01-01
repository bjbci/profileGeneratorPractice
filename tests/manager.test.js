// const { hasUncaughtExceptionCaptureCallback } = require('process')

const {Manager}=require('../lib/Manager')

describe("manager properties",()=>{


it('has the correct name',()=>{
        //arrange
        const role='engineer'
        const name='Robert'
        const id=555
        const email="engineerEmail@email.com"
        //act
        const engineer= new Employee(role,name,id,email)
        //assert
        // hasUncaughtExceptionCaptureCallback(employee.name).toBe(typeof string)
        expect(engineer.name).toBe(name)
})

        it('returns an employee email',()=>{
            //arrange
            const role="employee"
            const name='Robbie'
            const id= 2023
            const email='employeeEmail@email.com'
            //act
            const employee= new Employee(role,name,id,email)
            //assert
            // hasUncaughtExceptionCaptureCallback(employee.id).toBe(typeof number)
            expect(typeof employee.email ).toBe('string')
            
             })


test('returns an office number',()=>{
//arrange

const officeNumber= 333

//act
const manager= new Manager(officeNumber)
console.log(manager)
//assert
(manager instanceof Manager).toBe('true')

// expect(typeof employee).toBe("object")

})



it('has a role',()=>{
//arrange
const role='Manager'

//act
const manager= new Manager()
const result= data[0].managerRole


//assert
})

}
// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
const  Employee=require('../lib/Employee')

class Intern extends Employee{
    // const intern= new Employee(role,name,id,email)

constructor(name,id,email,school){
super(role,name,id,email)



this.role=role
this.name=this.name
this.id=id
this.email=email
this.school=school

} 
    
    
// * `getSchool()`
getSchool(){
    return this.school
}

// * `getRole()`&mdash;overridden to return `'Intern'`
getRole(){
    return "intern"
}
}
module.exports=Intern
    
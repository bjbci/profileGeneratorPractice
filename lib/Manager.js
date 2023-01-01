const  Employee=require('../lib/employee')


class Manager extends Employee{
    // const intern= new Employee(role,name,id,email)

constructor(role,name,id,email,office){
super(role,name,id,email)



this.role=role
this.name=this.name
this.id=id
this.email=email
this.office=office

} 
    

// * `getRole()`&mdash;overridden to return `'Manager'`
getRole(){
    return "Manager"
}
}
    module.exports=Manager
const  Employee=require('../lib/employee')


class Manager extends Employee{
    // const intern= new Employee(role,name,id,email)

constructor(name,id,email,office){
super(name,id,email)




this.name=this.name
this.id=id
this.email=email
this.office=office
console.log(this.office)

} 
    

// * `getRole()`&mdash;overridden to return `'Manager'`
getRole(){
    return "Manager"
}
}
    module.exports=Manager
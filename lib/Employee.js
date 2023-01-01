

class  Employee{
    constructor(role,name,id,email){

    this.role=role
    this.name = name;
    this.id = id;
    this.email = email;
}

// prototypes
getName(){
    console.log(this.name);
    return this.name;

}

getId(){
    console.log(this.id);
    return this.id;
    
}

getEmail(){
    console.log(this.email);
    return this.email;
    
}

getRole(){
// * `getRole()`&mdash;returns `'Employee'`
return 'Employee'
}

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`
}
module.exports=Employee


class  Employee{
    constructor(name,id,email){

    
    this.name = name;
    this.id = id;
    this.email = email;
   
    console.log(this.name)
    console.log(this.id)
    console.log(this.email)
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
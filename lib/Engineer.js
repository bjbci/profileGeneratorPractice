const Employee=require ('../lib/Employee')

class Engineer extends Employee{
   
    constructor(role,name,id,email,github){
    super(role,name,id,email)
    this.github=github
     }



// github`&mdash;GitHub username

//getGithub()

getGithub(){
    return this.github
}
getRole(){
    return "Engineer"
}
}

module.exports=Engineer
    
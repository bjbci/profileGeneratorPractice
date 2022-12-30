import inquirer from 'inquirer'




// const managerPrompt = () => {
//     return inquirer.prompt([
    inquirer.prompt([
  {
    type: 'input',
    message: 'Enter the name of the team manager: ',
    name: 'managerName',
   
  },
  {
    type: "input",
    message: "Enter employee ID: ",
    name: "ID",
  },
  {
    type: "input",
    message: "Enter email address: ",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the office number of the team manager",
    name: "officeNumber",
  },
  {
    type: "list",
      name: "separator",
      message: "Would you like to add an engineer, add an intern or finish",
      choices: ["Add Engineer","Add Intern","Finish"],
  },
    //   default: true
    // }]).then(answers => {
    // //   let {empName, empID, email, githubName,school, addAnother} = employeeData
    // //   let employee;
    //   if(separator === "Engineer") {
    //     employee = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub)
    //     console.log(employee)
    //   } else if(separator === "Intern") {
    //     employee = new Intern(internName,internID,internEmail,internSchool)
    //     console.log(employee)
    //   }else {

    //   }
    //   },
//   {
//     type: "choices",
//     message: "Would you like to add an engineer, add an intern or finish",
//     name: "separator",
//     choices: ["Add Engineer", new inquirer.Separator(),"Add Intern",new inquirer.Separator(), "Finish"]
//   },
  {
    type: 'input',
    message: 'Enter the name of the Team Engineer: ',
    name: 'engineerName',
    when: (input) => input.positionSelection === "Add Engineer"
   
  },
  {
    type: "input",
    message: "Enter Engineer employee ID: ",
    name: "engineerID",
    when: (input) => input.positionSelection === "Add Engineer"
  },
  {
    type: "input",
    message: "Enter Engineer email address: ",
    name: "engineerEmail",
    when: (input) => input.positionSelection === "Add Engineer"
  },
  {
    type: "input",
    message: "Enter Engineer Github Username",
    name: "engineerGithub",
    when: (input) => input.positionSelection === "Add Engineer"
  },
  {
    type: "input",
    message: "Enter Intern name",
    name: "internName",
    when: (input) => input.positionSelection === "Add Intern"
  },
  {
    type: "input",
    message: "Enter Intern ID",
    name: "internID",
    when: (input) => input.positionSelection === "Add Intern"
  },
  {
    type: "input",
    message: "Enter Intern email",
    name: "internEmail",
    when: (input) => input.positionSelection === "Add Intern"
  },
  {
    type: "input",
    message: "Enter the school you attend: ",
    name: "internSchool",
    when:(input)=> input.positionSelection==="Add Intern"
  },
])
  .then(answers=>{
    console.log(answers)
  }
)
// ]).then(managerData => {
//     const {managerName, ID, email, officeNumber} = managerData;
//     const manager = new Manager(managerName, ID, email, officeNumber);
//     team.push(manager)
//     console.log(manager)
//   })
//   };
  
//   const employeePrompt = () => {
//     return inquirer.prompt([{
//       type: "list",
//       message: "Select your position",
//       name: "positionSelection",
//       choices: ["Engineer", "Intern", "Finish"],
//     },
//   {
//       type: 'input',
//       message: 'Enter the name of this Employee: ',
//       name: 'empName',
//   },
//   {
    
//       type: "input",
//       message: "Enter employee ID: ",
//       name: "empID", 
//   },
//   {
//     type: "input",
//     message: "Enter email address: ",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "Enter Engineer Github Username",
//     name: "githubName",
//     when: (input) => input.positionSelection === "Engineer"
//   },
//   {
//     type: "input",
//     message: "Enter the school you attend: ",
//     name: "school",
//     when:(input)=> input.positionSelection==="Intern"
//   },
//   {
//     type: "confirm",
//     name: "finish",
//     message: "Would you like to finish your team",
//     default: true
//   }]).then(employeeData => {
//     let {empName, empID, email, githubName,school, addAnother} = employeeData
//     let employee;
//     if(positionSelection === "Engineer") {
//       employee = new Engineer(empName, empID, email, githubName)
//       console.log(employee)
//     } else if(positionSelection === "Intern") {
//       employee = new Intern(empName, empID, email, school)
//       console.log(employee)
//     }
//     team.push(employee)
//     if(addAnother) {
//       return employeePrompt(team)
//     } else {
//       return team
//     }
//   })
//   }
  
//   managerPrompt()
//   .then(employeePrompt)
  
  
  
//   const questions = [
   
//     {
//       type: "input",
//       message: "Enter your name: ",
//       name: "engineerInternName",
//     },
//     {
//       type: "input",
//       message: "Enter your Github Username",
//       name: "githubName",
//     },
//     {
//       type: "input",
//       message: "Enter the school you attend: ",
//       name: "school",
//       when:(input)=> input.school==="Intern"
//     },
//   ]
  
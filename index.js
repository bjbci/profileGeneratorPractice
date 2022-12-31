import inquirer from 'inquirer'

let addEngineer
let addIntern
let managerName
let managerID
let managerEmail
let officeNumber
let engineerName
let engineerID
let engineerEmail
let  engineerGithub
let  internName
let internID
let internEmail
let internSchool


// const managerPrompt = () => {
//     return inquirer.prompt([
    inquirer.prompt([
  {
    type: 'input',
    message: 'Enter the name of the team manager: ',
    name: 'managerName',
    default:'le chat noir Big Boii',
   
  },
  {
    type: "input",
    message: "Enter employee ID: ",
    name: "managerID",
    default:'007',
  },
  {
    type: "input",
    message: "Enter email address: ",
    name: "managerEmail",
    default:'ihatethisjob@work.com',
  },
  {
    type: "input",
    message: "Enter the office number of the team manager",
    name: "officeNumber",
    default:'1313',
  },
  {
    type: "list",
      name: "separator",
      message: "Would you like to add an engineer, add an intern or finish",
      choices: ["Add Engineer","Add Intern","Finish"],
  },
]).then(answers=>{
    console.log(answers)
    console.log(answers.separator)
        if (answers.separator==="Add Engineer"){   //"Add Engineer"
            inquirer.prompt([
                  {
                type: 'input',
                message: 'Enter the name of the Team Engineer: ',
                name: 'engineerName',
                default:'Bucky the golden lab',
                // when: (input) => input.positionSelection === "Add Engineer"
               },
              {
                type: "input",
                message: "Enter Engineer employee ID: ",
                name: "engineerID",
                default:'5643',
                // when: (input) => input.positionSelection === "Add Engineer"
              },
              {
                type: "input",
                message: "Enter Engineer email address: ",
                name: "engineerEmail",
                default:'iamasmartypants@work.com',
                // when: (input) => input.positionSelection === "Add Engineer"
              },
              {
                type: "input",
                message: "Enter Engineer Github Username",
                name: "engineerGithub",
                default:'github?, whats that?',
                // when: (input) => input.positionSelection === "Add Engineer"
              },
            ])
        }else if(answers.separator==="Add Intern"){
            inquirer.prompt([
            {
                type: "input",
                message: "Enter Intern name",
                name: "internName",
                default:'Freebie the bunny',
                // when: (input) => input.positionSelection === "Add Intern"
              },
              {
                type: "input",
                message: "Enter Intern ID",
                name: "internID",
                default:'7',
                // when: (input) => input.positionSelection === "Add Intern"
              },
              {
                type: "input",
                message: "Enter Intern email",
                name: "internEmail",
                default:'imnewheredontfireme@work.com',
                // when: (input) => input.positionSelection === "Add Intern"
              },
              {
                type: "input",
                message: "Enter the school you attend: ",
                name: "internSchool",
                default:'dont YOU know where I went to school?',
                // when:(input)=> input.positionSelection==="Add Intern"
              },
            ])
            }else{
                if(answers.separator==="Finish")
                inquirer.prompt([
                {
                    type:"confirm",
                    message:"Are you sure you want to complete your team?",
                    name: "internSchool",
                    default:'do YOU know where I went to school?',
                },
            ])

            }
    })
    
    // then(answers=>{
    //     if(answers.separator===answers.addIntern){
    //         inquirer.prompt([
    //         {
    //             type: "input",
    //             message: "Enter Intern name",
    //             name: "internName",
    //             default:'Freebie the bunny',
    //             // when: (input) => input.positionSelection === "Add Intern"
    //           },
    //           {
    //             type: "input",
    //             message: "Enter Intern ID",
    //             name: "internID",
    //             default:'7',
    //             // when: (input) => input.positionSelection === "Add Intern"
    //           },
    //           {
    //             type: "input",
    //             message: "Enter Intern email",
    //             name: "internEmail",
    //             default:'imnewheredontfireme@work.com',
    //             // when: (input) => input.positionSelection === "Add Intern"
    //           },
    //           {
    //             type: "input",
    //             message: "Enter the school you attend: ",
    //             name: "internSchool",
    //             default:'do YOU know where I went to school?',
    //             // when:(input)=> input.positionSelection==="Add Intern"
    //           },
    //         ])
    //         }
    //     }).then(answers=>{
    //     if(prompt.separator===answers.finish)
    //         inquirer.prompt([
    //         {
    //             type:"confirm",
    //             message:"Are you sure you want to complete your team?",
    //             name: "internSchool",
    //             default:'do YOU know where I went to school?',
    //         },
    //     ])
    // })
 ////////////////////////       /////////////////////
//      }   
//     }
// ]).then(answers=>{
//      addEngineer=answers.addEngineer
//      addIntern=answers.addIntern
//      managerName
//      managerID
//      managerEmail
//      officeNumber
//      engineerName
//      engineerID
//      engineerEmail
//      engineerGithub
//      internName
//      internID
//      internEmail
//      internSchool


// })
//////////////////////////////////////////////////////////

// import inquirer from 'inquirer'

// let addEngineer
// let addIntern
// let managerName
// let managerID
// let managerEmail
// let officeNumber
// let engineerName
// let engineerID
// let engineerEmail
// let  engineerGithub
// let  internName
// let internID
// let internEmail
// let internSchool


// // const managerPrompt = () => {
// //     return inquirer.prompt([
//     inquirer.prompt([
//   {
//     type: 'input',
//     message: 'Enter the name of the team manager: ',
//     name: 'managerName',
//     default:'le chat noir Big Boii',
   
//   },
//   {
//     type: "input",
//     message: "Enter employee ID: ",
//     name: "managerID",
//     default:'007',
//   },
//   {
//     type: "input",
//     message: "Enter email address: ",
//     name: "managerEmail",
//     default:'ihatethisjob@work.com',
//   },
//   {
//     type: "input",
//     message: "Enter the office number of the team manager",
//     name: "officeNumber",
//     default:'1313',
//   },
//   {
//     type: "list",
//       name: "separator",
//       message: "Would you like to add an engineer, add an intern or finish",
//       choices: ["Add Engineer","Add Intern","Finish"],
//       validate:(answer)=>{
//         if (answer===answers.addEngineer){   //"Add Engineer"
//             inquirer.prompt([
//                   {
//                 type: 'input',
//                 message: 'Enter the name of the Team Engineer: ',
//                 name: 'engineerName',
//                 default:'Bucky the golden lab',
//                 // when: (input) => input.positionSelection === "Add Engineer"
//                },
//               {
//                 type: "input",
//                 message: "Enter Engineer employee ID: ",
//                 name: "engineerID",
//                 default:'5643',
//                 // when: (input) => input.positionSelection === "Add Engineer"
//               },
//               {
//                 type: "input",
//                 message: "Enter Engineer email address: ",
//                 name: "engineerEmail",
//                 default:'iamasmartypants@work.com',
//                 // when: (input) => input.positionSelection === "Add Engineer"
//               },
//               {
//                 type: "input",
//                 message: "Enter Engineer Github Username",
//                 name: "engineerGithub",
//                 default:'github?, whats that?',
//                 // when: (input) => input.positionSelection === "Add Engineer"
//               },
//             ])
//         }else if(answer==="Add Intern"){
//             inquirer.prompt([
//             {
//                 type: "input",
//                 message: "Enter Intern name",
//                 name: "internName",
//                 default:'Freebie the bunny',
//                 // when: (input) => input.positionSelection === "Add Intern"
//               },
//               {
//                 type: "input",
//                 message: "Enter Intern ID",
//                 name: "internID",
//                 default:'7',
//                 // when: (input) => input.positionSelection === "Add Intern"
//               },
//               {
//                 type: "input",
//                 message: "Enter Intern email",
//                 name: "internEmail",
//                 default:'imnewheredontfireme@work.com',
//                 // when: (input) => input.positionSelection === "Add Intern"
//               },
//               {
//                 type: "input",
//                 message: "Enter the school you attend: ",
//                 name: "internSchool",
//                 default:'do YOU know where I went to school?',
//                 // when:(input)=> input.positionSelection==="Add Intern"
//               },
//             ])
//         }else{
//             inquirer.prompt([
//             {
//                 type:"confirm",
//                 message:"Are you sure you want to complete your team?",
//                 name: "internSchool",
//                 default:'do YOU know where I went to school?',
//             },
//         ])
//         }
//      }   
//     }
// ]).then(answers=>{
//      addEngineer=answers.addEngineer
//      addIntern=answers.addIntern
//      managerName
//      managerID
//      managerEmail
//      officeNumber
//      engineerName
//      engineerID
//      engineerEmail
//      engineerGithub
//      internName
//      internID
//      internEmail
//      internSchool


// })
        
    




    
  
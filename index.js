import inquirer from 'inquirer'
import generateHTML from './generateHTML.js'
import fs from 'fs'
console.log(generateHTML)


let answersArray=[]

begin()

function begin(){
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
      }
    ]).then(answers=>{
        console.log(answers)
        answersArray.push(answers)
        addEngineerFunction()
    })
}

function menuPrompt(){
    inquirer.prompt([
    {
        type: "list",
        name: "separator",
        message: "Would you like to add an engineer, add an intern or finish",
        choices: ["Add Engineer","Add Intern","Finish"],
      }
    ]).then(answers=>{
        console.log(answers)
        if(answers.separator==="Add Engineer"){
            addEngineerFunction()
        }else if(answers.separator==="Add Intern"){
            addInternFunction()
        }else{
            finish()
        }
    })
}

function addEngineerFunction(){
   
        inquirer.prompt([
          {
          type: 'input',
          message: 'Enter the name of the Team Engineer: ',
          name: 'engineerName',
          default:'Bucky the golden lab',
           },
          {
          type: "input",
          message: "Enter Engineer employee ID: ",
          name: "engineerID",
          default:'5643',
          },
          {
          type: "input",
          message: "Enter Engineer email address: ",
          name: "engineerEmail",
          default:'iamasmartypants@work.com',
          },
          {
          type: "input",
          message: "Enter Engineer Github Username",
          name: "engineerGithub",
          default:'github?, whats that?',
          }
        ]).then(answers=>{
          console.log(answers)
          answersArray.push(answers)
          menuPrompt()
         })
    }


function addInternFunction(){
   
        inquirer.prompt([
        {
          type: "input",
          message: "Enter Intern name",
          name: "internName",
          default:'Freebie the bunny',
        },
        {
          type: "input",
          message: "Enter Intern ID",
          name: "internID",
          default:'7',
        },
        {
          type: "input",
          message: "Enter Intern email",
          name: "internEmail",
          default:'imnewheredontfireme@work.com',
         },
        {
          type: "input",
          message: "Enter the school you attend: ",
          name: "internSchool",
          default:"don't YOU know where I went to school?",
        }
        ]).then(answers=>{
          console.log(answers)
          menuPrompt()
           answersArray.push(answers)
        })
    }

function finish(){
  
   console.log(answersArray)
       
  const html=generateHTML(answersArray)
  console.log(html)
   fs.writeFile('./engineeringTeam.html', html, error => {
  if (error) throw error
                      
  console.log("file has been generated");
  });
                    
  }
 


const generateHTML=(data)=>{
    console.log(data)


    // ROLE ROLE ROLE ROLE


    
    const [ 
        addEngineer, 
        addIntern, 
        managerName, 
        managerID, 
        managerEmail,
        officeNumber, 
        engineerName, 
        engineerID, 
        engineerEmail,
        engineerGithub, 
        internName, 
        internID,
        internEmail,
        internSchool]=data

        console.log(data[3].employeeRole)
        console.log(data[3].employeeName)
        console.log(data[3].employeeID)
        console.log(data[3].employeeEmail)
       
        
        console.log(data[2].internRole)
        console.log(data[2].internName)
        console.log(data[2].internID)
        console.log(data[2].internEmail)
        console.log(data[2].internSchool)
        
        console.log(data[1].engineerRole)
        console.log(data[1].engineerName)
        console.log(data[1].engineerID)
        console.log(data[1].engineerEmail)
        console.log(data[1].engineerGithub)
      
        console.log(data[0].managerRole)
        console.log(data[0].managerName)
        console.log(data[0].managerID)
        console.log(data[0].managerEmail)
        console.log(data[0].officeNumber)


    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>team-profile-generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet"  href="style.css"/>
</head>


<body>

<div id="top">
    <h2>My Team</h2>
</div>

 
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-6 sm-12">
            <div class="card" style="width: 18rem;">
                <div class="card-body" id="manager">
                    <h5 class="card-title" id="employeeName" ><span id="employeeName"></span></h5>

                    <h6 class="card-subtitle mb-2 text-muted" id="employeeRole" >Manager ${ data[0].managerName}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="employeeID">${ data[0].managerID}</span>  </li>
                        <li class="list-group-item" id="employeeEmail">email:<span id="employeeID" ><a href="${ data[0].managerEmail}" class="card-link">${ data[0].managerEmail}</a></span></li>
                      
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Office Number: ${data[0].officeNumber}<span id="employeeOfficeNumber"></span> </li>
                      </ul>
              
                </div>
                </div>
                </div>
            </div>
        <div class="col-sm-12">
            <div class="card" style="width: 18rem;">
             <div class="card-body" id="engineer">
                <h5 class="card-title" id="employeeName"  ><span id="employeeName"></span></h5>

                <h6 class="card-subtitle mb-2 text-muted" id="employeeRole">Engineer: ${ data[1].engineerName }</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[1]. engineerID } <span id="employeeID"></span></li>
                    <li class="list-group-item">Email: <a href="${ data[1].engineerEmail}" class="card-link">${ data[1].engineerEmail}</a></li>
                   

                    <li class="list-group-item"><a href="${data[1].engineerGithub}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg></i> </a></li>
                  </ul>
             </div>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="card" style="width: 18rem;">
            <div class="card-body" id="intern">
                <h5 class="card-title" id="employeeName"  ><span id="employeeName"></span></h5>

                <h6 class="card-subtitle mb-2 text-muted" id="employeeRole">Intern: ${ data[2].internName}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${ data[2]. internID }<span id="employeeID"></span>  </li>
                    <li class="list-group-item">email: <a href="${ data[2].internEmail}" class="card-link">${ data[2].internEmail}</a></li>
                    <li class="list-group-item" id="employeeSchool">School: <span id="employeeSchool">${ data[2].internSchool}</span> </li>
                   
                  </ul>
          
            </div>
        </div>
        </div>
   
</div>

        <!-- <div class="container-md">100% wide until medium breakpoint</div>
            <div class="container-lg">100% wide until large breakpoint</div>
            <div class="container-xl">100% wide until extra large breakpoint</div>
            <div class="container-xxl">100% wide until extra extra large breakpoint</div> -->
 



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>
</html>

    
    
    `
}

export default generateHTML
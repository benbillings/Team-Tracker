const generateManager = (manager) => {
    return `
<div class="card" style="width: 18rem">
    <div class="card-body">
        <h2 class="card-title"><i class="fa-solid fa-people-roof"></i>${manager.name}</h2>
        <h5 class="card-text">Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office #: ${manager.office}</li>
    </ul>
    <div class="card-body">
        <a href="mailto:${manager.email}">Email ${manager.name}</a>
    </div>
</div>`
}

const generateEngineer = (engineer) => {
    return `
<div class="card" style="width:18rem;">
    <div class="card-body">
        <h2 class="card-title">${engineer.name}</h2>
        <h5 class="card-text"><i class="icon fa-solid fa-user-gear"></i>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Github: ${engineer.github}</li>
    </ul>
    <div class="card-body">
        <a href="mailto:ben.billings.02@icloud.com">Email ${engineer.name}</a>
        <a href="github.com/${engineer.github}">${engineer.name}'s GitHub</a>
    </div>
</div>`
}

const generateIntern = (intern) => {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h2 class="card-title">${intern.name}</h2>
        <h5 class="card-text"><i class="icon fa-solid fa-graduation-cap"></i>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    <div class="card-body">
        <a href="mailto:${intern.email}">Email ${intern.name}</a>
    </div>
</div>`
}

const generateTeam = (data) => {
    const managerCardArr = [];
    const employeeCardArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const job = employee.getRole();

        if (job === 'Manager') {
            const managerCard = generateManager(employee);
            managerCardArr.push(managerCard);
        }

        if (job === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            employeeCardArr.push(engineerCard);
        }

        if (job === 'Intern') {
            const internCard = generateIntern(employee);
            employeeCardArr.push(internCard);
        }
    }

    const managerCard = managerCardArr.join('');
    const employeeCards = employeeCardArr.join('');
    // generateHTML(managerCard, employeeCards);
    console.log(managerCard, employeeCards);




    const createFile = (employeeData) => {
        fs.writeFile('./dist/index.html', employeeData, (err) => { 
            if (err) { 
                throw err;
            } else {
                console.log('Team Homepage created! Check the ./dist directory for your finalized webpage.'); 
            }
        })
    }
}

const generateHTML = (managerCard, employeeCards) => {
    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Homepage</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/31d4842369.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="team-header text-center">Team Homepage<i class="icon fa-sharp fa-solid fa-people-group"></i></h1>
                </div>
            </div>
    
            <!-- Row for manager card -->
            <div class="row">
                <div class="d-flex">
                    ${managerCard}
                </div>
            </div>
    
            <!-- Row for employees' cards -->
            <div class="row">
                <div class="d-flex">
                    ${employeeCards}
                </div>
            </div>
    
        </div>
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    
    </html>`
}

module.exports = generateTeam
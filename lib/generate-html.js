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
    const cardArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[3];
        console.log(employee);
    }
}
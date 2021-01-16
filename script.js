// PROGRAMS / COURSES GENERATION

const progsOnHome = () => {
    let html = '';
    for (let index = 0; index < 4; index++) {
        html += `
        <div class="m-4 card" style="max-width: 25rem;" onclick="location.href='${programs[index].page}'">
            <img src="${programs[index].image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <h5 class="card-title">${programs[index].title}</h5>
                <p class="mt-3 instructor">${programs[index].instructor}</p>
            </div>
        </div>`
    };
    document.getElementById('homePrograms').innerHTML = html;
}

const fullPrograms = () => {
    let html = '';
    programs.forEach(index => {
        html += `
        <div>
            <div class="m-3 card" style="max-width: 30rem;" onclick="location.href='${index.page}'">
                <div class="card-body text-center">
                    <h5 class="card-title">${index.title}</h5>
                    <p class="mt-3 instructor text-center">${index.instructor}</p>
                </div>
                <img src="${index.image}" class="card-img" alt="">
            </div>
        </div>`
    });
    document.getElementById('fullPrograms').innerHTML = html;
}

const coursePage = (course) => {
    var courseInfo = programs[course];
    let html1 = `
        <div class="m-3 card" style="max-width: 100%;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Course Modules:</li>
            </ul>
            <div class="card-footer">
                <p id="moduleList" class="px-2 card-text">
                    ${fullModuleList(course)}
                </p>
            </div>
        </div>`;
    document.getElementById('courseImgList').innerHTML = html1;

    let html2 = `
        <div class="m-3 card" style="max-width: 100%; position: relative; z-index:1; top: 70px;">
            <img src="${courseInfo.image}" class="card-img" alt="">
        </div>
        <div class="m-3 card" style="min-width: 100%;">
            <div class="card-body">
                <h2 class="mt-5 mx-3 card-title">${courseInfo.title}</h2>
                <p class="mt-3 p-4 card-text">
                ${courseInfo.description}
                </p>
            </div>
        </div>`;
    document.getElementById('courseDescription').innerHTML = html2;
}

const fullModuleList = (course) => {
    let html = '';
    programs[course].modules.forEach(index => {
        html += `&#9634;&nbsp;&nbsp;&nbsp;${index}<br>`;
        console.log(html);
    });
    return html;
}


// TEAM GENERATION

const instructorsList = () => {
    let html = '';
    team.forEach(index => {
        if (index.teacher == 'True') {
            html += `
            <div class="m-2 d-flex flex-column">
                <img src="${index.image}" alt="">
                <p class="mt-2 name">${index.name}</p>
                <p class="role">${index.role}</p>
            </div>`
        }
        
    });
    document.getElementById('instructorList').innerHTML = html;
}

const fullTeam = () => {
    let html = '';
    team.forEach(index => {
        html += `
        <div class="d-flex flex-column align-items-center text-center">
            <div class="d-flex justify-content-center" style="position: relative; z-index:1; top: 100px;">
                <img src="${index.image}" alt="" style="max-width: 200px">
            </div>
            <div class="mx-3 px-3 card" style="max-width: 350px; padding-top: 100px;">
                <div class="card-body d-flex flex-column justify-content-start align-items-center text-center">
                    <p class="name">${index.name}</p>
                    <p class="role">${index.role}</p><br/>
                    <p class="description">${index.description}</p><br>
                    <div class="w-100 p-3 socials" style="border-top: 2px solid #01132B;">
                        ${checkSocial(index)}
                    </div>
                    <p class="personalSite">${index.site}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById('teamList').innerHTML = html;
}

const checkSocial = (person) => {
    let html = '';
    if (person.socials[0].fb != '') {
        html += `<a href="${person.socials[0].fb}" target="_blank" 
        rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
        `;
    }
    if (person.socials[1].ig != '') {
    html += `<a href="${person.socials[1].ig}" target="_blank" 
        rel="noopener noreferrer"><i class="fab fa-instagram-square"></i></a>
        `;
    }
    if (person.socials[2].in != '') {
    html += `<a href="${person.socials[2].in}" target="_blank" 
        rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        `;
    }
    console.log(person.socials[0].fb);
    return html;
}
// PROGRAMS / COURSES GENERATION

const progsOnHome = () => {
    let html = '';
    for (let index = 0; index < 4; index++) {
        html += `
        <div class="m-4 card" style="max-width: 25rem;">
            <img src="${programs[index].image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <h5 class="card-title">${programs[index].title}</h5>
            </div>
        </div>`
    }
    // for (let index = 0; index < 4; index++) {
    //     html += `
    //     <div class="m-4 card" style="max-width: 25rem;" onclick="location.href='${programs[index].page}'">
    //         <img src="${programs[index].image}" class="card-img-top" alt="">
    //         <div class="card-body">
    //             <h5 class="card-title">${programs[index].title}</h5>
    //             <p class="mt-3 instructor">${programs[index].instructor}</p>
    //         </div>
    //     </div>`
    // }
    document.getElementById('homePrograms').innerHTML = html;
}

const fullPrograms = () => {
    let html = '';
    programs.forEach(index => {
        html += `
        <div class="m-3 card" style="max-width: 25rem;" onclick="location.href='${index.page}'">
            <img src="${index.image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <h5 class="card-title">${index.title}</h5>
                <p class="card-text">COMING SOON</p>
            </div>
        </div>`
    });
    // programs.forEach(index => {
    //     html += `
    //     <div class="m-3 card" style="max-width: 24rem;" onclick="location.href='${index.page}'">
    //         <img src="${index.image}" class="card-img-top" alt="">
    //         <div class="card-body">
    //             <h5 class="card-title">${index.title}</h5>
    //             <p class="mt-3 instructor">${index.instructor}</p>
    //         </div>
    //     </div>`
    // });
    document.getElementById('fullPrograms').innerHTML = html;
}

const coursePage = (course) => {
    var courseInfo = programs[course];
    let html1 = `
        <div class="m-3 card" style="max-width: 100%;">
            <img src="${courseInfo.image}" class="card-img" alt="">
        </div>
        <div class="m-3 card" style="max-width: 100%;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${courseInfo.instructor}</li>
            </ul>
            <div class="card-footer">
                <h6 class="mt-2 card-title text-center">Course Modules:</h6>
                <p id="moduleList" class="px-2 card-text">
                    ${fullModuleList(course)}
                </p>
            </div>
        </div>`;
    document.getElementById('courseImgList').innerHTML = html1;

    let html2 = `
        <div class="m-3 card" style="min-width: 100%;">
            <div class="card-body">
                <h2 class="m-3 card-title">${courseInfo.title}</h2>
                <p class="mt-3 p-3 card-text">
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

const fullTeam = () => {
    let html = '';
    team.forEach(index => {
        html += `
        <div class="m-2 d-flex flex-column">
            <img src="${index.image}" alt="">
            <p class="mt-2 name">${index.name}</p>
            <p class="description">${index.role}</p>
        </div>`
    });
    document.getElementById('teamList').innerHTML = html;
}

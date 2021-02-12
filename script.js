// PROGRAMS / COURSES GENERATION

const progsOnHome = () => {
    let html = '';
    let delay = 500;
    for (let index = 0; index < 4; index++) {
        html += `
        <div class="m-4 card hoverCard" data-aos="fade-up" data-aos-delay="${delay}" style="max-width: 25rem;" onclick="location.href='${programs[index].page}'
        ">
            <img src="${programs[index].image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <h5 class="card-title">${programs[index].title}</h5>
                <p class="mt-3 instructor">${programs[index].instructor}</p>
            </div>
        </div>`
        delay += 500;
    };
    document.getElementById('homePrograms').innerHTML = html;
}

const fullPrograms = () => {
    let html = '';
    let delay = 500;
    programs.forEach(index => {
        html += `
        <div>
            <div class="m-3 card hoverCard" style="max-width: 30rem;" onclick="location.href='${index.page}'">
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

// const coursePage = (course) => {
//     var courseInfo = programs[course];
//     let html1 = `
//         <div class="m-3 card" style="max-width: 100%;">
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Course Modules:</li>
//             </ul>
//             <div class="card-footer">
//                 <p id="moduleList" class="px-2 card-text">
//                     ${fullModuleList(course)}
//                 </p>
//             </div>
//         </div>`;
//     document.getElementById('courseImgList').innerHTML = html1;

//     let html2 = `
//         <div class="m-3 prog-card">
//             <div class="mx-auto prog-img">
//                 <img src="${courseInfo.image}" class="card-img-top" alt="">
//             </div>
//             <div class="px-4 pb-3 prog-info">
//                 <h5 class="card-title">
//                 ${courseInfo.title}
//                 </h5>
//                 <p class="card-text" style="text-align: left;">
//                 ${courseInfo.description}
//                 </p>
//                 <p class="pt-4 instructor">
//                     <span style="font-size: smaller;">INSTRUCTORS</span>
//                         <br>
//                     ${courseInfo.instructor}
//                 </p>
//             </div>
//         </div>`;
//     document.getElementById('courseDescription').innerHTML = html2;
// }

const courseLeftPage = (course) => {
    var courseInfo = programs[course];

    let html2 = `
        <div class="m-3 prog-card" style="max-width: 100% !important;">
            <div class="mx-auto prog-img" style="max-width: 30rem !important;">
                <img src="${courseInfo.image}" class="card-img-top" alt="">
            </div>
            <div class="px-4 pb-3 prog-info" style="max-width: 100% !important;">
                <h5 class="card-title">
                ${courseInfo.title}
                </h5>
                <p class="card-text" style="text-align: left;">
                ${courseInfo.description}
                </p>
                <p class="pt-4 instructor">
                    <span style="font-size: smaller;">INSTRUCTORS</span>
                        <br>
                    ${courseInfo.instructor}
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
    let delay = 500;
    team.forEach(index => {
        if (index.teacher == 'True') {
            html += `
            <div class="m-2 d-flex flex-column" data-aos="fade-up" data-aos-delay="${delay}">
                <img src="${index.image}" alt="">
                <p class="mt-2 name">${index.name}</p>
                <p class="role">${index.role}</p>
            </div>`
            delay += 500;
        }
    });
    document.getElementById('instructorList').innerHTML = html;
}

const fullTeam = () => {
    let html = '';
    team.forEach(index => {
        html += `
        <div class="m-3 d-flex flex-column align-items-center text-center">
            <div class="d-flex justify-content-center">
                <img src="${index.image}" alt="" style="max-width: 200px">
            </div>
            <div class="mx-3 px-3 card" style="max-width: 350px; padding-top: 125px; position: relative; z-index: -1; margin-top: -125px;">
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
const progsOnHome = () => {
    // console.log('hi');
    let html = '';
    for (let index = 0; index < 4; index++) {
        html += `
        <div class="m-4 card" style="max-width: 25rem;" onclick="location.href='${programs[index].page}'">
            <img src="${programs[index].image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${programs[index].title}</h5>
                <p class="mt-3 instructor">${programs[index].instructor}</p>
            </div>
        </div>`
    }
    document.getElementById('homePrograms').innerHTML = html;
}

const fullPrograms = () => {
    let html = '';
    programs.forEach(index => {
        html += `
        <div class="m-3 card" style="max-width: 24rem;" onclick="location.href='${index.page}'">
            <img src="${index.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${index.title}</h5>
                <p class="mt-3 instructor">${index.instructor}</p>
            </div>
        </div>`
    });
    document.getElementById('fullPrograms').innerHTML = html;
}
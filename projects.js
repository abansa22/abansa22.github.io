var projects = [
  {
    "name": "Chicago City-Owned Land Inventory",
    "description": "SPA to search for Chicago City-Owned Land Inventory data",
    "techs": "HTML, CSS, JavaScript",
    "linkRepo": "https://github.com/abansa22/IT202-Spring2021-project1",
    "linkPage": "https://abansa22.github.io/IT202-Spring2021-project1/",
    "image": "project1.png",
    "display": true
  },
  {
    "name": "Run Simrun Run",
    "description": "Simple Scrolling Game with power ups and obstacles that can kill the player.",
    "techs": "HTML, CSS, JavaScript",
    "linkRepo": "https://github.com/abansa22/IT202-Spring2021-project2",
    "linkPage": "https://abansa22.github.io/IT202-Spring2021-project2/",
    "image": "project2.png",
    "display": true
  },
]

projects.forEach(obj => {
  if (obj.display === true) {
    const cardInfo = `
      <div class="card">
        <img src=${obj.image} class="projImg" alt="Project Img">
        <h2 class="projName">${obj.name}</h2>
        <p class="projDesc">${obj.description}</p>
        <p class="projTech">${obj.techs}</p>
        <div class="repoLink">
          <a href=${obj.linkRepo} class="links">Repo Link</a>
        </div>
        <div>
          <a href=${obj.linkPage} class="links">Page Link</a>
        </div>
      </div>
      <br>
      <br>
    `
    const elem = document.createElement('div');
    elem.innerHTML = cardInfo;
    document.getElementById("cardsDiv").appendChild(elem);
  }
})
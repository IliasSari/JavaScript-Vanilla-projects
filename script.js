const projects = [
  {
    title: "Color flipper",
    path: "./Color flipper/index.html",
  },
  {
    title: "Counter",
    path: "./Counter/index.html",
  },
  {
    title: "Reviews",
    path: "./Reviews/index.html",
  },
  {
    title: "Navbar",
    path: "./Navbar/index.html",
    description: "ONLY NAVBAR"
  },
  {
    title:"Heart trail animation",
    path: "Heart_trail_animation\ /"
  }

];

const container = document.getElementById("projects-container");

function displayProjects() {
  container.innerHTML = projects.map(project => {
    return `
      <a href="${project.path}" class="card">
        <div class="icon"><i class="fa-solid ${project.icon}"></i></div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </a>
    `;
  }).join("");
}

displayProjects();
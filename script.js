const projects = [
  {
    title: "Color Flip",
    path: "./Color flip/index.html",
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
    path: "/Navbar/index.html",
    description: "ONLY NAVBAR"
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
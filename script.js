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
  },
  {
    title:"Auto text effect animation",
    path: "./Auto_text_effect_animation/index.html"
  },
  {
    title:"Mini calendar",
    path:"./Mini_calendar/index.html"
  },
  {
    title:"Button Ripple Effect",
    path:"./Button_Ripple_Effect/index.html"
  },
  {
    title:"Dark mode Toggle",
    path:"./Dark_mode_toggle/index.html"
  },
  {
    title:"Real time character counter",
    path:"./Real_time_character_counter/index.html"
  },
  {
    title:"Digital clock",
    path:"./Digital_clock/index.html",
    description: "IS RELATIVE!"
  },
  {
    title:"Employee Management app",
    path:"./Employee_Management_app/index.html",
    description:"Made it without any tutorial!"
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
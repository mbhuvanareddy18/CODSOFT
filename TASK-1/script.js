document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");

    let projects = [
        { title: "AI Chatbot", description: "Developed an AI-based chatbot using Python and NLP." },
        { title: "Portfolio Website", description: "Created a responsive portfolio using HTML, CSS, and JavaScript." }
    ];

    function renderProjects() {
        projectList.innerHTML = "";
        projects.forEach((project, index) => {
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            projectDiv.innerHTML = `
                <h3 contenteditable="true">${project.title}</h3>
                <p contenteditable="true">${project.description}</p>
                <button class="delete-btn" onclick="deleteProject(${index})">X</button>
            `;
            projectList.appendChild(projectDiv);
        });
    }

    window.addProject = function () {
        projects.push({ title: "New Project", description: "Project description here..." });
        renderProjects();
    };

    window.deleteProject = function (index) {
        projects.splice(index, 1);
        renderProjects();
    };

    document.getElementById("resume-upload").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            document.getElementById("resume-link").href = fileURL;
            document.getElementById("resume-link").innerText = "Download Updated Resume";
        }
    });

    renderProjects();
});

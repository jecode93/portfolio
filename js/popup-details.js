// name, description, 
//featured image, technologies, link to live version, link to source.

const works = [
	{
		id: 0,
		name: "Tonic",
		company: "Canopy",
		role: "Back End Dev",
		year: 2015,
		description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: "./images/work/tonic.svg",
		image_alt: "Tonic project image",
		image_class: "desktop-card-img-left"
	},
	{
		id: 1,
		name: "Multi-Post Stories",
		company: "Canopy",
		role: "Back End Dev",
		year: 2015,
		description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: "./images/work/multi-post.svg",
		image_alt: "Multi-Post project image",
		image_class: "desktop-card-img-right"
	},
	{
		id: 2,
		name: "Tonic",
		company: "Canopy",
		role: "Back End Dev",
		year: 2015,
		description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: "./images/work/tonic2.svg",
		image_alt: "Tonic project image",
		image_class: "desktop-card-img-left"
	},
	{
		id: 3,
		name: "Multi-Post Stories",
		company: "Canopy",
		role: "Back End Dev",
		year: 2015,
		description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: "./images/work/multi-post2.svg",
		image_alt: "Multi-Post project image",
		image_class: "desktop-card-img-right"
	}
]

function addWorkSection() {
	const workSection = document.getElementById("works");
	works.forEach((work) => {
		const div = document.createElement("div");
		div.classList.add("card");
		div.innerHTML = `
					<img class="${work.image_class}" src="${work.image}" alt="${work.image_alt}">
          <div class="card-content">
            <h1>${work.name}</h1>
            <div class="info">
              <h2 class="client">${work.company}</h2>
              <span>•</span>
              <p class="role">${work.role}</p>
              <span>•</span>
              <p class="year">${work.year}</p>
            </div>
            <p class="card-desc">${work.description}</p>
            <ul class="tag">
              <li>${work.tags[0]}</li>
              <li>${work.tags[1]}</li>
              <li>${work.tags[2]}</li>
            </ul>
            <a href="#"><button>See project</button></a>
          </div>`;
		workSection.appendChild(div);
	})
}

addWorkSection();
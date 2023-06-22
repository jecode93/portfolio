const works = [
  {
    id: 0,
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/work/tonic.svg',
    image_alt: 'Tonic project image',
    image_class: 'desktop-card-img-left',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/work/multi-post.svg',
    image_alt: 'Multi-Post project image',
    image_class: 'desktop-card-img-right',
  },
  {
    id: 2,
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/work/tonic2.svg',
    image_alt: 'Tonic project image',
    image_class: 'desktop-card-img-left',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/work/multi-post2.svg',
    image_alt: 'Multi-Post project image',
    image_class: 'desktop-card-img-right',
  },
];

function addWorkSection() {
  const workSection = document.getElementById('works');
  works.forEach((work) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class='${work.image_class}' src='${work.image}' alt='${work.image_alt}'>
    <div class='card-content'>
    <h1>${work.name}</h1>
    <div class='info'>
      <h2 class='client'>${work.company}</h2>
      <span>•</span>
      <p class='role'>${work.role}</p>
      <span>•</span>
      <p class='year'>${work.year}</p>
      </div>
        <p class='card-desc'>${work.description}</p>
        <ul class='tag'>
          <li>${work.tags[0]}</li>
          <li>${work.tags[1]}</li>
          <li>${work.tags[2]}</li>
        </ul>
        <div id='open'>
          <a class='open'href='#'><button>See project</button></a>
        </div>
      </div>`;
    workSection.appendChild(div);
  });
}

addWorkSection();

const modal = document.querySelector('.modal-dialog');
const open = document.querySelectorAll('.open');
const card = document.querySelectorAll('.card');

function modalDynamic() {
  const modalDialog = document.getElementById('modal-dialog');
  for (let i = 0; i < open.length; i += 1) {
    open[i].addEventListener('click', () => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class='overlay'></div>
      <div class='modal-content'>
        <div class='modal-header'>
          <div class='all-remain'>
            <h1 class='modal-title'>${works[i].name}</h1>
              <ul class='list-inline'>
                <li>
                  <h6>${works[i].company}</h6>
                </li>
                <li class='list-inline-itemp'>•</li>
                <li class='list-inline-item'>${works[i].role}</li>
                <li class='list-inline-itemp'>•</li>
                <li class='list-inline-item'>${works[i].year}</li>
              </ul>
            </div>
            <button class='modal-close' onclick = 'closePopup()'><i class='bi bi-x-lg'> </i></button>
          </div>
          <div class='modal-body'>
            <img src='${works[i].image}' class='img-fluid rounded-start' alt='${works[i].image_alt}'>
            <div class='row'>
              <div class='col-md-7 mt-5 desc'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s. </p>
              </div>
              <div class='col-md-5 mt-5'>
                <ul class='tag'>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div class='modal-hr'></div>
                <div class='modal-button'>
                  <a href='#' class='btn btn-outline-primary btn-sm'>See live <i class='bi bi-box-arrow-up-right'></i></a>
                  <a href='#' class='btn btn-outline-primary btn-sm'>See source <i class='bi bi-github'></i></a>
                </div>              
              </div>
            </div>
          </div>
        </div>
`;
      modalDialog.appendChild(div);
    });
  }
}

modalDynamic();

for (let i = 0; i < open.length; i += 1) {
  open[i].addEventListener('click', () => {
    modal.classList.remove('isHidden');
  });
  card[i].addEventListener('click', () => {
    modal.classList.remove('isHidden');
  });
}

// Close popup
function closePopup() {
  modal.classList.toggle('isHidden');
}

closePopup();
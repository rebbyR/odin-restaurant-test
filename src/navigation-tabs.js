import createInitialContent from "./initial-load";

const content = document.getElementById('content');


function addNavigationFunctions() {
  let home = document.getElementById('home-tab');
  let menu = document.getElementById('menu-tab');
  let contact = document.getElementById('contact-tab');

  home.addEventListener('click', () => {
    refreshPage();
    createInitialContent();
  })

  menu.addEventListener('click', () => {
    refreshPage();
    getMenuPage();
  });

  contact.addEventListener('click', () => {
    refreshPage();
    getContactPage();
  });
};

function refreshPage() {
  let pageContents = document.getElementsByClassName('current-page-content');
  while (pageContents[0]) {
    pageContents[0].parentNode.removeChild(pageContents[0]);
  }
};

function getMenuPage() {
  const menuDescription = document.createElement('p');
  menuDescription.textContent = 'menu page loaded successfully';
  menuDescription.classList.add('current-page-content');

  content.appendChild(menuDescription);

};

function getContactPage() {
  const contactDescription = document.createElement('p');
  contactDescription.textContent = 'contact page loaded successfully';
  contactDescription.classList.add('current-page-content');

  content.appendChild(contactDescription);

}

export {addNavigationFunctions};
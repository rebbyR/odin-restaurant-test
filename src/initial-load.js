const content = document.getElementById('content');

function createNavigationTabs() {

  let navigationList = document.createElement('ul');

  let home = document.createElement('li');
  home.textContent = 'Home';
  home.setAttribute('id', 'home-tab');
  
  let menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.setAttribute('id', 'menu-tab');

  let contact = document.createElement('li');
  contact.textContent = 'Contact';
  contact.setAttribute('id', 'contact-tab');


  navigationList.appendChild(home);
  navigationList.appendChild(menu);
  navigationList.appendChild(contact);

  content.appendChild(navigationList);
}

function createInitialContent() {

  let title = document.createElement('h1');
  title.textContent = 'Restaurant Page';
  title.classList.add('current-page-content');
  
  let image = document.createElement('img');
  image.src = '../src/images/pancakes.jpg';
  image.alt = 'pancakes';
  image.classList.add('current-page-content');

  let description = document.createElement('p');
  description.textContent = 'description here';
  description.classList.add('current-page-content');

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(description);
};

export {createNavigationTabs};
export default createInitialContent;

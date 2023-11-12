const content = document.getElementById('content');

function createInitialContent() {
  let title = document.createElement('h1');
  title.textContent = 'Restaurant Page';
  
  let image = document.createElement('img');
  image.src = '../src/images/pancakes.jpg';
  image.alt = 'pancakes';

  let description = document.createElement('p');
  description.textContent = 'description here';

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(description);
};

export default createInitialContent;

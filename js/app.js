document.addEventListener('DOMContentLoaded', () => {
  const newCatForm = document.querySelector('#new-cat-form');
  newCatForm.addEventListener('submit', handleNewCatFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewCatFormSubmit = function (event) {
  event.preventDefault();

  const catListItem = createCatListItem(event.target);
  const catList = document.querySelector('#cat-list');
  catList.appendChild(catListItem);

  event.target.reset();
};

const createCatListItem = function (form) {
  const catListItem = document.createElement('li');
  catListItem.classList.add('cat-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  catListItem.appendChild(name);

  const breed = document.createElement('h3');
  breed.textContent = form.breed.value;
  catListItem.appendChild(breed);

  const rating = document.createElement('p');
  rating.textContent = `${form.rating.value} spicy peppers`;
  catListItem.appendChild(rating);

  return catListItem;
};

const handleDeleteAllClick = function (event) {
  const catList = document.querySelector('#cat-list');
  catList.innerHTML = '';
};

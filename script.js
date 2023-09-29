const ingredients = [
  {nameIngredient: 'molho', price: 1, kcal: 200},
  {nameIngredient: 'hamburguer', price: 2, kcal: 4000},
  {nameIngredient: 'cebola', price: 2, kcal: 4000},
  {nameIngredient: 'tomate', price: 2, kcal: 4000},
  {nameIngredient: 'cheese', price: 2, kcal: 4000},
  {nameIngredient: 'salada', price: 2, kcal: 4000},

];


const createItem = (element, classElement) => {
  const newElement = document.createElement(element);
  newElement.className = classElement;
  return newElement;
}

const createBoxItemIngredient = (element, symbol) => {
  const boxItemIngredientCount = createItem('div', 'ingredients-box');
  const titleBoxIngredientCount = createItem('p', `ingredient-count-box-${element}`);
  titleBoxIngredientCount.innerText = symbol;
  boxItemIngredientCount.appendChild(titleBoxIngredientCount);
  return boxItemIngredientCount;
}

const createItensBox = (nameIngredient) => {
  const containerItem = document.querySelector('.ingredients-container');
  const ingredient = createItem('div', 'ingredient');
  const imgIngredient = createItem('img', 'ingredient-img');
  imgIngredient.src = `./images/${nameIngredient}.png`;
  imgIngredient.id = nameIngredient;
  const titleIngredient = createItem('p', 'ingredient-title');
  titleIngredient.innerText = nameIngredient
  const boxIngredientCount = createItem('div', 'ingredient-count');
  const ingredientCountNumber = createItem('p', 'ingredient-count-number');
  ingredientCountNumber.innerText = 0;
  ingredientCountNumber.id = nameIngredient;
  containerItem.appendChild(ingredient);

  ingredient.append(imgIngredient, titleIngredient, boxIngredientCount)
  boxIngredientCount.append(createBoxItemIngredient('sub', '-'), ingredientCountNumber, createBoxItemIngredient('sum', '+'));
}

const renderItemBox = (arrayItens) => {
  arrayItens.forEach(element => {
    createItensBox(element.nameIngredient);
  });
}

const insertImgIngredient = (valueImg) => {
  const boxIngredient = document.querySelector('.burguer-build-ingredients');
  const imgIngredient = createItem('img', valueImg);
  imgIngredient.src = `./images/${valueImg}.png`;
  imgIngredient.classList.add('burguer-build-ingredients-img');
  boxIngredient.appendChild(imgIngredient);

}
const addQuantityBoxIngredient = () => {
  const sumButtons = document.querySelectorAll('.ingredient-count-box-sum');
  sumButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const countNumber = event.target.parentElement.previousElementSibling;
        const nameImg = countNumber.parentElement.parentElement.firstChild.id;
        insertImgIngredient(nameImg);
        let currentCount = parseInt(countNumber.textContent);
        currentCount+=1;
        countNumber.textContent = currentCount;
        // const nameImg = countNumber.
      })
  })
}

const deleteQuantityBoxIngredient = () => {
  
}
window.onload = () => {
  renderItemBox(ingredients);
  addQuantityBoxIngredient()
}
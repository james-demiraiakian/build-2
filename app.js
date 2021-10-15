import { food } from './food.js';

const foodUL = document.getElementById('food-list');

function renderFood(food) {
    const foodCard = document.createElement('li');
    foodCard.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = food.img;

    const foodSpan = document.createElement('span');
    foodSpan.classList.add('food-name');
    foodSpan.textContent = (food.name);

    foodCard.append(foodImg, foodSpan);
    return foodCard;
}

for (const foods of food) {
    const foodDisc = renderFood(foods);
    foodUL.append(foodDisc);
}

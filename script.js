const categoryContainer = document.querySelector(
  '.summary__category-container'
);

const data = async () => {
  const result = await fetch('./data.json');
  const response = await result.json();
  // creating list element
  response.forEach((el) => {
    const listEl = `<li class="summary__category ${el.category.toLowerCase()}">
  <div class="summary__icon-container">
  <img class="icon__${el.category.toLowerCase()}" src=${
      el.icon
    } alt="${el.category.toLowerCase()}-icon"></img>
  <h4 class="summary__type">${el.category}</h4>
</div>
  <div class="summary__score">
   
    <span class="summary__score-total score__${el.category.toLowerCase()}">${
      el.score
    }</span> / <span>100</span>
  </div>
  </li>`;
    categoryContainer.insertAdjacentHTML('beforeEnd', listEl);
  });
};

// onload
data();

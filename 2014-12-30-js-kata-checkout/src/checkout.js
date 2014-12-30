'use strict';

function createCheckout(categories) {
  const items = [];

  function scan(categoryName) {
    items.push(categoryName);
  }

  function getCategoryTotal(category) {
    const itemCount = items.filter(x => x === category.name).length;
    const batchSize = category.discountUnits || (itemCount + 1);
    const batchCount = Math.floor(itemCount / batchSize);
    const batchPrice = category.discountPrice || 0;
    const singleItemCount = itemCount - (batchCount * batchSize);
    const singleItemPrice = category.pricePerUnit || 0;
    return (batchCount * batchPrice) + (singleItemCount * singleItemPrice);
  }

  function getTotal() {
    const total = categories.reduce((totalSoFar, category) => totalSoFar + getCategoryTotal(category), 0);
    return Math.round(total * 100) / 100; // Compensate floating point inaccuracies
  }

  return { scan, getTotal };
}

export default { createCheckout };

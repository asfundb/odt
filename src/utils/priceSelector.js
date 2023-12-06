const priceSelector = (price_a, price_b) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    return price_a;
  } else {
    return price_b;
  }
};

export default priceSelector;

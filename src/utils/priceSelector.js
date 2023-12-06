const priceSelector = () => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    return "price_a";
  } else {
    return "price_b";
  }
};

export default priceSelector;

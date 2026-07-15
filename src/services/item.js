//use case: create item with correct subtotal!!!

// -> create an item with name, price, quantity and subtotal xD
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;

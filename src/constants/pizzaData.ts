const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    size: "Medium",
    price: 10.99,
    category: "Vegetarian",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    size: "Large",
    price: 12.99,
    category: "Non-Vegetarian",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
  },
  {
    id: 3,
    name: "Vegetarian Supreme Pizza",
    size: "Medium",
    price: 11.99,
    category: "Vegetarian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHqQJnA5dY-qNKgnDnnfQkqzFfM2AglsvQMmiLz5DPLyUTB73C-cGXl4JqoSx1oR8Hg0&usqp=CAU",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    size: "Large",
    price: 13.99,
    category: "Non-Vegetarian",
    image: "https://www.pamperedchef.com/iceberg/com/recipe/1684007-lg.jpg",
  },
  {
    id: 5,
    name: "Supreme Pizza",
    size: "Medium",
    price: 12.49,
    category: "Non-Vegetarian",
    image:
      "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
  },
  {
    id: 6,
    name: "Cheese Pizza",
    size: "Medium",
    price: 9.99,
    category: "Vegetarian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYE3nqICmRtsBn7B7ZvKseT77ckAig2N7m9VAQhEXrdrrSA9dG4d5xq55ekv-hQJUpAmw&usqp=CAU",
  },
  {
    id: 7,
    name: "Pepperoni Pizza",
    size: "Medium",
    price: 11.99,
    category: "Non-Vegetarian",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
  },
  {
    id: 8,
    name: "Veggie Delight Pizza",
    size: "Medium",
    price: 10.49,
    category: "Vegetarian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHqQJnA5dY-qNKgnDnnfQkqzFfM2AglsvQMmiLz5DPLyUTB73C-cGXl4JqoSx1oR8Hg0&usqp=CAU",
  },
  {
    id: 9,
    name: "Pepperoni Pizza",
    size: "Large",
    price: 13.99,
    category: "Non-Vegetarian",
    image: "https://www.pamperedchef.com/iceberg/com/recipe/1684007-lg.jpg",
  },
  {
    id: 10,
    name: "Margherita Pizza",
    size: "Large",
    price: 12.99,
    category: "Vegetarian",
    image:
      "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
  },
];

export type Pizza = typeof pizzas[number];
export default pizzas;

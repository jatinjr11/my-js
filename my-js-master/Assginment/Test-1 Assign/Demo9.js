 /*
    9.You are given an array of objects representing a collection of products, each with a name, price, and category. 
    Your task is to use map, filter, and reduce to calculate the average price of products in each category, 
    and then return an array of objects containing only the categories that have an average price above 50.
  input:-
  const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  ];
  output:-
  [ 
  { category: 'Clothes', average: 55 },
  { category: 'Electronics', average: 55 }
  ]
  */

  
  const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

// Step 1: Group products by category
const categoryMap = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = { total: 0, count: 0 };
  }
  acc[product.category].total += product.price;
  acc[product.category].count += 1;
  return acc;
}, {});

// Step 2: Calculate the average price for each category
const categoryAverages = Object.entries(categoryMap).map(([category, data]) => ({
  category,
  average: data.total / data.count,
}));

// Step 3: Filter categories with an average price above 50
const result = categoryAverages.filter(category => category.average > 50);

console.log(result);

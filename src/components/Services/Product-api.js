// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

export const ProductData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  
if(!response.ok){
    throw new Error("fetching failed")
}


  return data.products;


};

// ProductData()
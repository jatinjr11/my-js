async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
      const data = await response.json();
      console.log("ram ram");
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
  fetchData();
  
  console.log("Sita ram");
  
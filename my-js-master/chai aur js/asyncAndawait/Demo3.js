async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  getData();
  
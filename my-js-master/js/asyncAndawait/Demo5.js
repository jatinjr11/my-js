async function fetchData(){
    try{
        console.log("Helloo-1");
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        console.log("Helloo-2");
        const data = await response.json();
        
        console.log(data);
        console.log("Helloo-3");
        
    }catch(err){
        console.log("Error: ",err)
    }
}

fetchData();
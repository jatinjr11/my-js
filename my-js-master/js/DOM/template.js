function HeaderComponent(){
    let main = document.querySelector("#main");

    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("style","height:70px; border: 1px solid black");
    headerDiv.setAttribute("class","bg-dark d-flex flex-row justify-content-between align-items-center");

    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("style","width:20%;height:50px;");
    leftDiv.setAttribute("class","d-flex flex-column justify-content-center align-items-center");
    let label = document.createElement("span");
    label.innerText = "MPIF"
    label.setAttribute("class","text-danger");
    label.setAttribute("style","font-weight:bolder;");
    leftDiv.appendChild(label);

    let small = document.createElement("small");
    small.innerText = "Grukul, pologorund, Indore";
    small.setAttribute("class","text-white");
    leftDiv.appendChild(small);

    let midDiv = document.createElement("div");
    midDiv.setAttribute("style","width:55%;height:50px;");
    midDiv.setAttribute("class","d-flex justify-content-center align-items-center")

    let searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder","Search for courses");
    searchInput.setAttribute("style","width:90%;height:40px;border-radius:5px;")
    midDiv.appendChild(searchInput);

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("style","width:20%;height:50px;");
    rightDiv.setAttribute("class","d-flex align-items-center justify-content-around");

    let signIn = document.createElement("span");
    signIn.innerHTML = "<b>SIGN-IN</b>"
    // signIn.setAttribute("onclick", "Login()");
    signIn.style.cursor = "pointer";
    signIn.onclick = signInPage;
    signIn.setAttribute("class","text-white");
    rightDiv.appendChild(signIn);
    
    let signUp = document.createElement("span");
    signUp.innerHTML = "<b>SIGN-UP</b>"
    signUp.setAttribute("class","text-white");
    rightDiv.appendChild(signUp);

    headerDiv.appendChild(leftDiv);
    headerDiv.appendChild(midDiv);
    headerDiv.appendChild(rightDiv);
    main.appendChild(headerDiv);
}

function signInPage(){
    let fomeContainer = document.querySelector("#formContainer");
    console.log(!fomeContainer);
    console.log(fomeContainer);
    
    if(!fomeContainer){
        fomeContainer=document.createElement("div");
        fomeContainer.setAttribute("id","fomeContainer");
        document.body.appendChild(fomeContainer);
    }

    let existingFome = document.getElementById("signInfome");
    if(existingFome){
        existingFome.remove();
        return;
    }

    let first = document.createElement("div");
    first.setAttribute("id","signInfome");
    first.setAttribute(
        "style",
         "height:450px; width:500px; border: 2px solid black; background: white; position: absolute; top: 100px; left: 50%; transform: translateX(-50%); padding: 20px; text-align: center; box-shadow: 0px 0px 10px rgba(90, 87, 87, 0.4);"
    );
    
    let heading = document.createElement("h3");
    heading.innerText = "Sign In";
    first.appendChild(heading);

    fomeContainer.appendChild(first);
}

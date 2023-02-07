const loginEL = document.querySelector("#login-user");
const handleLogin = async (e)=>{
    e.preventDefault();
    try{
        
        const username = document.querySelector("#usernameInput").value.trim();
        const password = document.querySelector("#passwordInput").value.trim();

        if(username && password){
            const response = await fetch('/api/users/login',{
                method: "POST",
                body: JSON.stringify({username, password }),
                headers: { "Content-Type": "application/json" },
            });
            
            if(response.ok){
                console.log("Logged in Successfully!")
                window.location.assign('/home')
            }
        }

    }catch(err){
        console.log(err);
    }

}

loginEL.addEventListener('click', handleLogin)
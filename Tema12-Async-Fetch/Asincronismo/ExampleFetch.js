fetch("https://api.github.com/users")
    .then((response)=>response.json() )
    .then((data)=>{
        let container=document.getElementById("root");
        data.forEach(element => {
            let li= document.createElement("li");
            li.innerHTML=`
                <img class="avatar" src=${element.avatar_url}>
                <h3>${element.login}</h3>
            `            
            container.append(li);
        });
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
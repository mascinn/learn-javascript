// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, image, files)
//         Simplifies asynchronous data fetching in Javascript and
//         used for interacting with APIs to retrieve and send
//         asynchronously over the web.
//         fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     // .then(response => {
//     //     if (!response.ok){
//     //         throw new Error("Could not fetch resource");

//     //     }
//     //     return response.json();
//     // })
//     // .then(data => console.log(data))
//     // .catch(error => console.error(error));
//     .then(response => response.json())
//     .then(data => console.log(data.name))


async function fetchData(){

    const pokemonNameInput = document.getElementById("pokemonName").value.toLowerCase();
    const imgElement = document.getElementById("pokemonSprite");
    const textResult = document.getElementById("textResult");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`);

    try{

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = await data.sprites.front_default;
        const pokemonName = await data.name;
        
        textResult.textContent = `Pokemon ${pokemonName} is available`;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        

    } catch(error){
        console.error(error)
        textResult.textContent = `Pokemon ${pokemonNameInput} is not available`;
    }
}
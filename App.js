const form = document.querySelector("#searchBar")
form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    document.querySelector(".results").innerHTML=""
    let searchTerm = form.children[0].value 
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const shows = res.data
    const showCards =  document.createElement("div");
    showCards.classList.add("card-group", "text-center");
    for(result of shows)
    {
        const show = document.createElement("a");
        show.classList.add("card", "mx-2", "my-4", "text-white", "bg-dark", "mb-3", "text-center");
        if(result.show.image)
        {
            console.dir(result);
            const img = document.createElement("img")
            img.src = result.show.image.medium 
            show.append(img)
            const showName = document.createElement("h5")
            showName.classList.add("card-title")
            showName.innerText = `${result.show.name}`;
            show.append(showName)
            show.href = `${result.show.url}`
            showCards.append(show)
        }
    }
    document.querySelector(".results").append(showCards)
})
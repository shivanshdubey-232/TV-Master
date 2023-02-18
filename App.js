const form = document.querySelector("#searchBar")
form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    document.querySelector(".results").innerHTML=""
    let searchTerm = form.children[0].value 
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const shows = res.data
    for(result of shows)
    {
        if(result.show.image)
        {
            const img = document.createElement("img")
            img.src = result.show.image.medium 
            document.querySelector(".results").append(img)
        }
    }
})
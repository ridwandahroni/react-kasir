const searchButton = document.querySelector(".btn");
searchButton.addEventListener("click", async function () {
    const inputKeyword = document.querySelector(".input-keyword");
   let response = await fetch(`https://www.omdbapi.com/?apikey=2a516933&s=${inputKeyword.value}&plot=full`
   );
    
    let json = await response.json();
    let movie = json.Search;
    let card = ``;
    const cardContainer = document.querySelector(".container-card");
    movie.map((m)=> {
        card += Innercard(m)
        cardContainer.innerHTML = card;
  
    })
    console.log(movie);
})

function Innercard(m) {
    return ` 

    <div class="w-full px-2 lg:w-1/2 xl:w-1/3 flex">
    <div class="bg-white rounded-md w-full overflow-hidden border-black border-2 m-4 flex">

      <img src="${m.Poster}" alt="${m.Title}" class="w-1/2 " />
      <div class="py-8 px-6 w-1/2">
       
          <h3 class=" mb-3 font-semibold text-lg text-dark hover:text-primary " >${m.Title}</h3>
        
        <p class="font-medium text-base mb-4 text-secondary">${m.Year}</p>
        <a href="#" class="font-medium text-sm text-blue-500 hover:text-blue-400 ">
          lihat selengkapnya
        </a>
      </div>
    </div>
  </div>
  
    
    `
}

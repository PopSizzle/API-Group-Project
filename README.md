## API Group Project 1: GameBoard

## Synopsis

GameBoard is a web application that integrates information from several third-party APIs providing users an easy-to-use discovery platform of new potential games to play.

``` 
Project 1 Requirements

Must use at least two server-side APIs
Must use a CSS framework other than Bootstrap
Must be interactive (i.e: accept and respond to user input)
Use at least one new third-party API
Must have a polished UI
Must meet good quality coding standards
Does not use alerts, confirms or prompts (look into modals)
Must be deployed to GitHub Pages
Must be interactive (i.e: accept and respond to user input)
Must have some repeating element / table
```

## Motivation

In this time of people living indoors, many people are turning to board games. They may need help figuring out what board game is right for them. Our app is aiming to help people figure out which board games they should consider based on a variety of preferences.

Our web application integrates information from several key third-party APIs providing users an easy-to-use discovery platform to obtain the insight on new potential games necessary to make the right choice with their next board game party. We will also compile information for them that will make learning and playing the game easier.

## Implemented Technologies

- HTML
- CSS
- Javascript
- jQuery
- Tailwind CSS
- Parsley.js
- Board Game Atlas API
- YouTube Videos API

## Application Demo

![Site](assets/gameboard-demo.gif)

## Code Examples

## Tailwindcss

With Tailwindcss, we can just apply all the classes on the HTML set on the css file by the Tailwindcss without having to actually modify the styling file at all.
```
        <div class="w-full md:w-1/2 px-4 mb-1 md:mb-0">

            <div class="relative">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="minPlayersInput">
                    Min Number of Players
                 </label>
                 <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="minPlayersInput" type="number" min="1" max="10" data-parsley-trigger="change" required="true" value="1">
             </div>
        </div>


```
In this code example, we se are setting the event listeners dynamically.
```

   for (var i = 0; i < openmodal.length; i++) {
        openmodal[i].setAttribute('id', 'modal_' + i)
        openmodal[i].addEventListener('click', function () {
            toggleModal(this.id)
        })
    }

    function toggleModal(id = null) {

        var dataElementIndex; 
        if (id !== null) {
            dataElementIndex = parseInt(id.split('_')[1]);
            console.log('dataElementIndex', dataElementIndex)

            console.log("gamesData inside modal", gamesData);
            var selectedGame = gamesData[dataElementIndex];

            console.log('selectedGame', selectedGame);
            document.getElementById("titleGameModal").innerHTML=selectedGame.name;
            document.getElementById("min-players-modal").innerHTML="Min. Number of Players:  "+selectedGame.min_players;
            document.getElementById("max-players-modal").innerHTML="Max. Number of Players:  "+selectedGame.max_players;
            document.getElementById("purchase-price-modal").innerHTML="Purchase Price:  $"+selectedGame.msrp;
            document.getElementById("year-published-modal").innerHTML="Year Published:  "+selectedGame.year_published;
            document.getElementById("max-play-time-modal").innerHTML="Max. Play Time:  "+selectedGame.max_playtime;
            document.getElementById("youTubeModal").setAttribute("src",selectedGame.ytURL);
            document.getElementById("gbatlas-modal").setAttribute("href","https://www.boardgameatlas.com/search/?name=" + selectedGame.name);

        }

        const body = document.querySelector('body')
        const modal = document.querySelector('.modal')
        modal.classList.toggle('opacity-0')
        modal.classList.toggle('pointer-events-none')
        body.classList.toggle('modal-active')
    }
```

## Board Game Atlas API



## YouTube Videos API

Below is a function to search the Youtube Videos API response based on user click of a game card and dynamically creates a video src link to embed on modal element.

```js
function youtubeResponse(selectedGame){
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + videoType + selectedGame + "&type=video&key=AIzaSyAjs8I4xGPzoBBcuCk4afKvx-IRoVaQX0A"

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var videoId = response.items[0].id.videoId;
        
        return "https://www.youtube.com/embed/" + videoId;
    })
}
```

## Application & Github Links

[GameBoard](https://popsizzle.github.io/API-Group-Project/)


[GitHub](https://github.com/PopSizzle/API-Group-Project)

## Author Links

Created by: 

[Cristina Terry](https://www.linkedin.com/in/dcristinaterry/) , [Sam Poppe](https://www.linkedin.com/in/sam-poppe-623281193/) , & [Will Gibson ](https://www.linkedin.com/in/wtgibson/)

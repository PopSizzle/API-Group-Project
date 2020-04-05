## API Group Project 1: GameBoard

## Synopsis

GameBoard is a web application that integrates information from several third-party APIs providing users an easy-to-use discovery platform of new potential games to play.

In this time of people living indoors, many people are turning to board games, they may need help figuring out what board game is right for them. Our app aims to help people figure out which board games they should consider based on a variety of preferences.

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

In this time of people living indoors, many people are turning to board games. They may need help figuring out what board game is right for them. Our app is aiming to help people figure out which board games they should consider based on a variety of preferences. We will also compile information for them that will make learning and playing the game easier, such as youtube instructional videos, reviews, and locations of either online or local game shops that could sell them the game they want.

Our web application integrates information from several key third-party APIs providing users an easy-to-use discovery platform to obtain the insight on new potential games necessary to make the right choice with their next board game party.

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

Show what the APP does as concisely as possible: Screen Shots of relevant code, gif of the working application

## Code Examples


## Tailwindcss



## Board Game Atlas API



## YouTube Videos API

Below is a function to dynamically search Youtube Videos API based on user click of game card and create video src link to embed on modal element.

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

[Cristina Terry](#) , [Sam Poppe](https://www.linkedin.com/in/sam-poppe-623281193/) , & [Will Gibson ](https://www.linkedin.com/in/wtgibson/)

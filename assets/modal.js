    var openmodal = document.querySelectorAll('.modal-open')
    console.log(openmodal);




    for (var i = 0; i < openmodal.length; i++) {
        openmodal[i].setAttribute('id', 'modal_' + i)
        openmodal[i].addEventListener('click', function () {
            toggleModal(this.id)
        })
    }

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)

    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', function() {
        toggleModal()
    })
}

    document.onkeydown = function (evt) {
        evt = evt || window.event
        var isEscape = false
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc")
        } else {
            isEscape = (evt.keyCode === 27)
        }
        if (isEscape && document.body.classList.contains('modal-active')) {
            toggleModal()
        }
    };


    function toggleModal(id = null) {

        var dataElementIndex; 
        var selectedGame;
        if (id !== null) {
            dataElementIndex = parseInt(id.split('_')[1]);
            console.log('dataElementIndex', dataElementIndex)

            console.log("gamesData inside modal", gamesData);

            if(dataElementIndex === 6 || dataElementIndex === 7){
                var index = dataElementIndex - 6;
                selectedGame = recGamesData[index];
            }
            else{selectedGame = gamesData[dataElementIndex]}
            console.log(selectedGame);


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





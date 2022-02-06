$(document).ready(function () {
    let apiUrl = "https://swapi.dev/api/"
    let nextPageUrl = null;
    let prevPageUrl = null;

    function showStarWarsPlanets(planets, nextPage, prevPage){
        console.log(planets);
        let tbody = $('#table-cells').html('');
        for (let planet of planets) {
            let tr = $('<tr></tr>');
            let td0 = $('<td></td>');
            let td0Html = planet.name;

            td0.html(td0Html);
            tbody.append(tr);
            tr.append(td0);
            
            let td1 = $('<td></td>');
            let td1Html = planet.population;
            td1.html(td1Html)
            tr.append(td1);

            let td2 = $('<td></td>');
            let td2Html = planet.climate;
            td2.html(td2Html)
            tr.append(td2);

            let td3 = $('<td></td>');
            let td3Html = planet.gravity;
            td3.html(td3Html)
            tr.append(td3);
        }

        if (nextPage) {
            $('#next').show();
        } else {
            $('#next').hide()
   
        }
    
        if (prevPage) {
            $('#prev').show();
            $('#next').hide()
        } else {
            $('#prev').hide();
        }
    }

    function getStarWarsPlanets(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (response) {
                console.log(response);
                showStarWarsPlanets(response.results, response.next, response.previous)
                nextPageUrl = response.next;
                prevPageUrl = response.previous;  
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    //Events
    $('#next').on('click', function () {
        console.log('NEXT');
        getStarWarsPlanets(nextPageUrl);
    });

    $('#prev').on('click', function () {
        console.log("PREV");
        getStarWarsPlanets(prevPageUrl);
    });
    

    $('#btn').on('click', function (){

        $.ajax({
            url: `${apiUrl}planets/`,
            method: 'GET',
            success: function (response){
                console.log(response);
                showStarWarsPlanets(response.results, response.next, response.previous)
                nextPageUrl = response.next;
                prevPageUrl = response.previous;           
            },
            error: function(error){
                console.log(error);
            }
         
        })

    })

})

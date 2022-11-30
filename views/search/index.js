function searchshow(){
    var input = document.getElementById("serchbox").value
    fetch(`/apis/?showname=${input}`).then((data)=>{return data.json()}).then((data)=>{

        var showlanguage = ()=>{
            var alllang = ""
            for(var i = 0; i <data.showlanguage.length; i++){
                alllang = alllang + data.showlanguage[i] + ", " 
            }

            return alllang
        }

        var  showgenres = ()=>{
            var allgenres = ""
            for(var i = 0; i <data.genres.length; i++){
                allgenres = allgenres + data.genres[i] + ", " 
            }

            return allgenres
        }

        var  showschedule = ()=>{
            var allschedule = ""
            for(var i = 0; i <data.schedule.length; i++){
                allschedule = allschedule + data.schedule[i] + ", " 
            }

            return allschedule
        }


        var cardcontainer = document.getElementById("showcardconatiner")
        var span = document.createElement("span")
        span.innerHTML = `
        <div class="card">
        <img src="${data.showposter}"
            alt="">
        <h3 class="showname">${data.showname}</h3>
        <p class="summary">${data.showsummarry}</p>
        <p>Type: </b>${data.showtype}
        <br>
        <b>Lang: </b>${showlanguage()}
        <br>
        <b> Genres: </b>${showgenres()} 
        <br>
        <b>Status: </b>${data.status} 
        <br>
        <b>Schedule: </b>${showschedule()}</p>
    </div>
    `

    cardcontainer.append(span)

    })
}
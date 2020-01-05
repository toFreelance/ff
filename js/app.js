//js





//GET MOVIES DATA/////////////////
var allData = [];
var httpReq = new XMLHttpRequest();
let pathMovie = "now_playing";
$(".navList .liEle").click(function () {
    pathMovie = $(this).attr('id');
    getData(pathMovie);
})

getData(pathMovie);

var links = document.querySelectorAll(".nav-link");

function getData(pathMovie) {
    // httpReq.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1Es0Xl_Rp_okaNkNthYUTcOl0gaUmS6B60sbvHb1_zk-ps3j5p85aWKaY")

    httpReq.open("GET", "https://api.themoviedb.org/3/movie/" + pathMovie + "?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1Es0Xl_Rp_okaNkNthYUTcOl0gaUmS6B60sbvHb1_zk-ps3j5p85aWKaY")
    httpReq.send();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {

            allData = JSON.parse(httpReq.response).results;
            displayData();
        }
    }

}
function displayData() {
    var temp = ``;

    for (var i = 0; i < allData.length; i++) {
        temp += `
        <div class="col-md-4 my-3">
          <div class="movieShow ">
            <div class="onMovie">
                <img src="https://image.tmdb.org/t/p/w500`+ allData[i].poster_path + `" class="img-fluid"/>
                <div class="movieLayer d-flex align-items-center">
                    <div class="movieInfo">
                        <h5>`+ allData[i].original_title + `</h5>
                        <p>`+ allData[i].overview + `</p>
                        <p> Rate: `+ allData[i].vote_average + `</p>
                    </div>
                </div>
             </div>
          </div>
        </div>`;
    }

    document.getElementById("moviesRow").innerHTML = temp;
}
//END GET MOVIES DATA/////////////////


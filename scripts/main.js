const maxResults = 10;
const channelID = "UCJM35zebmBhaYJ2w5nDzJhA";
const API_key = "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI";
const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelID}&maxResults=${maxResults}&key=${API_key}`;
let videos = [];
const elementsArray = document.querySelectorAll('.filter');

function getVideos() {
    $.get(url, function (data, status) {
        videos = data.items;
        addVideos(videos);
    });
}

function addVideos(videosLocal){
    for (var a = 0; a < 8; a++) {
        $(".videocontla").append($(`<iframe id="${videosLocal[a].id.videoId}" src="https://www.youtube.com/embed/${videosLocal[a].id.videoId}" frameborder="0" allowfullscreen></iframe>`));
    }
}

function filterVideo(filterData) {
    return videos.filter(item => item.snippet.description.includes(filterData));
}

function changeVideos(target){
    const videosTemp = filterVideo(target);
    addVideos(videosTemp)
}

elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function (val) {        
        $(".videocontla").empty(); 
        const filterTarget = val.target.name;
        changeVideos(filterTarget);
    });
});

function onLoadPage() {
    getVideos();
}




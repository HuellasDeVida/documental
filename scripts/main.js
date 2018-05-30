$(document).ready(getVideos);

var maxResults = 10;
var channelID = "UCJM35zebmBhaYJ2w5nDzJhA";
var API_key = "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI";

function getVideos() {
    $.get("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" +
        channelID + "&maxResults=" + maxResults + "&key=" + API_key,
        function (data, status) {
            //console.log(data);
            var videos = data.items;
            console.log(videos);
            for (var a = 0; a < 8; a++) {
                $(".videocontla").append($('<iframe src="https://www.youtube.com/embed/' + videos[a].id.videoId + '" frameborder="0" allowfullscreen></iframe>'));                                
            }
            
            var i;
            for (i = 0; i < videos.length; i++) {
                $.getJSON('https://www.googleapis.com/youtube/v3/videos?order=viewCount&part=statistics&id=' + videos[i].id.videoId + '&key=' + API_key, function (data) {
                    
                    //console.log(data.items[0].statistics.viewCount);
                    //console.log(data);
                });
            }
            for (var b = 0; b < 4; b++) {
                //$(".videocontpo").append($('<iframe src="https://www.youtube.com/embed/' + videos[b].id.videoId + '" frameborder="0" allowfullscreen></iframe>'));                                                
                //console.log("pasa");
            }            
        });
}

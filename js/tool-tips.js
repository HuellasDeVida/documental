
function closeWaitScreen() {
    $('.wait-screen').css('display', 'none');
  }
  
function hoverColorByPage(){
    if(window.location.pathname.includes('index')){
        $('#go-home').css('background-color', 'rgb(133, 49, 68)');
    }
    if(window.location.pathname.includes('documental')){
        $('#go-doc').css('background-color', 'rgb(133, 49, 68)');
    }
    if(window.location.pathname.includes('historias')){
        $('#go-his').css('background-color', 'rgb(133, 49, 68)');
    }
    if(window.location.pathname.includes('contacto')){
        $('#go-con').css('background-color', 'rgb(133, 49, 68)');
    }
    console.log(window.location.pathname);
}


function onLoadPageToolt() {
   hoverColorByPage();
   closeWaitScreen();
}
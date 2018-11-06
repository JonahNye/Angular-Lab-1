$(document).on()


function playBees() {
    var audio = document.getElementById("audio1");
    audio.play();
};

function playTell() {
    var audio = document.getElementById("audio2");
    audio.play();
};

$(document).on("mouseenter", ".app-section", (event) => {
    $(".app-section").css(({"background-image":"url(face.png)", "background-size":"100%" }));
    
    // $(".picture-container")
    //             .fadeIn(1000);
});

$(document).on("mouseleave", ".app-section", (event) => {
    $(".app-section").css(({"background-image": "", "background-color": "white"}));
    // $(".picture-container")
    //             .fadeOut(1000);
});
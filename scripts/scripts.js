//================================ GLOBAL FUNCTIONS ================================
const projects = {
    avalon: ["Avalon Web", "A web version of the classic board game Avalon. Click to play the game!", null],
    task: ["Task Manager", "<b>STILL UPDATING</b><br> A task manager created with MEAN stack. Click to see where it's at now!", null],
    tradeq: ["TradeQ", "<b>IN PROGRESS</b><br> A mock stock simulator. Still in progress. Click to check out where it's at now!", null],
    gpsnav: ["GPS Navigator", "An android app for GPS navigation based on sensors in the phone. Click to check it out!", null],
};

const works = {
    nexj: ["NexJ Systems Inc.", null, "images/nexj.png"],
    kpmg: ["KPMG LLP", null, "images/KPMG.png"],
    pavac: ["Pavac Industries", null, "images/pavac.png"],
};

let isEnableTooltip = false;

//================================ MAIN FUNCTIONS ================================
function togProjects(set, entry){
    isEnableTooltip = true;
    enableTooltip();
    updateTooltip(set[entry][0], set[entry][1], set[entry][2]);
    toggleRichTooltip();
}

function togStop(){
    disableTooltip();
    toggleRichTooltip();
}

//================================ HELPER FUNCTIONS ================================
function toggleHTMLDisplay(id, display){
    document.getElementById(id).style.display = display;
}

function enableTooltip(){
    $("a").bind("mousemove", showTooltip);
}

function disableTooltip(){
    isEnableTooltip = false;
    $("a").unbind("mousemove", showTooltip);
}

function showTooltip(){
    $("div.tooltip").css({
        top: event.pageY + 10 + "px",
        left: event.pageX + 10 + "px"
    }).show();
}

function toggleRichTooltip(){
    if(isEnableTooltip){
        toggleHTMLDisplay("tooltip", "block");
    }
    else{
        toggleHTMLDisplay("tooltip", "none");
    }
}

function updateTooltip(title, description, imgSrc){
    document.getElementById("tooltip-title").innerHTML = title;
    if(description != null){
        toggleHTMLDisplay("tooltip-description", "block");
        document.getElementById("tooltip-description").innerHTML = `${description}`;
    } else {
        toggleHTMLDisplay("tooltip-description", "none");
    }
    if(imgSrc != null){
        toggleHTMLDisplay("tooltip-image", "block");
        document.getElementById("tooltip-image").src = imgSrc;
    } else {
        toggleHTMLDisplay("tooltip-image", "none");
    }
}

//================================ INITIALIZE EVENT LISTENERS ================================
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("proj-avalon").addEventListener("mouseover", function (){
        togProjects(projects, "avalon");});
    document.getElementById("proj-tradeq").addEventListener("mouseover", function (){
        togProjects(projects, "tradeq");});
    document.getElementById("proj-gps").addEventListener("mouseover", function (){
        togProjects(projects, "gpsnav");});
        document.getElementById("proj-task").addEventListener("mouseover", function (){
            togProjects(projects, "task");});
    document.getElementById("proj-avalon").addEventListener("mouseout", togStop);
    document.getElementById("proj-tradeq").addEventListener("mouseout", togStop);
    document.getElementById("proj-gps").addEventListener("mouseout", togStop);
    document.getElementById("proj-task").addEventListener("mouseout", togStop);
    
	document.getElementById("work-nexj").addEventListener("mouseover", function (){
        togProjects(works, "nexj");});
    document.getElementById("work-kpmg").addEventListener("mouseover", function (){
        togProjects(works, "kpmg");});
    document.getElementById("work-pavac").addEventListener("mouseover", function (){
        togProjects(works, "pavac");});
    document.getElementById("work-nexj").addEventListener("mouseout", togStop);
    document.getElementById("work-kpmg").addEventListener("mouseout", togStop);
    document.getElementById("work-pavac").addEventListener("mouseout", togStop);
});
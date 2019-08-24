//================================ GLOBAL FUNCTIONS ================================
const projects = {
    vancouverhousing: ["Vancouver Housing Price Prediction", "Used a neural network and live housing data scraped from popular real estate websites to predict housing prices given a set of quantitative and categorical features.", null],
    notebook: ["Machine Learning Notebook", "Created a collection of notes about machine learning.", null],
    mllib: ["Machine Learning Library", "Created a library of common search algorithms and reinforcement learning algorithms.", null],
    stock: ["Stock Visualizer", "Created a stock visualization that renders stock data in real-time and highlights significant trends", null],
    avalon: ["Avalon Web", "A web version of the classic board game Avalon. Click to play the game!", null],
};

const works = {
    salesforce: ["Salesforce - Sayonara Analytics", null, "images/salesforce.png"],
    ibm: ["IBM QRadar Security Intelligence", null, "images/ibm.png"],
    nexj: ["NexJ Systems Inc.", null, "images/nexj.png"],
    kpmg: ["KPMG LLP", null, "images/KPMG.png"],
};

const activities = {
    lss: ["LifeSaving Society", "I'm certified and worked as a lifeguard in the local community pool. The certification required passing 8 courses in water safety and first aid protocols. I was also a swimming instructor in charge of 8-12 students per class.", null],
    muaythai: ["Muay Thai", "I'm a member of the Muay Thai Club. There are weekly meetings to practice and celebrate the art of Muay Thai.", null],
    badmintonclub: ["Badminton Club", "There are weekly sessions for casual or competitive play. Every term there are competitions for both singles and doubles.", null],
    swimming: ["Swimming", "I have been swimming for 9 years. I am certified as a lifeguard and a first aid responder to all water emergencies", null],
    piano: ["Piano", "I am level 8 in piano and in 2012. I won two awards for 2nd and 3rd place in competitions", null],
    art: ["Art/Drawing", "I have been taking lessons for 7 years. In 2013, I won 1st place in the Vancouver regional Remembrance Day Poster Contest hosted by the Royal Canadian Legion.", null],
    //tennis: ["Tennis", "I enjoy playing tennis in my leisure time.", null],
    //pingpong: ["Ping Pong", null, null],
    //foosball: ["Foosball", null, null],
};

let isEnableTooltip = false;

let currDocument = document.URL.split('/').pop();
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
    if(currDocument == "projects.html"){
        document.getElementById("proj-vancouverhousing").addEventListener("mouseover", function (){
            togProjects(projects, "vancouverhousing");});
        document.getElementById("proj-notebook").addEventListener("mouseover", function (){
            togProjects(projects, "notebook");});
        document.getElementById("proj-mllib").addEventListener("mouseover", function (){
            togProjects(projects, "mllib");});
        document.getElementById("proj-stock").addEventListener("mouseover", function (){
            togProjects(projects, "stock");});
        document.getElementById("proj-avalon").addEventListener("mouseover", function (){
            togProjects(projects, "avalon");});
        document.getElementById("proj-vancouverhousing").addEventListener("mouseout", togStop);
        document.getElementById("proj-notebook").addEventListener("mouseout", togStop);
        document.getElementById("proj-mllib").addEventListener("mouseout", togStop);
        document.getElementById("proj-stock").addEventListener("mouseout", togStop);
        document.getElementById("proj-avalon").addEventListener("mouseout", togStop);
    }
    else if(currDocument == "works.html"){
        document.getElementById("work-salesforce").addEventListener("mouseover", function (){
            togProjects(works, "salesforce");});
        document.getElementById("work-ibm").addEventListener("mouseover", function (){
            togProjects(works, "ibm");});
        document.getElementById("work-nexj").addEventListener("mouseover", function (){
            togProjects(works, "nexj");});
        document.getElementById("work-kpmg").addEventListener("mouseover", function (){
            togProjects(works, "kpmg");});
        document.getElementById("work-salesforce").addEventListener("mouseout", togStop);
        document.getElementById("work-ibm").addEventListener("mouseout", togStop);
        document.getElementById("work-nexj").addEventListener("mouseout", togStop);
        document.getElementById("work-kpmg").addEventListener("mouseout", togStop);
    }
    else if(currDocument == "about.html"){
        document.getElementById("act-lss").addEventListener("mouseover", function (){
            togProjects(activities, "lss");});
        document.getElementById("act-muaythai").addEventListener("mouseover", function (){
            togProjects(activities, "muaythai");});
        document.getElementById("act-badmintonclub").addEventListener("mouseover", function (){
            togProjects(activities, "badmintonclub");});
        document.getElementById("act-swimming").addEventListener("mouseover", function (){
            togProjects(activities, "swimming");});
        document.getElementById("act-piano").addEventListener("mouseover", function (){
            togProjects(activities, "piano");});
        document.getElementById("act-art").addEventListener("mouseover", function (){
            togProjects(activities, "art");});
        document.getElementById("act-lss").addEventListener("mouseout", togStop);
        document.getElementById("act-muaythai").addEventListener("mouseout", togStop);
        document.getElementById("act-badmintonclub").addEventListener("mouseout", togStop);
        document.getElementById("act-swimming").addEventListener("mouseout", togStop);
        document.getElementById("act-piano").addEventListener("mouseout", togStop);
        document.getElementById("act-art").addEventListener("mouseout", togStop);   
    }
});
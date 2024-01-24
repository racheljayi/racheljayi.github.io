let showing = 'profile';
let project = 'project6';

function hide(elmnt){
    document.getElementById(elmnt).style.display ='none';
}

function show(elmnt){
    hide(showing);
    document.getElementById(elmnt).style.display ='block';
    showing = elmnt;
}

function show_project(elmnt){
    hide(project);
    document.getElementById(elmnt).style.display ='inline-flex';
    project = elmnt;
}

function scrollTo(elmnt){
    document.getElementById(elmnt).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
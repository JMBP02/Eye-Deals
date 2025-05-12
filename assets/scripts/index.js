/*SIDE BAR DESIGN*/

function sidebarToggle() {
    const sidebar = document.querySelector('.jsSidebarMenu');
    if(!sidebar.classList.contains('sidebarMenuHide')) {
        sidebar.classList.add('sidebarMenuHide');
    } else {
        sidebar.classList.remove('sidebarMenuHide');
    }
}

function sidebarClose() {
    const sidebar = document.querySelector('.jsSidebarMenu');
    if(sidebar.classList.contains('sidebarMenuHide')) {
        sidebar.classList.remove('sidebarMenuHide');
    }
}

/*HIGHLIGHTING CLICKED BUTTON AND UNHIGHLIGHTING PREVIOUS CLICKED BUTTON*/

function clickedButton(clicked){
    const choosenButton = document.querySelector(clicked)

    turningOff()

    if(!choosenButton.classList.contains('clickedButton')){
        choosenButton.classList.add('clickedButton');
    }
}

function turningOff(){
    const turnOff = document.querySelector('.clickedButton')
    if(turnOff){
        turnOff.classList.remove('clickedButton');
    }
}
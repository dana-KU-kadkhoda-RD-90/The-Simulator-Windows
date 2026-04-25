
let topZIndex = 1000;

function activateWindow(windowElement) {

    document.querySelectorAll(".win-pc.active-window, #desktop button.active-window").forEach(win => {
        win.classList.remove("active-window");
    });

    windowElement.classList.add("active-window");
}


function processWindow(windowElement) {
    let headerElement;


    if (windowElement.classList.contains("win-pc")) {
        headerElement = windowElement.querySelector(".header-win-pc");
    }

    else if (windowElement.classList.contains("button") && windowElement.parentElement.id === "desktop") {

        headerElement = windowElement;
    }


    if (!headerElement) return;

    let isDragging = false;
    let offsetX, offsetY;


    headerElement.addEventListener("mousedown", (event) => {
       
        if (windowElement.id === "desktop" || windowElement.parentElement.id === "desktop") {
             event.preventDefault();
        }


        activateWindow(windowElement);
        windowElement.style.zIndex = ++topZIndex;

        isDragging = true; 

        
        const rect = windowElement.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        
        headerElement.style.cursor = 'grabbing';
        windowElement.style.cursor = 'grabbing';
    });

    
    if (headerElement) {
            function onMouseMove(event) {
                if (!isDragging) return; 
        
                
                let newX = event.clientX - offsetX;
                let newY = event.clientY - offsetY;
                
        
                
                windowElement.style.left = newX + "px";
                windowElement.style.top = newY + "px";
            }
        
            
            function onMouseUp() {
                if (!isDragging) return; 
        
                isDragging = false; 
        
          
                windowElement.style.cursor = "grab";
            headerElement.style.cursor = "grab";
        }


       
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }
}


document.querySelectorAll(".win-pc").forEach(processWindow);





function close(win , btn){
    
    btn.addEventListener("click" , () => {
        win.style.display = "none"
    })
}


function open(win , btn) {

    btn.addEventListener("click" , () => {
        win.style.display = "block";
        win.style.zIndex = ++topZIndex;
        topZIndex = ++topZIndex
    
        document.querySelectorAll(".win-pc,#win-files-pc,win-this-pc,win-note-pc,win-trash-pc").forEach(win => {
            win.classList.remove("active-window");
        });
        win.classList.add("active-window")
    });

    
    
}


function big_win(win , btn) {

    let oneClick = true

    btn.addEventListener("click" , () => {
        
        if(oneClick){
            win.style.top = "0";
            win.style.right = "0";
            win.style.left = "0";
            win.style.bottom = "0";
    
            oneClick = false
        }else {
            win.style.top = "6px";
            win.style.right = "auto";
            win.style.left = "90px";
            win.style.bottom = "auto";
    
            oneClick = true;
        }
    })
}


function sound_none(win) {
    win.addEventListener("click" , () => {
        winStart.style.display = "none";
        con_small_app.style.opacity = 0;
        document.getElementById("set-sound1").style.display = "none";
        document.getElementById("set-sound2").style.display = "none";
        document.getElementById("set-sound3").style.display = "none"; 
});
}




const closeButtonFiles = document.getElementById("close-win-files");
const winFiles = document.getElementById("win-files-pc");

close(winFiles,closeButtonFiles)



const closeButtonPC = document.getElementById("close-win-pc");
const winPC = document.getElementById("win-this-pc");

close(winPC,closeButtonPC)



const closeButtonTrash = document.getElementById("close-win-trash")
const winTrashPC = document.getElementById("win-trash-pc");

close(winTrashPC,closeButtonTrash)

const closeButtonNote = document.getElementById("close-win-note")
const winNotePC = document.getElementById("win-note-pc");

close(winNotePC,closeButtonNote)



const openButtonThispc = document.getElementById("icon-pc");

open(winPC,openButtonThispc)



const openButtonFiles = document.getElementById("icon-files");

open(winFiles,openButtonFiles)


const openButtonTrash = document.getElementById("icon-trash");

open(winTrashPC,openButtonTrash)


const openButtonNote = document.getElementById("icon-note");

open(winNotePC,openButtonNote)




const bigWinPC = document.getElementById("big-win-pc");
big_win(winPC,bigWinPC)




const bigWinFiles = document.getElementById("big-win-files");
big_win(winFiles,bigWinFiles)




const bigWinTrash = document.getElementById("big-win-trash");
big_win(winTrashPC,bigWinTrash)


const bigWinNote = document.getElementById("big-win-note");
big_win(winNotePC,bigWinNote)


const desApp1 = document.getElementById("des-app-1")
desApp1.addEventListener("click" , () => {
    alert("This App is not installed")
})

const desApp2 = document.getElementById("des-app-2")
desApp2.addEventListener("click" , () => {
    alert("This App is not installed")
})


setInterval(function(){
    let d = new Date()
    document.getElementById("clock").innerHTML = d.toLocaleTimeString()
}, 1000);


const startIcon = document.getElementById("start-icon");
const winStart = document.getElementById("start-win");
let showWinStart = true;

startIcon.addEventListener("click",function(){

    if(showWinStart){
        winStart.style.display = "block";
        showWinStart = false;
    }else {
        winStart.style.display = "none";
        showWinStart = true;
    }

});

const desktop = document.getElementById("desktop");


sound_none(desktop)
sound_none(winPC)
sound_none(winTrashPC)
sound_none(winFiles)


const trashInFiles = document.getElementById("trash-in-files");
trashInFiles.addEventListener("click" , () => {
    winFiles.style.display = "none";
    winTrashPC.style.display = "block";
    winTrashPC.style.zIndex = ++topZIndex;
});


const lang = document.getElementById("lang")
let langIsEn = true 


lang.addEventListener("click" , () => {
    if(langIsEn){
        lang.innerHTML = "فا"
        langIsEn = false
    }else {
        lang.innerHTML = "ENG"
        langIsEn = true
    }
    
});


const sound = document.getElementById("sound")
let isShow = true

sound.addEventListener("click" , () => {
    if (isShow) {
        document.getElementById("set-sound1").style.display = "block";
        document.getElementById("set-sound2").style.display = "block";
        document.getElementById("set-sound3").style.display = "block";

        isShow = false
    }else {
        document.getElementById("set-sound1").style.display = "none";
        document.getElementById("set-sound2").style.display = "none";
        document.getElementById("set-sound3").style.display = "none";

        isShow = true
    }
});

const setSound1 = document.getElementById("set-sound1")


const upSound = document.getElementById("up-sound")
const downSound = document.getElementById("down-sound")

upSound.addEventListener("click" , () => {
    let setSound1Style = window.getComputedStyle(setSound1).bottom
    setSound1Style = setSound1Style.slice(0, -2)

    if (Number(setSound1Style >= 130)){
        return
    }else {
        setSound1.style.bottom = Number(setSound1Style) + 2 + "px"
    }
})



downSound.addEventListener("click" , () => {
    let setSound1Style = window.getComputedStyle(setSound1).bottom
    setSound1Style = setSound1Style.slice(0, -2)

    if (Number(setSound1Style) <= 38) {
        return
    }else {
        setSound1.style.bottom = Number(setSound1Style) - 2 + "px"
    }
})


const show_small_app = document.getElementById("show-small-app");
const con_small_app = document.querySelector(".con-small-app");

let isShow_small_app = true;

show_small_app.addEventListener("click" , () => {
    if(isShow_small_app) {
        con_small_app.style.opacity = 1;
        show_small_app.innerHTML = "🔻"
        isShow_small_app = false;
    }else {
        con_small_app.style.opacity = 0;
        show_small_app.innerHTML = "🔺"
        isShow_small_app = true;
    }

    if(lang.innerHTML == "فا"){
        con_small_app.style.right = 200 + "px"
    }else {
        con_small_app.style.right = 220 + "px"
    }
})


const date = document.getElementById("date")

function today() {
    const today = new Date();
    const formatted = today.toISOString().split("T")[0];
    date.innerHTML = formatted
}

today()
setInterval(today(),1000)


const textNote = document.getElementById("text-note")
const colorNote = document.querySelectorAll(".color-note")

colorNote.forEach(color => {
    color.addEventListener("click" , () => {
        textNote.style.color = color.style.backgroundColor
    })
})


const smallFont = document.getElementById("small-font")
const bigFont = document.getElementById("big-font")

smallFont.addEventListener("click" , () => {
    let textNoteStyleSmallFont = window.getComputedStyle(textNote).fontSize
    textNoteStyleSmallFont = textNoteStyleSmallFont.slice(0, -2)
    textNoteStyleSmallFont = Number(textNoteStyleSmallFont) - 1
    textNote.style.fontSize = textNoteStyleSmallFont + "px"
    console.log(textNoteStyleSmallFont)
})

bigFont.addEventListener("click" , () => {
    let textNoteStyleBigfont = window.getComputedStyle(textNote).fontSize
    textNoteStyleBigfont = textNoteStyleBigfont.slice(0, -2)
    textNoteStyleBigfont = Number(textNoteStyleBigfont) + 1
    textNote.style.fontSize = textNoteStyleBigfont + "px"
    console.log(textNoteStyleBigfont)
})

let gameseq = [];
let user = [];
let btns = ["blue", "yellow", "violet", "orange"];
let started = false;
let level = 0;
let h2 = document.getElementById('h2');
let highestscore = 0;
document.addEventListener('keypress', () => {
    if (started == false) {
        started = true;
        h2.innerText = `Level ${level}`;
        levelup();
    }
})
function gamesplash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250)
}
function usersplash(btn) {
    btn.classList.add("user-flash");
    setTimeout(() => {
        btn.classList.remove("user-flash");
    }, 250)
}
function levelup() {
    level++;
    h2.innerText = `Level:${level}`;
    let randindx = Math.floor(Math.random() * 4);
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gamesplash(randbtn);
    gameseq.push(randcolor);
}
function reset() {
    started = false;
    gameseq = [];
    user = [];
    level = 0;
}
function checkmatch(currindx) {
    if (user[currindx] === gameseq[currindx]) {
        if (user.length === gameseq.length) {
            setTimeout(() => {
                user = [];
                levelup();
            }, 1000);
        }
    } else {
        highestscore = highestscore > level ? highestscore : level;
        h2.innerText = `Game Over!  
Highest Score: ${highestscore}  
Your Score: ${level}  
Press any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnpress() {
    let btn = this;
    usersplash(btn);
    let usercolor = btn.getAttribute("id");
    user.push(usercolor);
    checkmatch(user.length - 1);
}
let allbtns = document.querySelectorAll('.btn');
for (let allbtn of allbtns) {
    allbtn.addEventListener('click', btnpress);
}


const d = document;

export default function draw(btn, selector){
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];
        
       return `El ganador es: ${winner.textContent}`;
    };

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
        }
    });
}

/*const getWinnerComment = (selector) => {
    const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length);
        winner = $players(random);
    return `El ganador es: ${winner.textContent}`;
};

getWinnerComment("ytd-comment-thread.renderer");*/
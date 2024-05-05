window.onload = ()=>{
    let up = document.getElementById("up");
    let down = document.getElementById("down");

    up.addEventListener("click", ()=>{
        let y = window.scrollY;
        window.scroll({
            top: y - 200,
            behavior: "auto",
        });
    });
    down.addEventListener("click", ()=>{
        let y = window.scrollY;
        window.scroll({
            top: y + 200,
            behavior: "auto",
        });
    });
}
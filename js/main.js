
let elDateInput = document.querySelector("input");
let elP = document.querySelector("p")

elDateInput.addEventListener("change", () => {
    setInterval(() => {
        startTimer(new Date(elDateInput.value))
    }, 1000)
})


function startTimer(date) {
   
    let now = new Date();
    let diff = Math.trunc((date.getTime() - now.getTime()) / 1000)

    let second = diff % 60;
    diff = Math.trunc(diff / 60);
    let minute = diff % 60;
    diff = Math.trunc(diff / 60);
    let hour = diff % 24;
    diff = Math.trunc(diff / 24)

    
elP.textContent = (`${diff} kun, ${hour} soat, ${minute} minute, ${second} second`)
}

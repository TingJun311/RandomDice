
// If the roll button was click
const rollBtn = document.querySelector("#rollBtn");
rollBtn.addEventListener("click", () => {
    // Get both random number 
    let dice1Num = randomGenerator(6);
    let dice2Num = randomGenerator(6);

    // Set the img
    document.querySelector(".dice .img1").setAttribute("src", `./images/dice${dice1Num}.png`);
    document.querySelector(".dice .img2").setAttribute("src", `./images/dice${dice2Num}.png`);
    
    function randomGenerator (range) {
        // This function allow to generate random number from range
        let randomNum = Math.random();
        return Math.floor((randomNum *= range) + 1);    
    }
    
    const title = (() => {
        // This function its to change the heading on which player wins
        let heading = document.querySelector(".container h1");
        if (dice1Num === dice2Num) {
            heading.textContent = "Draw!";
        } else {
            if (dice1Num < dice2Num) {
                heading.textContent = "Player 2 wins!";
            } else {
                heading.textContent = "Player 1 wins!";
            }
        }
    });
    
    title();
})


let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let Red = 0
let Yellow = 0


function play(player, Turn, correction, DiceNum) {
    let sum =0;
    if (Turn == 'Red') {

        Red = Red + DiceNum

        if (Red > 100) {
            Red = Red - DiceNum
            // sum = Red
        }

        if (Red == 1) {
            Red = 38
        }
        if (Red == 4) {
            Red = 14
        }
        if (Red == 9) {
            Red = 31
        }
        if (Red == 17) {
            Red = 7
        }
        if (Red == 21) {
            Red = 42
        }
        if (Red == 28) {
            Red = 84
        }
        if (Red == 51) {
            Red = 67
        }
        if (Red == 54) {
            Red = 34
        }
        if (Red == 62) {
            Red = 19
        }
        if (Red == 64) {
            Red = 60
        }
        if (Red == 71) {
            Red = 91
        }
        if (Red == 80) {
            Red = 99
        }
        if (Red == 87) {
            Red = 24
        }
        if (Red == 93) {
            Red = 73
        }
        if (Red == 95) {
            Red = 75
        }
        if (Red == 98) {
            Red = 79
        }

        sum = Red



    }

    if (Turn == 'Yellow') {

        Yellow = Yellow + DiceNum

        if (Yellow > 100) {
            Yellow = Yellow - DiceNum
            // sum = Red
        }
        
        if (Yellow == 1) {
            Yellow = 38
        }
        if (Yellow == 4) {
            Yellow = 14
        }
        if (Yellow == 9) {
            Yellow = 31
        }
        if (Yellow == 17) {
            Yellow = 7
        }
        if (Yellow == 21) {
            Yellow = 42
        }
        if (Yellow == 28) {
            Yellow = 84
        }
        if (Yellow == 51) {
            Yellow = 67
        }
        if (Yellow == 54) {
            Yellow = 34
        }
        if (Yellow == 62) {
            Yellow = 19
        }
        if (Yellow == 64) {
            Yellow = 60
        }
        if (Yellow == 71) {
            Yellow = 91
        }
        if (Yellow == 80) {
            Yellow = 99
        }
        if (Yellow == 87) {
            Yellow = 24
        }
        if (Yellow == 93) {
            Yellow = 73
        }
        if (Yellow == 95) {
            Yellow = 75
        }
        if (Yellow == 98) {
            Yellow = 79
        }

        sum = Yellow



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        let DiceNumarr = Array.from(String(sum))
        n1 = eval(DiceNumarr.shift())
        n2 = eval(DiceNumarr.pop())
        // console.log(n1, n2)
        

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    DiceNum = Math.floor(Math.random() * (6) + 1);
    document.getElementById("dice").innerText = DiceNum


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'Red', 0, DiceNum)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'Yellow', 55, DiceNum)

    }

    tog = tog + 1




})
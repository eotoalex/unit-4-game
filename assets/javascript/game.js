

    // Variables 
    var counter = 0;
    var randomNum = 0;
    var playerScore = 0;
    let wins = 0;
    let loses = 0;
    var b1 = parseInt($("#button-1").val());
    var b2 = parseInt($("#button-2").val());
    var b3 = parseInt($("#button-3").val());
    var b4 = parseInt($("#button-4").val());
    var gameOver = false;
    arrayOfButtons = [b1,b2,b3,b4];


    $("#player-total-score").text("Score: " + playerScore);
    $("#wins").text("Wins: " + wins);
    $("#loses").text("Loses: " + loses);

    hiddenButtonNum(arrayOfButtons);
    console.log(b1,b2,b3,b4);
    
    // Random number generated to be displayed in random-number div between 19-120. Added an if statement to make sure that the random number remained above 19.
    
    
    randomNum = Math.floor(Math.random()*120)+1;
    if (randomNum < 19){
        var ph = randomNum;
        randomNum = 19 - randomNum;
        randomNum = ph + randomNum;
    }
    $("#comp-random-number").text(randomNum);
    
    

    //A function that takes an array of crystals to generate a random number in each of the crystal buttons after game over or player wins. 1-12

    function hiddenButtonNum (arr){
            
            for (var i = 0; i < 4; i++){
            buttonNumGen = Math.floor(Math.random()*12)+1;
            arrayOfButtons[i] = buttonNumGen;

            console.log(arrayOfButtons[i])
            };
            b1 = arrayOfButtons[0];
            b2 = arrayOfButtons[1];
            b3 = arrayOfButtons[2];
            b4 = arrayOfButtons[3];

            return b1,b2,b3,b4;

        }




    //This watches which crystal is clicked and incementally logs the player's wins, loses, playerscores and generates the random number that the user will see.

    $(".crystal").on("click",function(event) {
    var pressedButton = event.key;

    if(playerScore === randomNum){
    wins++;
    playerScore = 0;
    hiddenButtonNum(arrayOfButtons);
    $("#wins").text("Wins: "+wins);
    
    // New computer generated number to be displayed.
    randomNum = Math.floor(Math.random()*120)+1;

    if (randomNum < 19){
        var ph = randomNum;
        randomNum = 19 - randomNum;
        randomNum = ph + randomNum;
    }
     $("#comp-random-number").text(randomNum);
     }
     else if(playerScore > randomNum){
     loses++;
     playerScore = 0;
     hiddenButtonNum(arrayOfButtons);
     $("#loses").text("Loses: "+loses);

    // New computer generated number to be displayed.
    randomNum = Math.floor(Math.random()*120)+1;
    if (randomNum < 19){
        var ph = randomNum;
        randomNum = 19 - randomNum;
        randomNum = ph + randomNum;
    }
    $("#comp-random-number").text(randomNum);
       
   }
   else if(parseInt($(this).val()) === 1){
    playerScore = playerScore + b1;
    $("#player-total-score").text(playerScore);
    console.log("Button1 " + playerScore );
    }
    else if (parseInt($(this).val()) === 2) {
        playerScore = playerScore + b2;
        $("#player-total-score").text(playerScore);
        console.log("Button2 " + playerScore );
    }
    else if (parseInt($(this).val()) === 3) {
        playerScore = playerScore + b3;
        $("#player-total-score").text(playerScore);
        console.log("Button3 " + playerScore );
    }
    else if (parseInt($(this).val()) === 4) {
        playerScore = playerScore + b4;
        $("#player-total-score").text(playerScore);
        console.log("Button4 " + playerScore );
    }  
   });

    
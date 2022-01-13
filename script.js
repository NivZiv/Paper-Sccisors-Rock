    function choosingRock()
    {
        const options = new Array("Rock", "Paper", "Sccisors");
        const RandomizeOption = Math.floor(Math.random() * options.length);
        let PlayerChoosen = "Rock";
        let ComputerChoose = options[RandomizeOption];
        document.getElementById('gameCurrentStatus_Text').innerText = "You choose "+PlayerChoosen+" and"
                                                                     +" the computer choose "+ComputerChoose+"";
        if(ComputerChoose === "Paper")
        {
             let newValue = parseInt(document.getElementById('countLosses').innerText);
             newValue += 1;
             document.getElementById('countLosses').innerText = newValue.toString()
        }
        if(ComputerChoose === "Sccisors")
        {
             let newValue = parseInt(document.getElementById('countWins').innerText);
             newValue += 1;
             document.getElementById('countWins').innerText = newValue.toString()
        }
        if(ComputerChoose === "Rock")
        {
             let newValue = parseInt(document.getElementById('countDraws').innerText);
             newValue += 1;
             document.getElementById('countDraws').innerText = newValue.toString()
        }                                                                  
    }

    function choosingPaper()
    {
        const options = new Array("Rock", "Paper", "Sccisors");
        const RandomizeOption = Math.floor(Math.random() * options.length);
        let PlayerChoosen = "Paper";
        let ComputerChoose = options[RandomizeOption];
        document.getElementById('gameCurrentStatus_Text').innerText = "You choose "+PlayerChoosen+" and"
                                                                     +" the computer choose "+ComputerChoose+"";
        if(ComputerChoose === "Paper")
        {
             let newValue = parseInt(document.getElementById('countDraws').innerText);
             newValue += 1;
             document.getElementById('countDraws').innerText = newValue.toString()
        }
        if(ComputerChoose === "Sccisors")
        {
             let newValue = parseInt(document.getElementById('countLosses').innerText);
             newValue += 1;
             document.getElementById('countLosses').innerText = newValue.toString()
        }
        if(ComputerChoose === "Rock")
        {
             let newValue = parseInt(document.getElementById('countWins').innerText);
             newValue += 1;
             document.getElementById('countWins').innerText = newValue.toString()
        }                                                                                              
    }

    function choosingSccisors()
    {
        const options = new Array("Rock", "Paper", "Sccisors");
        const RandomizeOption = Math.floor(Math.random() * options.length);
        let PlayerChoosen = "Sccisors";
        let ComputerChoose = options[RandomizeOption];
        document.getElementById('gameCurrentStatus_Text').innerText = "You choose "+PlayerChoosen+" and"
                                                                     +" the computer choose "+ComputerChoose+"";
        if(ComputerChoose === "Paper")
        {
             let newValue = parseInt(document.getElementById('countWins').innerText);
             newValue += 1;
             document.getElementById('countWins').innerText = newValue.toString()
        }
        if(ComputerChoose === "Sccisors")
        {
             let newValue = parseInt(document.getElementById('countDraws').innerText);
             newValue += 1;
             document.getElementById('countDraws').innerText = newValue.toString()
        }
        if(ComputerChoose === "Rock")
        {
             let newValue = parseInt(document.getElementById('countLosses').innerText);
             newValue += 1;
             document.getElementById('countLosses').innerText = newValue.toString()
        }                                                                 
    }
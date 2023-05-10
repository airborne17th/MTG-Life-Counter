let player;
let Player1Counter = 40;
let Player2Counter = 40;
let Player3Counter = 40;
let Player4Counter = 40;
let Player1Infect = 0;
let Player2Infect = 0;
let Player3Infect = 0;
let Player4Infect = 0;
let P1Initial = 40;
let P2Initial = 40;
let P3Initial = 40;
let P4Initial = 40;
let P1Name = "Player 1";
let P2Name = "Player 2";
let P3Name = "Player 3";
let P4Name = "Player 4";
let P1Active = false;
let P2Active = false;
let P3Active = false;
let P4Active = false;
let mode = 1;


function initializeSetup() {
    selectPlayerCount();
    if(document.getElementById('standard').checked){
      P1Initial = 20;
      P2Initial = 20;
      P3Initial = 20;
      P4Initial = 20;
    }
    if(document.getElementById('commander').checked){
      P1Initial = 40;
      P2Initial = 40;
      P3Initial = 40;
      P4Initial = 40;
    }
    Player1Counter = P1Initial;
    Player2Counter = P2Initial;
    Player3Counter = P3Initial;
    Player4Counter = P4Initial;
    Player1Infect = 0;
    Player2Infect = 0;
    Player3Infect = 0;
    Player4Infect = 0;
    P1Name = document.getElementById("p1name").value;
    P2Name = document.getElementById("p2name").value;
    P3Name = document.getElementById("p3name").value;
    P4Name = document.getElementById("p4name").value;
    document.getElementById("playerForm").hidden = true;
    updateSetup();
}

function updateSetup() {
    if(document.getElementById('standard').checked){
        P1Initial = 20;
      P2Initial = 20;
      P3Initial = 20;
      P4Initial = 20;
    }
    if(document.getElementById('commander').checked){
      P1Initial = 40;
      P2Initial = 40;
      P3Initial = 40;
      P4Initial = 40;
    }
    document.getElementById("Player1Name").innerHTML = P1Name;
    document.getElementById("Player2Name").innerHTML = P2Name;
    document.getElementById("Player3Name").innerHTML = P3Name;
    document.getElementById("Player4Name").innerHTML = P4Name;

    document.getElementById("Player1Life").hidden = P1Active;
    document.getElementById("Player2Life").hidden = P2Active;
    document.getElementById("Player3Life").hidden = P3Active;
    document.getElementById("Player4Life").hidden = P4Active;

    document.getElementById('Player1LifeCount').innerHTML = P1Initial;
    document.getElementById('Player2LifeCount').innerHTML = P2Initial;
    document.getElementById('Player3LifeCount').innerHTML = P3Initial;
    document.getElementById('Player4LifeCount').innerHTML = P4Initial;

    document.getElementById('Player1InfectCount').innerHTML = 0;
    document.getElementById('Player2InfectCount').innerHTML = 0;
    document.getElementById('Player3InfectCount').innerHTML = 0;
    document.getElementById('Player4InfectCount').innerHTML = 0;
}

function selectPlayerCount() {
    let playerCount = document.getElementById("pCount").value;
    playerCount = parseInt(playerCount);
    console.log(playerCount, typeof(playerCount));
    switch (playerCount) {
        case 1:
            document.getElementById("p1name").disabled = false;
            document.getElementById("p2name").disabled = true;
            document.getElementById("p3name").disabled = true;
            document.getElementById("p4name").disabled = true;
            P1Active = false;
            P2Active = true;
            P3Active = true;
            P4Active = true;
            break;
        case 2:
            document.getElementById("p1name").disabled = false;
            document.getElementById("p2name").disabled = false;
            document.getElementById("p3name").disabled = true;
            document.getElementById("p4name").disabled = true;
            P1Active = false;
            P2Active = false;
            P3Active = true;
            P4Active = true;
            break;
        case 3:
            document.getElementById("p1name").disabled = false;
            document.getElementById("p2name").disabled = false;
            document.getElementById("p3name").disabled = false;
            document.getElementById("p4name").disabled = true;
            P1Active = false;
            P2Active = false;
            P3Active = false;
            P4Active = true;
            break;
        case 4:
            document.getElementById("p1name").disabled = false;
            document.getElementById("p2name").disabled = false;
            document.getElementById("p3name").disabled = false;
            document.getElementById("p4name").disabled = false;
            P1Active = false;
            P2Active = false;
            P3Active = false;
            P4Active = false;
            break;
    }
}

function randomBackground() {
    let random = Math.floor(Math.random() * 8);
    switch (random) {
        case 0:
            document.getElementById("bg").src = "./img/bg/angel.jpg";
            break;
        case 1:
            document.getElementById("bg").src = "./img/bg/chandra.jpg";
            break;
        case 2:
            document.getElementById("bg").src = "./img/bg/dragon.jpg";
            break;
        case 3:
            document.getElementById("bg").src = "./img/bg/eldrazi.jpg";
            break;
        case 4:
            document.getElementById("bg").src = "./img/bg/hydra.jpg";
            break;
        case 5:
            document.getElementById("bg").src = "./img/bg/jodah.jpg";
            break;
        case 6:
            document.getElementById("bg").src = "./img/bg/rainbow.jpg";
            break;
        case 7:
            document.getElementById("bg").src = "./img/bg/wings.jpg";
            break;
    }
}

function PlayerLifeIncrease(player) {
    switch (player) {
        case 0:
            Player1Counter++;
            document.getElementById('Player1LifeCount').innerHTML = Player1Counter;
            break;
        case 1:
            Player2Counter++;
            document.getElementById('Player2LifeCount').innerHTML = Player2Counter;
            break;
        case 2:
            Player3Counter++;
            document.getElementById('Player3LifeCount').innerHTML = Player3Counter;
            break;
        case 3:
            Player4Counter++;
            document.getElementById('Player4LifeCount').innerHTML = Player4Counter;
            break;
    }
}

function PlayerLifeDecrease(player) {
    switch (player) {
        case 0:
            Player1Counter--;
            document.getElementById('Player1LifeCount').innerHTML = Player1Counter;
            break;
        case 1:
            Player2Counter--;
            document.getElementById('Player2LifeCount').innerHTML = Player2Counter;
            break;
        case 2:
            Player3Counter--;
            document.getElementById('Player3LifeCount').innerHTML = Player3Counter;
            break;
        case 3:
            Player4Counter--;
            document.getElementById('Player4LifeCount').innerHTML = Player4Counter;
            break;
    }
}

function PlayerInfectIncrease(player) {
    switch (player) {
        case 0:
            Player1Infect++;
            document.getElementById('Player1InfectCount').innerHTML = Player1Infect;
            break;
        case 1:
            Player2Infect++;
            document.getElementById('Player2InfectCount').innerHTML = Player2Infect;
            break;
        case 2:
            Player3Infect++;
            document.getElementById('Player3InfectCount').innerHTML = Player3Infect;
            break;
        case 3:
            Player4Infect++;
            document.getElementById('Player4InfectCount').innerHTML = Player4Infect;
            break;
    }
}

function PlayerInfectDecrease(player) {
    switch (player) {
        case 0:
            Player1Infect--;
            document.getElementById('Player1InfectCount').innerHTML = Player1Infect;
            break;
        case 1:
            Player2Infect--;
            document.getElementById('Player2InfectCount').innerHTML = Player2Infect;
            break;
        case 2:
            Player3Infect--;
            document.getElementById('Player3InfectCount').innerHTML = Player3Infect;
            break;
        case 3:
            Player4Infect--;
            document.getElementById('Player4InfectCount').innerHTML = Player4Infect;
            break;
    }
}

function PlayerConcede(player) {
    if (confirm("Are you sure?")) {
        switch (player) {
            case 0:
                Player1Counter = 0;
                document.getElementById('Player1LifeCount').innerHTML = Player1Counter;
                break;
            case 1:
                Player2Counter = 0;
                document.getElementById('Player2LifeCount').innerHTML = Player2Counter;
                break;
            case 2:
                Player3Counter = 0;
                document.getElementById('Player3LifeCount').innerHTML = Player3Counter;
                break;
            case 3:
                Player4Counter = 0;
                document.getElementById('Player4LifeCount').innerHTML = Player4Counter;
                break;
        }
    }
}

function Reset() {
    // Reset life totals to initialized values
    document.getElementById('Player1LifeCount').innerHTML = P1Initial;
    document.getElementById('Player2LifeCount').innerHTML = P2Initial;
    document.getElementById('Player3LifeCount').innerHTML = P3Initial;
    document.getElementById('Player4LifeCount').innerHTML = P4Initial;
    // Set infect to 0 
    document.getElementById('Player1InfectCount').innerHTML = 0;
    document.getElementById('Player2InfectCount').innerHTML = 0;
    document.getElementById('Player3InfectCount').innerHTML = 0;
    document.getElementById('Player4InfectCount').innerHTML = 0;

    P1Active = false;
    P2Active = false;
    P3Active = false;
    P4Active = false;
    document.getElementById("Player1Life").hidden = P1Active;
    document.getElementById("Player2Life").hidden = P2Active;
    document.getElementById("Player3Life").hidden = P3Active;
    document.getElementById("Player4Life").hidden = P3Active;

    document.getElementById("playerForm").hidden = false;
    document.getElementById("playerForm").focus();
}

function prepareOnClicks() {
    document.getElementById('Player1LifeUp').onclick = function() {
        PlayerLifeIncrease(0);
    };
    document.getElementById('Player1LifeDown').onclick = function() {
        PlayerLifeDecrease(0);
    };
    document.getElementById('Player1InfectUp').onclick = function() {
        PlayerInfectIncrease(0);
    };
    document.getElementById('Player1InfectDown').onclick = function() {
        PlayerInfectDecrease(0);
    };
    document.getElementById('Player1Concede').onclick = function() {
        PlayerConcede(0);
    };

    document.getElementById('Player2LifeUp').onclick = function() {
        PlayerLifeIncrease(1);
    };
    document.getElementById('Player2LifeDown').onclick = function() {
        PlayerLifeDecrease(1);
    };
    document.getElementById('Player2InfectUp').onclick = function() {
        PlayerInfectIncrease(1);
    };
    document.getElementById('Player2Concede').onclick = function() {
        PlayerConcede(1);
    };

    document.getElementById('Player3LifeUp').onclick = function() {
        PlayerLifeIncrease(2);
    };
    document.getElementById('Player3LifeDown').onclick = function() {
        PlayerLifeDecrease(2);
    };
    document.getElementById('Player3InfectUp').onclick = function() {
        PlayerInfectIncrease(2);
    };
    document.getElementById('Player3Concede').onclick = function() {
        PlayerConcede(2);
    };

    document.getElementById('Player4LifeUp').onclick = function() {
        PlayerLifeIncrease(3);
    };
    document.getElementById('Player4LifeDown').onclick = function() {
        PlayerLifeDecrease(3);
    };
    document.getElementById('Player4InfectUp').onclick = function() {
        PlayerInfectIncrease(3);
    };
    document.getElementById('Player4Concede').onclick = function() {
        PlayerConcede(3);
    };

    document.getElementById('reset').onclick = function() {
        Reset();
    };

    document.getElementById('background').onclick = function() {
        randomBackground();
    };
}

window.onload = function() {
    prepareOnClicks();
    document.getElementById('Player1LifeCount').innerHTML = P1Initial;
    document.getElementById('Player2LifeCount').innerHTML = P2Initial;
    document.getElementById('Player3LifeCount').innerHTML = P3Initial;
    document.getElementById('Player4LifeCount').innerHTML = P4Initial;

    document.getElementById('Player1InfectCount').innerHTML = 0;
    document.getElementById('Player2InfectCount').innerHTML = 0;
    document.getElementById('Player3InfectCount').innerHTML = 0;
    document.getElementById('Player4InfectCount').innerHTML = 0;

    document.getElementById('Player1Name').innerHTML = P1Name;
    document.getElementById('Player2Name').innerHTML = P2Name;
    document.getElementById('Player3Name').innerHTML = P3Name;
    document.getElementById('Player4Name').innerHTML = P4Name;
};
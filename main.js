const prompt = require('prompt-sync')();

let attackOne = {
    name: "💥 Frappe Rapide",
    power: -10,
    numbPrecision: 0,
}

let attackTwo = {
    name: "🧪 Soin léger",
    power: +15,
    numbPrecision: 0,
}

let attackThree = {
    name: "🤜 Coup Puissant",
    power: -20,
    numbPrecision: 0,
}

let attackFour = {
    name: "☢️  Frappe dévastatrice",
    power: -30,
    numbPrecision: 0,
}

let player = {
    name: "\x1b[31mGuerrier du Feu\x1b[0m",
    power: 100,
    atks: [attackOne, attackTwo, attackThree, attackFour],
    showAttacks: function () {
        for (let i = 0; i < this.atks.length; i++) {
            console.log(this.atks[i].name);
        }
    }
}

let bot = {
    name: "\x1b[32mSombre Lutin\x1b[0m",
    power: 100,
    atks: [attackOne, attackTwo, attackThree, attackFour],
}



console.log("Voici un jeu de combat entre le \x1b[31mGuerrier du Feu\x1b[0m et le \x1b[32mSombre Lutin\x1b[0m. \n\x1b[4mTu incarneras le \x1b[31mGuerrier du Feu\x1b[0m et il faudra choisir entre quatre attaques.\n");
while (player.power > 0 && bot.power > 0) {
    // Tour du guerrier du feu
    console.log("\x1b[1m\x1b[31mA ton tour\x1b[0m, choisis une attaque parmis ces 4 (entre 1, 2, 3 ou 4):");
    player.showAttacks();
    let choice = Number(prompt());
    while (choice > 4 || choice < 0 || isNaN(choice)) {
        choice = Number(prompt("Ce n'est pas une attaque, entre un chiffe entre 1 et 4"));
    }
    console.clear()
    // attaque 1 du player
    if (choice == 1) {
        let random = getRandom(0, 1);
        if (random == player.atks[choice - 1].numbPrecision) {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}`);
            bot.power += player.atks[choice - 1].power;
            if (bot.power < 0) {
                bot.power = 0;
            }
            console.log(`Tu ôte ${-(player.atks[choice - 1].power)} PV à ${bot.name}\n`);
        }
        else {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    // attaque 2 du player
    else if (choice == 2) {
        let random = getRandom(0, 2);
        if (random == player.atks[choice - 1].numbPrecision) {
            console.log(`Tu restaure ta vie avec ${player.atks[choice - 1].name}`);
            player.power += player.atks[choice - 1].power;
            if (player.power > 100) {
                player.power = 100;
            }
            console.log(`Tu ajoute ${player.atks[choice - 1].power} à tes PV\n`);
        }
        else {
            console.log(`Tu utilise ${player.atks[choice - 1].name}\nmais celui-ci n'a pas fonctionné\n`);
        }
    }
    // attaque 3 du player
    else if (choice == 3) {
        let random = getRandom(0, 2);
        if (random == player.atks[choice - 1].numbPrecision) {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}`);
            bot.power += player.atks[choice - 1].power;
            if (bot.power < 0) {
                bot.power = 0;
            }
            console.log(`Tu ôte ${-(player.atks[choice - 1].power)} PV à ${bot.name}\n`);
        }
        else {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    // attaque 4 du player
    else if (choice == 4) {
        let random = getRandom(0, 3);
        if (random == player.atks[choice - 1].numbPrecision) {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}`);
            bot.power += player.atks[choice - 1].power;
            if (bot.power < 0) {
                bot.power = 0;
            }
            console.log(`Tu ôte ${-(player.atks[choice - 1].power)} PV à ${bot.name}\n`);
        }
        else {
            console.log(`Tu utilise l'attaque ${player.atks[choice - 1].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    if (bot.power == 0) {
        console.log(`Score  : ${player.name} : ${player.power} PV   ---   ${bot.name} : ${bot.power} PV`);
        break;
    }
    // tour du sombre lutin
    let botChoice = getRandom(0, 3);
    // attaque 1 du bot
    if (botChoice == 0) {
        let random = getRandom(0, 1);
        if (random == bot.atks[botChoice].numbPrecision) {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}`);
            player.power += bot.atks[botChoice].power;
            if (player.power < 0) {
                player.power = 0;
            }
            console.log(`Il t'enleve ${-(bot.atks[botChoice].power)} PV\n`);
        }
        else {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    // attaque 2 du bot
    else if (botChoice == 1) {
        let random = getRandom(0, 2);
        if (random == bot.atks[botChoice].numbPrecision) {
            console.log(`Le ${bot.name} restaure sa vie avec ${bot.atks[botChoice].name}`);
            bot.power += bot.atks[botChoice].power;
            if (bot.power > 100) {
                bot.power = 100;
            }
            console.log(`Le ${bot.name} ajoute ${bot.atks[botChoice].power} à ses PV \n`);
        }
        else {
            console.log(`Le ${bot.name} utilise ${bot.atks[botChoice].name}\nmais celui-ci n'a pas fonctionné\n`);
        }
    }
    // attaque 3 du bot
    else if (botChoice == 2) {
        let random = getRandom(0, 2);
        if (random == bot.atks[botChoice].numbPrecision) {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}`);
            player.power += bot.atks[botChoice].power;
            if (player.power < 0) {
                player.power = 0;
            }
            console.log(`Il t'enleve ${-(bot.atks[botChoice].power)} PV\n`);
        }
        else {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    // attaque 4 du bot
    else if (botChoice == 3) {
        let random = getRandom(0, 3);
        if (random == bot.atks[botChoice].numbPrecision) {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}`);
            player.power += bot.atks[botChoice].power;
            if (player.power < 0) {
                player.power = 0;
            }
            console.log(`Il t'enleve ${-(bot.atks[botChoice].power)} PV\n`);
        }
        else {
            console.log(`Le ${bot.name} utilise l'attaque ${bot.atks[botChoice].name}\nmais celle-ci n'a pas fonctionnée\n`);
        }
    }
    console.log(`Score  : ${player.name} : ${player.power} PV   ---   ${bot.name} : ${bot.power} PV\n`);
}

if (player.power == 0) {
    console.log(`\x1b[1mGAME OVER !!! \nle ${bot.name} a gagné !\x1b[0m`);
}
else {
    console.log(`\x1b[1mTu as gagné contre le ${bot.name}!!!\x1b[0m`);
}




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

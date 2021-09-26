var leagueChamps = ['Aatrox','Ahri','Akali','Akshan','Alistar','Amumu','Anivia','Annie','Aphelios','Ashe','AurelionSol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','Chogath','Corki','Darius','Diana','DrMundo','Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas','Graves','Gwen','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','JarvanIV','Jax','Jayce','Jhin','Jinx','Kaisa','Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kayn','Kennen','Khazix','Kindred','Kled','KogMaw','Leblanc','LeeSin','Leona','Lillia','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','MasterYi','MissFortune','Mordekaiser','Morgana','Nami','Nasus','Nautilus','Neeko','Nidalee','Nocturne','Nunu','Olaf','Orianna','Ornn','Pantheon','Poppy','Pyke','Qiyana','Quinn','Rakan','Rammus','RekSai','Rell','Renekton','Rengar','Riven','Rumble','Ryze','Samira','Sejuani','Senna','Seraphine','Sett','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas','Syndra','TahmKench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','TwistedFate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar','Velkoz','Vi','Viego','Viktor','Vladimir','Volibear','Warwick','MonkeyKing','Xayah','Xerath','XinZhao','Yasuo','Yone','Yorick','Yuumi','Zac','Zed','Ziggs','Zilean','Zoe','Zyra','Vex']
var playedChampions = JSON.parse(localStorage.getItem("played champ"));
var championsLeft = [];


populateChampions();
deleteChampions();
determineChampionsLeft();

function deleteChampions(){
    console.log(playedChampions)
    if (playedChampions !== null){
        for (let i = 0; i < playedChampions.length; i++) {
            // $('#champ').children('img').eq(playedChampions[i]).remove() 
            $('img').remove(`#${playedChampions[i]}`)
        }
    }
}

function populateChampions(){

    for (let i = 0; i < leagueChamps.length; i++) {
        // $('#champ').append(`<div id='${i}'/>`)
        $(`#champ`).append(`<img id ='${i}' style="margin: 10px;" src="http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${leagueChamps[i]}.png">`)
        
    }
}

function determineChampionsLeft(){


    for (let i = 0; i < playedChampions.length; i++) {
        console.log(playedChampions.length)
        championsLeft.push(leagueChamps[playedChampions[i]])
        console.log(championsLeft)
        
        
    }
    leagueChamps = leagueChamps.filter(item => !championsLeft.includes(item))
    console.log(leagueChamps)
}



$('#champ').on('click','img',function(){
    console.log($(this).attr('id'))
    playedChamp=$(this).attr('id')
    // pickedPokemon = $(this).attr("cardNum");
    playedChampions.push(playedChamp)
    
    localStorage.setItem('played champ', JSON.stringify(playedChampions));
    // $('.selectedIMG').removeClass('selectedIMG');
    // $(this).addClass('selectedIMG');
    location.reload(true);
  })

$('#clearChamps').click(function(){
    console.log("click me")
    playedChampions = [];
    localStorage.setItem('played champ', JSON.stringify(playedChampions));
    location.reload(true);
})

$('#undo').click(function(){
    playedChampions.pop()
    localStorage.setItem('played champ', JSON.stringify(playedChampions));
    location.reload(true);
})

$('#random').click(function(){
    randomNum = Math.floor(Math.random()*leagueChamps.length);
    $(`#randomChamp`).append(`<img style="margin: 10px;" src="http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${leagueChamps[randomNum]}.png">`)
})
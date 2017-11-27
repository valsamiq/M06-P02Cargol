cargolList = [
    {name:"Osama Vin Cargolen",points:0,speed:10,dist:0},
    {name:"Mao Tse Babosung",points:0,speed:10,dist:0},
    {name:"Cargolf Hitgol",points:0,speed:10,dist:0},
    {name:"Cargolito Mussolini",points:0,speed:10,dist:0},
    {name:"Sadam Cargolesim",points:0,speed:10,dist:0},
    {name:"Yoseph Closquelin",points:0,speed:10,dist:0}
];
boostCargol=[];
ArrayBoost = [];

var newRace=document.getElementById("newRace");
var buttonNRace=document.getElementById("buttonNRace");

var arrayRank = document.getElementById("rankCargol");
//De moment començarem amb aquests:

for(var i=0;i<rankCargol.length();i++){
    rankCargol.innerHTML+=
            <div class="col-md-6 col-sm-6 bg-warning" id="rankCargol">
          <span>${i+1} </span> 
          <span class="text-primary">${cargolList[i].name}</span>
          <span class="text-primary">points:${cargolList[i].points} Velocidad:${cargolList[i].velocitatMaxSprint}</span>
    </div>`
}
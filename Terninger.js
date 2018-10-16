function KastTerning(){

    var tal;
    tal = Math.floor((Math.random()*6)+1);
    
    console.log("Terning er kastet, det blev "+ tal+"");
    var terning = document.getElementById("ree");
    terning.innerHTML = tal;
  }
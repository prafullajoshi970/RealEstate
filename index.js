function container(value){
    if(value=="flat"||value=="below-50L"){
        document.getElementById("img1").style.display="block";
        document.getElementById("img2","").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="none";
       
    }
    else if(value=="flat"|| value=="above-50L"){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="block";
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="none";
    }
       
   
    if(value=="bunglow"||value=="below-50L"){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="block";
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="none";
    }
   else if(value=="bunglow"||value=="above-50L"){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="block";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="block";
    }
    if(value=="house"||value=="below-50L"){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="block";
        document.getElementById("img3").style.display="block";
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="none";
    }
   else if(value=="house"||value=="above-50L"){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="block";
        document.getElementById("img8").style.display="none";
    }
}

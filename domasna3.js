const tabla=document.getElementById("tabla");
const obidi=document.getElementById("obidi");
const poraka=document.getElementById("poraka");
let prvakarta=null;
let vtorakarta=null;
let tabla_v=false;
let brobidi=0;
let parovi=0;
const znaci =["Unknown.png",
    "semicolon.png",
    "exclamation_mark.png",
    "period.png",
    "comma.png",
    "colon.png"
];
let karti=[...znaci,...znaci];
meshaj(karti);
karti.forEach(znak => {
    const karta= document.createElement("div");
    karta.classList.add("karta");
    const img= document.createElement("img");
    img.src=`hw3_images/${znak}`;
    img.alt=znak;
    img.style.display="none";
    img.style.width="100px";
    img.style.height="100px";
    karta.appendChild(img);
    karta.addEventListener("click", svrtikarta);
    tabla.appendChild(karta);
});
function svrtikarta(){
    if(tabla_v || this === prvakarta){
        return;
    }
    const img=this.querySelector("img");
    img.style.display="block";
    if(!prvakarta){
        prvakarta=this;
        return;
    } else{
        vtorakarta=this;
        tabla_v=true;
        obidi.textContent = `Обиди: ${++brobidi}`;
        proverkazapar();
    }
}
function proverkazapar(){
    const prvznak=prvakarta.querySelector("img");
    const vtorznak=vtorakarta.querySelector("img");
    if (prvznak.src === vtorznak.src){
        prvznak.removeEventListener("click", svrtikarta);
        vtorznak.removeEventListener("click", svrtikarta);
        parovi++;
        if(parovi === znaci.length){
            poraka.textContent=`Честитки. Ги најде сите парови во ${brobidi} обиди`;
        }
        resetirajtabla();
    } else{
        tabla_v=true;
        setTimeout(()=>{
            prvznak.style.display="none";
            vtorznak.style.display="none";
            resetirajtabla();
        },1000);
    }
}
function meshaj(){
    let len=karti.length;
    for(let i=len - 1; i>0; i--){
        const ran=Math.floor(Math.random())*(i+1);
        [znaci[i], znaci[ran]]=[znaci[ran], znaci[i]];
    }
    return znaci;
}
function resetirajtabla(){
    prvakarta=null;
    vtorakarta=null;
    tabla_v=false;
}
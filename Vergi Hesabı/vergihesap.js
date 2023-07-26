let buttonYuzde1=document.getElementById("vergi_1");
let buttonYuzde8=document.getElementById("vergi_8");
let buttonYuzde18=document.getElementById("vergi_18");

let vergiOrani=document.getElementById("vergiorani_id");
let tutar=document.getElementById("tutar_id");

buttonYuzde1.addEventListener("click",function(){
    vergiOrani.value=1;
});

buttonYuzde8.addEventListener("click",function(){
    vergiOrani.value=8;
});

buttonYuzde18.addEventListener("click",function(){
    vergiOrani.value=18;
});

let vergiDahilHesap=document.getElementById("vergidahil_id");
let vergiHariçHesap=document.getElementById("vergihariç_id");

let araToplam=document.getElementById("aratoplam_id");
let vergi=document.getElementById("vergi_id");
let genelToplam=document.getElementById("geneltoplam_id");

vergiDahilHesap.addEventListener("click",function(){
araToplam.innerText=`${tutar.value} ₺`;
vergi.innerText=`${Number((vergiOrani.value)*Number(tutar.value))/100} ₺`;
genelToplam.innerText=`${Number(tutar.value)+Number((tutar.value)*(vergiOrani.value)/100)} ₺`;

});

vergiHariçHesap.addEventListener("click",function(){
araToplam.innerText=`${tutar.value} ₺`;
vergi.innerText='0 ₺';
genelToplam.innerText= `${tutar.value} ₺`

});
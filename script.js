const data={
Tecno:{
"Camon 20":{general:95,red:90,scope2:82,scope4:72,sniper:55,freeLook:80},
"Camon 19":{general:93,red:88,scope2:80,scope4:70,sniper:54,freeLook:78},
"Spark 10":{general:96,red:91,scope2:83,scope4:73,sniper:56,freeLook:82},
"Spark 8":{general:91,red:87,scope2:78,scope4:68,sniper:52,freeLook:76}},
Infinix:{
"Hot 30":{general:96,red:91,scope2:84,scope4:74,sniper:56,freeLook:82},
"Hot 20":{general:94,red:89,scope2:81,scope4:71,sniper:54,freeLook:80},
"Note 12":{general:92,red:88,scope2:80,scope4:70,sniper:53,freeLook:78}},
Samsung:{
"Galaxy A14":{general:91,red:87,scope2:79,scope4:69,sniper:52,freeLook:76},
"Galaxy A24":{general:93,red:89,scope2:81,scope4:71,sniper:54,freeLook:78},
"Galaxy S21":{general:88,red:84,scope2:76,scope4:66,sniper:50,freeLook:74}},
iPhone:{
"iPhone 11":{general:88,red:84,scope2:76,scope4:66,sniper:50,freeLook:74},
"iPhone 13":{general:87,red:83,scope2:75,scope4:65,sniper:49,freeLook:73},
"iPhone 15":{general:86,red:82,scope2:74,scope4:64,sniper:48,freeLook:72}}
};
const brand=document.querySelector("#brand"),model=document.querySelector("#model"),result=document.querySelector("#result");
Object.keys(data).forEach(b=>brand.add(new Option(b,b)));
brand.onchange=()=>{model.innerHTML='<option value="">Select model</option>';model.disabled=!brand.value;if(brand.value)Object.keys(data[brand.value]).forEach(m=>model.add(new Option(m,m)))};
document.querySelector("#generate").onclick=()=>{
if(!brand.value||!model.value){alert("Please select your phone brand and model.");return}
const s=data[brand.value][model.value];
result.classList.remove("hidden");
result.innerHTML=`<h3>${brand.value} ${model.value}</h3><p class="muted">Recommended starting profile • DPI changes not required</p><div class="stats">${[
["General",s.general],["Red Dot",s.red],["2x Scope",s.scope2],["4x Scope",s.scope4],["Sniper Scope",s.sniper],["Free Look",s.freeLook]
].map(x=>`<div class="stat"><small>${x[0]}</small><b>${x[1]}</b></div>`).join("")}</div>`;
};
document.querySelector("#vipBtn").onclick=()=>alert("VIP access is ready for payment-gateway integration. For safety, connect a legitimate payment processor rather than publishing a personal bank account number.");


function calcVehicle(v,electricity,km){
const charge=v.battery*electricity*1.10;
const costKm=charge/v.range;
return {costKm:costKm,monthly:costKm*km};
}

function calculate(){
const electricity=parseFloat(document.getElementById('electricity').value);
const km=parseFloat(document.getElementById('monthlyKm').value);

let html='<table><tr><th>Vehículo</th><th>Costo/km</th><th>Costo mensual</th></tr>';

['vehicle1','vehicle2','vehicle3'].forEach(id=>{
const v=vehicles[document.getElementById(id).value];
const r=calcVehicle(v,electricity,km);
html+=`<tr><td>${v.name}</td><td>$${r.costKm.toFixed(4)}</td><td>$${r.monthly.toFixed(2)}</td></tr>`;
});

html+='</table>';
document.getElementById('results').innerHTML=html;
}

function sendWhatsApp(){
const name=document.getElementById('name').value;
const msg=encodeURIComponent('Hola Shanghai Autos. Soy '+name+' y deseo una cotización.');
window.open('https://wa.me/?text='+msg,'_blank');
}


const vehicles=[
{name:'Arcfox T1 Plus',battery:42.3,range:425},
{name:'Audi E5 Sportback',battery:76,range:618},
{name:'Kia EV5',battery:64,range:530}
];
['vehicle1','vehicle2','vehicle3'].forEach(id=>{
const s=document.getElementById(id);
vehicles.forEach((v,i)=>{
const o=document.createElement('option');
o.value=i;o.text=v.name;s.appendChild(o);
});
});

const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=(v,c)=>c=="USD"?"$"+Math.round(v).toLocaleString():"LKR "+Math.round(v).toLocaleString();
/* red-only scenes */
const sc=(k,p)=>{const D=`<defs><linearGradient id="${p}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#150204"/><stop offset=".6" stop-color="#8b0a14"/><stop offset="1" stop-color="#e0101f"/></linearGradient><filter id="${p}b"><feGaussianBlur stdDeviation="30"/></filter></defs><rect width="1600" height="900" fill="url(#${p}g)"/>`;
const sun=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r*1.8}" fill="#ff2a38" opacity=".3" filter="url(#${p}b)"/><circle cx="${x}" cy="${y}" r="${r}" fill="#ff4a57"/>`;
const w=(y,c,o=1)=>`<path d="M0 ${y}Q200 ${y-40} 400 ${y}T800 ${y}T1200 ${y}T1600 ${y}V900H0Z" fill="${c}" opacity="${o}"/>`;
const A=[
sun(1100,460,140)+w(640,"#5a060d",.85)+w(720,"#3a0409")+w(810,"#150204")+`<path d="M330 900Q390 620 300 360" stroke="#0d0102" stroke-width="16" fill="none"/><g fill="#0d0102"><path d="M300 360Q200 290 110 380Q220 330 300 360"/><path d="M300 360Q230 250 130 250Q240 280 300 360"/><path d="M300 360Q330 250 440 240Q350 290 300 360"/><path d="M300 360Q400 300 490 390Q390 340 300 360"/></g>`,
sun(800,380,110)+`<path d="M0 560L250 380 450 520 700 330 950 540 1200 400 1450 520 1600 450V900H0Z" fill="#5a060d" opacity=".9"/><path d="M0 660L300 500 560 640 900 480 1250 650 1600 540V900H0Z" fill="#3a0409"/><ellipse cx="500" cy="650" rx="560" ry="50" fill="#ff8a92" opacity=".2" filter="url(#${p}b)"/><ellipse cx="1150" cy="700" rx="500" ry="45" fill="#ff8a92" opacity=".2" filter="url(#${p}b)"/><path d="M0 780L400 640 800 760 1200 650 1600 770V900H0Z" fill="#150204"/>`,
sun(800,380,200)+`<path d="M0 760H1600V900H0Z" fill="#0d0102"/><path d="M560 760A240 240 0 0 1 1040 760Z" fill="#1c0307"/><rect x="740" y="470" width="120" height="40" fill="#1c0307"/><path d="M770 470L800 290 830 470Z" fill="#1c0307"/><rect x="520" y="740" width="560" height="22" fill="#2a0408"/><rect x="545" y="718" width="510" height="22" fill="#2a0408"/><g fill="#0d0102"><rect x="190" y="560" width="14" height="210"/><circle cx="197" cy="540" r="70"/><rect x="1390" y="580" width="14" height="190"/><circle cx="1397" cy="560" r="64"/></g>`,
sun(800,430,120)+`<path d="M0 620Q300 540 600 600T1200 590 1600 620V640H0Z" fill="#150204"/><rect y="630" width="1600" height="270" fill="#3a0409"/>`+[0,1,2,3,4,5,6].map(i=>`<rect x="${800-(180-i*22)}" y="${650+i*28}" width="${(180-i*22)*2}" height="8" rx="4" fill="#ff4a57" opacity="${.7-i*.08}"/>`).join("")+`<g stroke="#0d0102" stroke-width="5" fill="none"><path d="M300 260q20-25 40 0 20-25 40 0"/><path d="M420 200q16-20 32 0 16-20 32 0"/><path d="M1180 280q20-25 40 0 20-25 40 0"/></g>`,
sun(1200,430,120)+`<rect y="720" width="1600" height="180" fill="#3a0409"/>`+w(740,"#150204",.9)+`<path d="M700 720L730 340 870 340 900 720Z" fill="#1c0307"/><rect x="715" y="300" width="170" height="40" fill="#2a0408"/><path d="M735 300L800 210 865 300Z" fill="#150204"/><circle cx="800" cy="320" r="70" fill="#ffd0d4" opacity=".4" filter="url(#${p}b)"/><rect y="650" width="1600" height="80" fill="#2a0408"/><path d="M0 650h1600" stroke="#0d0102" stroke-width="8" stroke-dasharray="30 30"/>`];
return `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">${D}${A[k]}</svg>`};
/* data */
const H=[
{n:"Araliya Beach Resort",l:"Unawatuna",t:"Waves",d:"2 hrs from Colombo",s:0,p:[38000,125]},
{n:"Araliya Green City",l:"Nuwara Eliya",t:"Mist",d:"4.5 hrs from Colombo",s:1,p:[32000,105]},
{n:"Araliya Green Hills",l:"Nuwara Eliya",t:"Mist",d:"4.5 hrs from Colombo",s:1,p:[30000,98]},
{n:"Araliya Red",l:"Nuwara Eliya",t:"Mist",d:"4.5 hrs from Colombo",s:4,p:[28000,92]},
{n:"Hotel Sudu Araliya",l:"Polonnaruwa",t:"Culture",d:"4.25 hrs from Colombo",s:2,p:[24000,80]}];
const SL=[
["Unawatuna","Toes in the sand, <em>heart on fire</em>","Golden sunsets, turquoise surf and the warmest welcome on the south coast.",0],
["Nuwara Eliya","Mist, tea and <em>crimson</em> skies","Cool hill-country mornings and fireside evenings among the tea estates.",1],
["Polonnaruwa","Walk through <em>ancient</em> kingdoms","Stupas, lakes and wild elephants at the heart of the Cultural Triangle.",2],
["Parakrama Samudraya","Sunsets that <em>stop time</em>","Golden hour over a legendary reservoir, from your own private balcony.",3],
["Galle Fort","History by the <em>sea</em>","Colonial ramparts, lighthouse walks and slow evenings on the ocean wall.",4]];
const R=[["Deluxe Room",1],["Family Suite",1.4],["Spa Suite",1.7]];
/* loader */
$("#wd").innerHTML="ARALIYA".split("").map((c,i)=>`<span style="animation-delay:${1.2+i*.1}s">${c}</span>`).join("");
let pc=0;const lv=setInterval(()=>{pc=Math.min(100,pc+Math.random()*4+1.2);$("#pf").style.width=pc+"%";$("#pp").textContent=Math.floor(pc)+"%";if(pc>=100){clearInterval(lv);setTimeout(()=>{$("#ld").classList.add("open");document.body.classList.remove("lock");go(0);setTimeout(()=>$("#ld").remove(),1500)},400)}},70);
/* slider */
const sl=$("#sl");let cur=-1,tm,touch=0;
SL.forEach((s,i)=>{sl.insertAdjacentHTML("afterbegin",`<div class="slide" data-i="${i}">${sc(s[3],"s"+i)}<div class="cap"><div class="wrap"><div><span class="eyebrow">${s[0]}</span><h1>${s[1]}</h1><p>${s[2]}</p><a class="btn" href="#book">Book your stay</a> <a class="btn ghost" href="#hotels">Explore hotels</a></div></div></div></div>`)});
$("#dots").innerHTML=SL.map((_,i)=>`<button aria-label="Slide ${i+1}"><i></i></button>`).join("");
const sls=[...sl.querySelectorAll(".slide")].sort((a,b)=>a.dataset.i-b.dataset.i),dts=[...document.querySelectorAll(".dots button")];
function go(n){n=(n+SL.length)%SL.length;clearTimeout(tm);sls.forEach((s,i)=>s.classList.toggle("on",i==n));dts.forEach((d,i)=>{d.classList.remove("on","done");void d.offsetWidth;if(i<n)d.classList.add("done");if(i==n)d.classList.add("on")});cur=n;tm=setTimeout(()=>go(n+1),6000)}
dts.forEach((d,i)=>d.onclick=()=>go(i));$("#nx").onclick=()=>go(cur+1);$("#pv").onclick=()=>go(cur-1);
sl.addEventListener("touchstart",e=>touch=e.touches[0].clientX,{passive:true});sl.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-touch;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});
$("#petals").innerHTML=Array.from({length:14},()=>`<i class="petal" style="left:${Math.random()*100}%;animation-duration:${9+Math.random()*10}s;animation-delay:-${Math.random()*12}s"></i>`).join("");
/* content */
$("#fh").innerHTML=H.map((h,i)=>`<option value="${i}">${h.n}</option>`).join("");
$("#hg").innerHTML=H.map((h,i)=>`<div class="hotel rv"><div class="art">${sc(h.s,"h"+i)}<span class="tag">${h.t}</span></div><div class="hb"><h3>${h.n}</h3><small>${h.l} · ${h.d}</small><div class="price"><div><small>from</small><br><b>LKR ${h.p[0].toLocaleString()}</b></div><button class="btn sm" data-h="${i}">Book</button></div></div></div>`).join("");
$("#eg").innerHTML=[["Galle Fort",4],["Horton Plains",1],["Turtle Hatchery",0],["Minneriya Safari",3],["Surfing Unawatuna",0]].map((e,i)=>`<div class="ex rv">${sc(e[1],"e"+i)}<span>${e[0]}</span></div>`).join("");
const iso=d=>d.toISOString().slice(0,10),t0=new Date();
$("#fi").value=iso(t0);$("#fo").value=iso(new Date(Date.now()+864e5));$("#fi").min=iso(t0);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");const b=x.target.querySelector("[data-n]");if(b&&!b.done){b.done=1;const n=+b.dataset.n,s=b.dataset.s||"";let k=0;const iv=setInterval(()=>{k+=Math.ceil(n/40);if(k>=n){k=n;clearInterval(iv)}b.textContent=k+s},35)}io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
/* data layer: bookings are kept in this browser (localStorage) */
let LOCAL=[];
try{LOCAL=JSON.parse(localStorage.getItem("araliya_bookings")||"[]")}catch(e){}
const persist=()=>{try{localStorage.setItem("araliya_bookings",JSON.stringify(LOCAL))}catch(e){}};
/* booking flow */
let S={};
const openM=()=>$("#m").classList.add("open"),closeM=()=>$("#m").classList.remove("open");
$("#mx").onclick=closeM;$("#m").onclick=e=>{if(e.target.id=="m")closeM()};
function start(h){if(h!=null)$("#fh").value=h;S={h:+$("#fh").value,cur:$("#fn").value,i:$("#fi").value,o:$("#fo").value,g:$("#fg").value,r:0};S.nights=Math.max(1,Math.round((new Date(S.o)-new Date(S.i))/864e5));step1();openM()}
$("#bf").onsubmit=e=>{e.preventDefault();start()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-h]");if(b)start(+b.dataset.h);const o=e.target.closest("[data-offer]");if(o){const k=H.findIndex(h=>h.n.includes(o.dataset.offer));start(k<0?0:k)}});
const steps=n=>document.querySelectorAll(".steps i").forEach((x,i)=>x.classList.toggle("on",i<n));
const calc=()=>{const base=H[S.h].p[S.cur=="USD"?1:0]*R[S.r][1]*S.nights;return{base,tax:base*.2,tot:base*1.2}};
const summary=()=>{const c=calc(),h=H[S.h];return `<div class="sum"><b>${h.n}</b><div><span>${h.l}</span><span>${S.g} guest(s)</span></div><div><span>${S.i} → ${S.o}</span><span>${S.nights} night(s)</span></div><div><span>${R[S.r][0]}</span><span>${fmt(c.base,S.cur)}</span></div><div><span>Taxes &amp; service (20%)</span><span>${fmt(c.tax,S.cur)}</span></div><div class="tot"><span>Total</span><span>${fmt(c.tot,S.cur)}</span></div></div>`};
function step1(){steps(1);$("#mb").innerHTML=`<h2 style="font-size:30px;margin-top:0">Choose your room</h2><div class="cols"><div>${R.map((r,i)=>`<div class="room ${i==S.r?"sel":""}" data-r="${i}"><div><b>${r[0]}</b><br><small style="color:var(--mute)">Breakfast included</small></div><b>${fmt(H[S.h].p[S.cur=="USD"?1:0]*r[1],S.cur)}<small>/night</small></b></div>`).join("")}</div><div>${summary()}<button class="btn" id="n1" style="width:100%;margin-top:14px">Continue to payment</button></div></div>`;
document.querySelectorAll(".room").forEach(r=>r.onclick=()=>{S.r=+r.dataset.r;step1()});$("#n1").onclick=step2}
const luhn=n=>{if(n.length<13)return false;let s=0,a=0;for(let i=n.length-1;i>=0;i--){let d=+n[i];if(a){d*=2;if(d>9)d-=9}s+=d;a=!a}return s%10==0};
function step2(){steps(2);$("#mb").innerHTML=`<h2 style="font-size:30px;margin-top:0">Secure payment</h2><div class="cols"><div>
<div class="cc" id="cc"><div><div class="face"><div style="display:flex;justify-content:space-between"><b>Araliya Pay</b><span id="bd">CARD</span></div><div class="num" id="pn">•••• •••• •••• ••••</div><div style="display:flex;justify-content:space-between;font-size:13px"><span id="pm">FULL NAME</span><span id="pe">MM/YY</span></div></div><div class="face back"><div class="stripe"></div><div style="text-align:right;font-family:monospace">CVV <span id="pc">•••</span></div><small>Demo gateway: no real charge</small></div></div></div>
<div class="row2"><div><label>Full name</label><input id="gn" autocomplete="name"></div><div><label>Email</label><input id="ge" type="email"></div></div>
<div class="fld"><label>Card number</label><input id="cn" inputmode="numeric" maxlength="19" placeholder="4242 4242 4242 4242"></div>
<div class="row2"><div><label>Expiry</label><input id="ce" maxlength="5" placeholder="MM/YY"></div><div><label>CVV</label><input id="cv" inputmode="numeric" maxlength="4" placeholder="123"></div></div><div class="err" id="er"></div></div>
<div>${summary()}<button class="btn" id="pay" style="width:100%;margin-top:14px">Pay ${fmt(calc().tot,S.cur)}</button><div class="secure">🔒 Encrypted · simulated gateway · test card 4242 4242 4242 4242</div><button class="btn ghost sm" id="bk" style="margin-top:12px">Back</button></div></div>`;
const g=id=>$("#"+id);
g("cn").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,16);e.target.value=v.replace(/(.{4})/g,"$1 ").trim();g("pn").textContent=(v+"################").slice(0,16).replace(/#/g,"•").replace(/(.{4})/g,"$1 ").trim();g("bd").textContent=/^4/.test(v)?"VISA":/^5[1-5]/.test(v)?"MASTERCARD":"CARD"};
g("ce").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);e.target.value=v;g("pe").textContent=v||"MM/YY"};
g("gn").oninput=e=>g("pm").textContent=e.target.value.toUpperCase()||"FULL NAME";
g("cv").oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"");g("pc").textContent=e.target.value||"•••"};
g("cv").onfocus=()=>g("cc").classList.add("flip");g("cv").onblur=()=>g("cc").classList.remove("flip");
g("bk").onclick=step1;
g("pay").onclick=()=>{const n=g("cn").value.replace(/\s/g,""),[mm,yy]=g("ce").value.split("/").map(Number);let m="";
if(g("gn").value.trim().length<2)m="Enter the guest name.";else if(!/^\S+@\S+\.\S+$/.test(g("ge").value))m="Enter a valid email.";else if(!luhn(n))m="Card number is not valid.";else if(!(mm>=1&&mm<=12)||(2000+yy)*12+mm<t0.getFullYear()*12+t0.getMonth()+1)m="Card expiry is invalid or past.";else if(g("cv").value.length<3)m="Enter the CVV.";
g("er").textContent=m;if(!m){S.name=g("gn").value.trim();S.email=g("ge").value.trim();process()}}}
function process(){steps(3);const ms=["Contacting your bank…","Verifying 3-D Secure…","Confirming your room…"];let k=0;
$("#mb").innerHTML=`<div class="center"><div class="spin"></div><h3 id="pm2">${ms[0]}</h3><p class="sub" style="margin:auto">Please keep this window open.</p></div>`;
const iv=setInterval(()=>{k++;if(k<3)$("#pm2").textContent=ms[k];else{clearInterval(iv);done()}},1100)}
function done(){const ref="ARL-"+Math.random().toString(36).slice(2,8).toUpperCase(),c=calc();
const rec={ref,hotel:H[S.h].n,room:R[S.r][0],from:S.i,to:S.o,guests:+S.g,total:fmt(c.tot,S.cur),name:S.name,at:Date.now()};
LOCAL.push(rec);persist();const saved=" Saved on this device under My bookings.";
$("#mb").innerHTML=`<div class="center"><div class="ok"><svg viewBox="0 0 40 40"><path d="M8 21l8 8 16-17"/></svg></div><h2 style="font-size:32px">Booking confirmed</h2><p class="sub" style="margin:0 auto 18px">Thank you, ${esc(S.name)}. Reference <b style="color:var(--red)">${ref}</b>.${saved}</p><div style="max-width:380px;margin:auto;text-align:left">${summary()}</div><button class="btn" id="dn" style="margin-top:20px">Done</button></div>`;$("#dn").onclick=closeM}
/* my bookings */
$("#mb2").onclick=async()=>{steps(0);$("#mb").innerHTML='<h2 style="font-size:30px;margin-top:0">My bookings</h2><p class="sub">Loading…</p>';openM();let L=LOCAL;
L=[...L].sort((a,b)=>b.at-a.at);$("#mb").innerHTML='<h2 style="font-size:30px;margin-top:0">My bookings</h2>'+(L.length?L.map(b=>`<div class="bk"><div><b>${esc(b.hotel)}</b><br><small style="color:var(--mute)">${esc(b.room)} · ${esc(b.from)} → ${esc(b.to)} · ${esc(b.guests)} guest(s)</small></div><div style="text-align:right"><b style="color:var(--red)">${esc(b.ref)}</b><br>${esc(b.total)}</div></div>`).join(""):'<p class="sub">No bookings yet. Pick a hotel and your reservations will appear here.</p>')}
/* concierge */
$("#cb").onclick=()=>$("#cp").classList.toggle("open");
const reply=q=>{q=q.toLowerCase();
if(/beach|sea|surf|unawatuna|galle/.test(q))return"Araliya Beach Resort in Unawatuna is about 2 hours from Colombo, minutes from Galle Fort and great for surfing.";
if(/hill|cool|tea|nuwara|mist|cold/.test(q))return"In Nuwara Eliya choose Green City, Green Hills or Araliya Red. Pack warm layers, mornings are misty and cool.";
if(/polonnaruwa|culture|ancient|elephant|safari|sudu/.test(q))return"Hotel Sudu Araliya in Polonnaruwa is close to Parakrama Samudraya and Minneriya National Park for elephants.";
if(/price|cost|rate|cheap|offer|discount/.test(q))return"Rates start from about LKR 24,000 a night. Book direct for offers of up to 45% off.";
if(/when|season|weather|month/.test(q))return"December to March suits the south-west and hills. April to September suits the north and east.";
if(/kid|child|family/.test(q))return"Yes, we have family suites with separate rooms. Choose Family Suite when booking.";
return"I can help with hotels, prices, best season and things to do. Try asking about the beach, the hills or Polonnaruwa."};
$("#cf").onsubmit=e=>{e.preventDefault();const q=$("#ci").value.trim();if(!q)return;$("#ci").value="";const add=(t,c)=>{const d=document.createElement("div");d.className=c||"";d.textContent=t;$("#cm").append(d);$("#cm").scrollTop=1e9;return d};
add(q,"me");setTimeout(()=>add(reply(q)),500)};


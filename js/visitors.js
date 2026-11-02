(function(){
  var NS="vortex-quiz-practice-7k3q9x",KEY="unique-visitors",FLAG="quiz.visitor.counted";
  var el=document.getElementById("vcount");
  if(!el)return;
  var counted=false,storage=true;
  try{counted=localStorage.getItem(FLAG)==="1"}catch(e){storage=false}
  var url="https://abacus.jasoncameron.dev/"+(counted||!storage?"get":"hit")+"/"+NS+"/"+KEY;
  fetch(url).then(function(r){
    if(r.status===404)return fetch("https://abacus.jasoncameron.dev/hit/"+NS+"/"+KEY).then(function(x){return x.json()});
    if(!r.ok)throw new Error("bad");
    return r.json();
  }).then(function(d){
    if(!d||typeof d.value!=="number")return;
    if(!counted&&storage){try{localStorage.setItem(FLAG,"1")}catch(e){}}
    el.textContent=d.value.toLocaleString()+" unique visitor"+(d.value===1?"":"s");
    el.hidden=false;
  }).catch(function(){});
})();

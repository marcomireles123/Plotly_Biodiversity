d3.json("samples.json").then(function(data){
    console.log("hello");
});

d3.json("samples.json").then(function(data){
   console.log(data);
});

d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person => person.wfreq);
   console.log(wfreq);
});

d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person =>
 person.wfreq).sort((a,b) => b - a);
   console.log(wfreq);
});
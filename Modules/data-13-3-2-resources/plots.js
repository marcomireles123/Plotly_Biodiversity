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

d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person =>
 person.wfreq).sort((a,b) => b - a);
   filteredWfreq = wfreq.filter(element => element !=
 null);
   console.log(filteredWfreq);
});

researcher1 = {
   name: 'Roza',
   age: 34,
   hobby: 'Hiking'
 };
 console.log(Object.entries(researcher1));

researcher1 = [['name', 'Roza'], ['age', 34], ['hobby', 'Hiking']];
researcher1.forEach(([first, second]) => console.log(first + ": " + second));

 d3.json("samples.json").then(function(data){
   firstPerson = data.metadata[0];
   Object.entries(firstPerson).forEach(([key, value]) =>
     {console.log(key + ': ' + value);});
 });
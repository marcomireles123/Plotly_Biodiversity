var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
var topFiveCities = sortedCities.slice(0,7);
var topFiveCityNames = cityGrowths.map(city => city.City);

// parseInt is used to convert strings into integers
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Create a bar chart with the arrays 

// trace specifies that we will be creating a bar chart and define the x and y axis data
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  
  // data encloses the trace variable in an array to meet Plotly's format requirement
  var data = [trace];
  
  // layout is assigned to an object that specifies the charts title and axis labels
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  
  // Finally Plotly.newPlot() renders the graph
  Plotly.newPlot("bar-plot", data, layout);

console.log(cityGrowths);

// function to initialize the dropdown menu to include all 153 sample names
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

// function that runs on dropdown menu change
function optionChanged(newSample) {
  // console.log(newSample);

  // function called to build the demographic info panel
  buildMetadata(newSample);
  // function called to build the demographic info chart
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    let PANEL = d3.select("#sample-metadata");

    // create panel with demographic data
    PANEL.html("");
    Object.entries(result).forEach(([key,value]) => PANEL.append("h6").text(key.toUpperCase() + ": " + value));
  });
}

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    console.log(result);
  });
};

init();
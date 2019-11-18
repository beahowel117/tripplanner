// module.exports = function(icon, location){
//   const markerDomEl = document.createElement("div");
//   switch(icon){
//     case "activity": // Create a new, detached DIV
//     markerDomEl.style.width = `${location[0]}px`;
//     markerDomEl.style.height = `${location[1]}px`
//     markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//     break;
//     case "hotel": // Create a new, detached DIV
// markerDomEl.style.width = `${location[0]}px`
// markerDomEl.style.height = `${location[1]}px`
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
// break;
//     case "restaurant":// Create a new, detached DIV
// markerDomEl.style.width = `${location[0]}px`
// markerDomEl.style.height = `${location[1]}px`
// markerDomEl.style.backgroundImage = "url( http://i.imgur.com/cqR6pUI.png)";
// break;
//     default: break
//   }

// }
const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};



const buildMarker = function(icon, location) {

  switch(icon){
    case "activity": // Create a new, detached DIV
    mapbox.style.width = `${location[0]}px`;
    mapbox.style.height = `${location[1]}px`
    iconURLs.activities = "http://i.imgur.com/WbMOfMl.png";
break;
    case "hotel": // Create a new, detached DIV
    mapbox.style.width = `${location[0]}px`
    mapbox.style.height = `${location[1]}px`
    iconURLs.hotles = "url(http://i.imgur.com/D9574Cu.png)";
break;
    case "restaurant":// Create a new, detached DIV
    mapbox.style.width = `${location[0]}px`
    mapbox.style.height = `${location[1]}px`
    iconURLs.restaurants = "url( http://i.imgur.com/cqR6pUI.png)";
break;
    default: break
  }
  // Your Code Here
};

module.exports = buildMarker;

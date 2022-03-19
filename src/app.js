/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("title").innerHTML = domain();

  console.log("Hello Rigo from the console!");
};

const domain = () => {
  let newDomain = " ";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".es", ".org"];

  for (let l = 0; l < pronoun.length; l++) {
    for (let f = 0; f < adj.length; f++) {
      for (let g = 0; g < noun.length; g++) {
        for (let j = 0; j < dom.length; j++) {
          newDomain += pronoun[l] + adj[f] + noun[g] + dom[j] + "<br>";
        }
      }
    }
  }
  return newDomain;
};
console.log(domain());

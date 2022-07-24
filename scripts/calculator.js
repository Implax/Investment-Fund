"use strict";
//Getting DOM Elements
const calculateBtn = document.getElementById("calculate");
const resultsBox = document.querySelector(".results");
const form = document.querySelector(".calc-box");
const form1 = document.querySelector("form");

//Values by DOM Elements
const term = document.getElementById("duration-value");
const type = document.getElementById("fund-type");
const amount = document.getElementById("investment-value");

// Event Handler for displaying results
const displayResults = function () {
  //Read Form Values
  const fundType = type.options[type.selectedIndex].text;
  const fundDuration = term.options[term.selectedIndex].text;
  const fundAmount = amount.value;
  const rate = document.querySelector("input[type=radio][name=rate]:checked");
  const fundRate = rate.value;

  console.log(`Fund Type = ${fundType}`);
  console.log(`Fund Amount = ${fundAmount}`);
  console.log(`Fund Rate = ${fundRate}`);
  console.log(`Fund Duration = ${fundDuration}`);

  resultsBox.classList.remove("hidden");
};

calculateBtn.addEventListener("click", displayResults);

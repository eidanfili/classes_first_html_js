var divToHide = document.querySelector(".show");

function showHideDiv() {
  divToHide.classList.add("hide");
  divToHide.classList.remove("show");
}

function getInputFromTextBox() {
  var input = document.getElementById("userInput").value;
  alert(input);
}

function myPromptFunc() {
  var myPrompt = prompt("what is your bill?");
  var tax = myPrompt * 0.07;
  alert(Number(myPrompt) + tax);
}
// myPromptFunc();

let commentVault = [
  "that one is great!",
  "OOOOOO great choice!",
  "You are sure hungry",
];

let specificCommentVault = {
  hamburger: [
    "nice pick! The hamburger is my favorite",
    "ah a classic hambuger",
  ],
  fishnchips: ["oi bruv thats quite a noice pic ye!"],
};

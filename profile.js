let home = document.querySelector("#home");
let about = document.querySelector("#about");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");

homeBtn = () => {
    home.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";
}
aboutBtn = () => {
    home.style.display = "none";
    about.style.display = "block";
    portfolio.style.display = "none";
    contact.style.display = "none";
}
portfolioBtn = () => {
    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "block";
    contact.style.display = "none";
}
 contBtn = () => {
    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "block";
}

 $("#myResume").click(function(){
    $("#resumeCv").show();
    $("#abDetails").hide();
 })
 $("#backBtn").click(function() {
    $("#resumeCv").hide();
    $("#abDetails").show();
 })
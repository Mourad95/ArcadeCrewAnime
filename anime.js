
//declaration des variables
var BienvenueSurArcadeCrew= document.getElementsByClassName("primary-text");
var ArcadeCrew = document.getElementsByClassName("primary-text1");
var navbar = document.getElementsByClassName("col-xs-12 col-sm-10 col-md-10 col-lg-10");

var retroGaming = document.getElementById("retroGaming");
var fondBienvenue = document.getElementById("fondBienvenue");

var nosServices = document.getElementById("nosServices");
var pourVous = document.getElementById("pourVous");

var rapidite = document.getElementById("icon1");
var restezConnecte = document.getElementById("icon2");
var reactivite = document.getElementById("icon3");
var resultats = document.getElementById("icon4");
var communaute = document.getElementById("icon5");
var desQuestions = document.getElementById("icon6");


//animation de l'entête "ArcadeCrew"
TweenMax.from(ArcadeCrew, 2, {ease: Power2.easeOut, x:-700, delay:0.3});
//animation de la nabar
TweenMax.from(navbar , 2, {ease: Power2.easeOut, opacity:0, delay:1});

//animation du titre "Bienvenue sur ArcadeCrew"
TweenMax.from(BienvenueSurArcadeCrew, 2, {ease: Power2.easeOut, y:500});
//animation de "Le RétroGamind à la portée de tous"
TweenMax.from(retroGaming , 2, {ease: Power2.easeOut, y:500, delay:1});

//animation de l'arrière plan de "Bienvenue sur ArcadeCrew"
TweenMax.from(fondBienvenue , 2, {ease: Power2.easeOut, opacity:0, delay:1});

//animation de "Nos Services"
TweenMax.from(nosServices , 3, {ease: Power2.easeOut, y:500, delay:1});
//animation de "pour vous"
TweenMax.from(pourVous , 3, {ease: Power2.easeOut, y:500, delay:1});
//animation des icons de features
TweenMax.from(reactivite, 1, {ease: Power2.easeOut, opacity:0, x:-700, delay:1});
TweenMax.from(restezConnecte, 1, {ease: Power2.easeOut, opacity:0,x:-700, delay:1.5});
TweenMax.from(rapidite, 1, {ease: Power2.easeOut, opacity:0, x:-700, delay:2});
TweenMax.from(desQuestions, 1, {ease: Power2.easeOut, opacity:0, x:-700, delay:2.5});
TweenMax.from(communaute, 1, {ease: Power2.easeOut, opacity:0, x:-700, delay:3});
TweenMax.from(resultats, 1, {ease: Power2.easeOut, opacity:0, x:-700, delay:3.5});
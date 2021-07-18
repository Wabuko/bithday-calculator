function day (cc,yy,mm,dd){
    return (((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7
}
function akanDay () {
    // UI variables
var mm = parseInt(document.querySelector('#month').value);
var dd = parseInt(document.querySelector('#date').value);
var cc = parseInt(document.querySelector('#century').value);
var yy = parseInt(document.querySelector('#year-digits').value);
var gender = document.querySelector('#gender').value;
var result=day (cc,yy,mm,dd);
var males = new Array ("Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");
var females = new Array("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");

var j = getRandom(0, images.length);
var image = images[j];

document.getElementById("bg-img").src = "images/"+image.id+".jpg";

function time(){
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    function showTime(){
        document.getElementById("clocktext").innerHTML = hours + ':' + minutes + '<span id="ampm">'+am_pm+'</span>';
    }
    showTime();
}
setInterval(time, 1000);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

var i = getRandom(0, list.length);

var quote = list[i].quote;

document.getElementById("quoteText").innerHTML = '"' + quote + '"' + '<br><span id="quoteAuthor">-' + list[i].author + '</span>';
document.getElementById("location").innerHTML = image.place;
document.getElementById("photographer").innerHTML = image.owner + ` / Unsplash`
document.getElementById("photographer").href = "https://unsplash.com/photos/"+image.id;
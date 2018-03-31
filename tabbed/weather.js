var query = localStorage.getItem("query");
var hourC = localStorage.getItem("hourc");
var weather;
    if(typeof(query)==='object'){
        $.get("https://ipinfo.io", function (response) {
            localStorage.setItem("query", response.city);
            location.reload();
        }, "jsonp");
    }
query = localStorage.getItem("query");
var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+query+"') and u='c'",
    baseURL = "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
var d = new Date();
var hour = d.getHours();
if(typeof(hourC)==='object'){
    localStorage.setItem("hourd", hour);
    $.ajax({
        url: baseURL,
        async: false,
        dataType: 'json',
        success: function(data) {
            localStorage.setItem("tempc",data.query.results.channel.item.condition.temp);
        }
    });
}
if(Math.abs(hour - localStorage.getItem("hourc"))>=1){
    localStorage.setItem("hourc", hour);
    $.ajax({
        url: baseURL,
        async: false,
        dataType: 'json',
        success: function(data) {
            localStorage.setItem("tempc",data.query.results.channel.item.condition.temp);
        }
    });
}
document.getElementById("temp").innerHTML = localStorage.getItem("tempc")+"°<br><span id='city'>"+query.toUpperCase()+"</span><br><span><a id='yahoo' href='https://weather.yahoo.com' target='_blank'>by YAHOO!</a></span>";

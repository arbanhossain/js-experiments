# This is an example of a custom New Tab for browsers

Created this as I don't like the default style of the Newtabs of the browsers I use, mostly Chrome and Firefox. This can be used as an extension(with a manifest.json file) or you can simply override your default Newtab with the index.html file. This uses photos from [**Unsplash**](https://unsplash.com), Weather data from [**Yahoo!**](https://weather.yahoo.com) and location data from [**ipinfo.io**](https://ipinfo.io).

### Known Issues
- temperature shows **null**
- - This has to do with my algorithm for calling the YAHOO! weather api. Wait 1 hour at most after you see that null°C
- image gets squished if the browser window is resized(or downsized?) under a certain amount
- - this is because the project isn't fully responsive. I need to set some media queries
- some parts of the page overlaps(rarely happens and has to do with responsiveness(?is that the word?) of the page)

I don't know if I'll get time to revisit this and fix these issues. But I'll try.

Demo => https://arbanhossain.github.io/js-experiments/tabbed

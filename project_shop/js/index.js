   window.onload = function(){
        var images = document.getElementById("slider").children;
        var pos = 0;
        var len = images.length;
		setInterval(function(){
            images[pos].style.display = 'none';
            pos = ++pos == len ? 0 : pos;
            images[pos].style.display = 'inline';
        },2000);
    };
















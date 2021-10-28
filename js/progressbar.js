var fills = document.querySelectorAll(".progressbar_fill");
console.log(fills)

var progress = 80;
var maxProgress = 100;

function renderFills(){
    
    var percent = progress / maxProgress * 100;

    //UPDATE COLOR

    //green
    document.documentElement.style.setProperty('--bar-fill', '#819447');
    document.documentElement.style.setProperty('--bar-top', '#617034');

    if (percent <= 50){     //yellow
        document.documentElement.style.setProperty('--bar-fill', '#de9f47');
        document.documentElement.style.setProperty('--bar-top', '#bd853c');
    }
    if (percent <= 22){     //red
        document.documentElement.style.setProperty('--bar-fill', '#bf3333');
        document.documentElement.style.setProperty('--bar-top', '#a32c2c');
    }

    fills.forEach(element => {
        element.style.width = percent + "%";
    });
}

renderFills();

var fills = document.querySelectorAll(".progressbar_fill");

function renderFills(){
    var array = [90, 65, 45, 70, 30, 45,
                 90, 65, 45, 70, 30, 45];

    var count = 0;
    //UPDATE COLOR
    fills.forEach(element => {
        element.style.width = array[Math.floor(count)] + "%";
        count += 0.5;
    });

    array.forEach(function(value, i) {
        console.log('--bar-fill' + i)
        //green
        document.documentElement.style.setProperty('--bar-fill' + i, '#819447');
        document.documentElement.style.setProperty('--bar-top' + i, '#617034');

        if (value <= 50){     //yellow
            document.documentElement.style.setProperty('--bar-fill' + i, '#de9f47');
            document.documentElement.style.setProperty('--bar-top' + i, '#bd853c');
        }
        if (value <= 22){     //red
            document.documentElement.style.setProperty('--bar-fill' + i, '#bf3333');
            document.documentElement.style.setProperty('--bar-top' + i, '#a32c2c');
        }
    });
}

renderFills();

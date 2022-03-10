//long 
s = 1
$ = e => document.querySelector(e)
setInterval(() => {
    if (x=(s&&$('.bigBrotherDialog'))) {
        x.style.visibility = "hidden";
        s = 0;
        setTimeout(() => {
            $('.ui-button').click(s=1);
            console.log("✓ "+new Date().toLocaleTimeString());
        }, 1e3+9e3*Math.random())
    }
}, 100)

// short
s=1,$=e=>document.querySelector(e),setInterval(()=>{(x=s&&$(".bigBrotherDialog"))&&(x.style.visibility="hidden",s=0,setTimeout(()=>{$(".ui-button").click(s=1),console.log("✓ "+(new Date).toLocaleTimeString())},1e3+9e3*Math.random()))},100);

//long 
s = 1
p = e => document.querySelector(e)
setInterval(() => {
    if (x=(s&&p('.bigBrotherDialog'))) {
        x.style.visibility = "hidden";
        s = 0;
        setTimeout(() => {
            p('.ui-button').click(s=1);
            console.log("✓ "+new Date().toLocaleTimeString());
        }, 1e3+9e3*Math.random())
    }
}, 100)

// short
p=e=>document.querySelector(e),setInterval(()=>{(x=s&&p(".bigBrotherDialog"))&&(x.style.visibility="hidden",s=0,setTimeout(()=>{p(".ui-button").click(s=1),console.log("✓ "+(new Date).toLocaleTimeString())},1e3+9e3*Math.random()))},100);

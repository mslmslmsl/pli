//long 
checkingforprompt = true
setInterval(() => {
    prompt = document.querySelector('.bigBrotherDialog')
    if (checkingforprompt && prompt) {
        prompt.style.visibility = "hidden";
        checkingforprompt = false;
        setTimeout(() => {
            document.querySelector('.ui-button').click();
            checkingforprompt = true;
            console.log("✓ "+new Date().toLocaleTimeString());
        }, 1000 + (9000*Math.random()))
    }
}, 100)

//medium 
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
s=1,p=e=>document.querySelector(e),setInterval(()=>{(x=s&&p(".bigBrotherDialog"))&&(x.style.visibility="hidden",s=0,setTimeout(()=>{p(".ui-button").click(s=1),console.log("✓ "+(new Date).toLocaleTimeString())},1e3+9e3*Math.random()))},100);

const typewriter1 = ["We're Almost There..."];
var typewriter1text = ""

function delay(time) {
    setTimeout(function() {
        console.log('waiting' + time);
    }, time);
}

delay(2048);
for (let i = 0; i < typewriter1.length; i++) {
    typewriter1text += typewriter1[i];
    document.getElementById('typewriter').innerHTML = typewriter1text;
    delay((Math.random() * 100) + 1);
}
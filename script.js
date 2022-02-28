function tiktok()
{
    const today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById("main").innerText = hour + ":" + minute + ":" + second;
    setTimeout(tiktok, 1000);
}

function checkTime(i)
{
    if (i < 10) return "0" + 1;
    return i;
}
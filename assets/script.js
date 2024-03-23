var Checkbox = document.getElementById("vv")
var VisitorId = document.getElementById("vid")

function check()
{
    Checkbox.disabled = true;
    Checkbox.checked = false;

    var BotD = import("https://cdn.jsdelivr.net/gh/FluaOnYT/GuardClient@main/assets/botd.js")
    var Fingerprint = import("https://cdn.jsdelivr.net/gh/FluaOnYT/GuardClient@main/assets/fingerprint.js")

    Fingerprint.then(_ => _.load()).then(_ => _.get()).then(_ => {
        VisitorId.innerText = "Visitor Id: " + _.visitorId

        BotD.then(_ => _.detect()).then(Result => {
            Checkbox.checked = Result
        })
    })            
}

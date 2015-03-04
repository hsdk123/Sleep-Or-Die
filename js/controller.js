
//////////////////////////////////////////////////////////////
//Global Variables
var gBunnyName = "NewBunny";
var gTime_Sleep = "23:00";
var gTime_Wakeup = "07:00";

//////////////////////////////////////////////////////////////

var pageHandler= function()
{
    var page= window.location.pathname;
    var pageName = page.substring( page.lastIndexOf("/") + 1);

    //do everything dependent on each page here
    if (pageName == 'title.html') {
        pageHandlerTitle();
    }
    else if (pageName == 'page-settings.html') {
        alert("settings!");
        document.getElementById('bunnyNameText').value = gBunnyName;
        document.getElementById('timeSleep').value = gTime_Sleep;
        document.getElementById('timeWakeup').value = gTime_Wakeup;
    }
};

var pageHandlerTitle = function()
{
    alert("title!");
    document.getElementById('b_name').innerHTML =
        "Name: " + gBunnyName + "time: " + gTime_Sleep + " time: " + gTime_Wakeup;
};

//////////////////////////////////////////////////////////////

var SaveSettings = function()
{
    console.log("val: " + document.getElementById('bunnyNameText').value);
    gBunnyName = document.getElementById('bunnyNameText').value;
    gTime_Sleep = document.getElementById('timeSleep').value;
    gTime_Wakeup = document.getElementById('timeWakeup').value;
};
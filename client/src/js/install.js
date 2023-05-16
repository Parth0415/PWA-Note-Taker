var butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', function (event) {
    //event.preventDefault()
//how it triggers
//why is it not working 
    console.log("kokok")
    window.deferredPrompt = event

    butInstall.style.display = "block"
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click',  function () {
    console.log("something")
    var event=window.deferredPrompt
    if(!event){
        return
    }
    event.prompt()
    window.deferredPrompt=null
    butInstall.style.display = "hidden"
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', function (event) {
    window.deferredPrompt=null
    console.log(event)
});

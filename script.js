
function onDevToolsOpen() {
    setTimeout(function() {
        console.clear();
        window.location.replace("https://duonganh.github.io.vn/good/");
        setTimeout(function() {
            history.pushState(null, document.title, location.href);
            window.addEventListener('popstate', function(event) {
                history.pushState(null, document.title, location.href);
            });
        }, 0);
    }, 0);
    const script = document.querySelector('script');
    script.remove();
}

class DevToolsChecker extends Error {

    toString(){

    }

    get message(){
        onDevToolsOpen();
    }
}

console.log(new DevToolsChecker());


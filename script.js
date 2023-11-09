function onDevToolsOpen(){
     setTimeout(console.clear.bind(console))
          setTimeout(function() {
                 window.location.href = 'https://duonganh.github.io.vn/good/'; }); 
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

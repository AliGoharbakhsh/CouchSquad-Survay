// IIFE - Immediately Invoked Function Expression
(()=>{
    function start(): void
    {
        console.log('App Started...');
    }
    window.addEventListener('load',start);

})();
(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("start").addEventListener("click", startTest);
        document.getElementById("results").addEventListener("click", showResults);
    }

    function startTest(){
        window.location.href = "../Question/Question.html"
    }

    function showResults(){
        
    }
})()
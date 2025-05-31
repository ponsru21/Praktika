(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("return").addEventListener("click", gotoLanding);
        document.getElementById("restart").addEventListener("click", restartTest);
        document.getElementById("results").addEventListener("click", showResults);
    }

    function gotoLanding(){
        window.location.href = "../Landing/Landing.html"
    }

    function restartTest(){
        window.location.href = "../Question/Question.html"
    }

    function showResults(){
        
    }
})()
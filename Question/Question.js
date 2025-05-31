(function() {
    window.addEventListener('load', init);
    function init() {
        let a=document.getElementsByClassName("answer")
        a[0].addEventListener("click", gotoResult); //test function
        a[1].addEventListener("click", gotoResult); //test function
        a[2].addEventListener("click", gotoResult); //test function
        a[3].addEventListener("click", gotoResult); //test function
    }

    function gotoResult(){
        window.location.href = "../Finish/Finish.html"
    }
})()
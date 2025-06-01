
    window.addEventListener('load', init);
    function init() {
        document.getElementById("start").addEventListener("click", startTest);
        document.getElementById("results").addEventListener("click", showResults);
        document.getElementById("nameInput").addEventListener("input", buttonUnlock)
    }

    function buttonUnlock(){
        let text=document.getElementById("nameInput")
        let button=document.getElementById("start")
        if(text.value.length>=3){
            button.disabled=false
            localStorage.name=text.value
        } else {
            button.disabled=true
        }
    }

    function startTest(){
        window.location.href = "../Question/Question.html"
    }

    function showResults(){
        
    }

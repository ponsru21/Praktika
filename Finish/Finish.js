
    
    window.addEventListener('load', init);
    function init() {
        document.getElementById("return").addEventListener("click", gotoLanding);
        document.getElementById("restart").addEventListener("click", restartTest);
        document.getElementById("results").addEventListener("click", showResults);
        currentResults()
    }

    function currentResults(){
        let score=0
        let textScore=document.getElementById("textResult")
        let resultDescription=document.getElementById("resultDescription")
        let textName=document.getElementById("nameId")
        let userAns=localStorage.userAns
        let realAns=localStorage.realAns
        let name=localStorage.name
        textName.innerHTML=name + ", Ваш результат:"
        let totalQuestions=Math.ceil(userAns.length/2)
        for(let i=0; i<userAns.length; i++){
            if(userAns[i]===realAns[i] && userAns[i]!=','){
                score++
            }
        }
        textScore.innerHTML=score+"/"+totalQuestions
        if(score / totalQuestions < 0.6){
            resultDescription.innerHTML="Всё печально, надо серьёзно постараться."
        } else {
            if(score / totalQuestions >= 0.6 && score / totalQuestions < 0.7){
                resultDescription.innerHTML="Не хорошо, но и не плохо, есть над чем работать."
            } else {
                if(score / totalQuestions >= 0.7 && score / totalQuestions < 0.8){ 
                    resultDescription.innerHTML="Вы неплохо знаете язык. Хорошая работа!"
                } else {
                    resultDescription.innerHTML="Вы замечательно разбираетесь в языке!"
                }
            }
        }
        localStorage.clear()
    }

    function gotoLanding(){
        window.location.href = "../Landing/Landing.html"
    }

    function restartTest(){
        window.location.href = "../Question/Question.html"
    }

    function showResults(){
        
    }

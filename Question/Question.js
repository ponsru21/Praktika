let userAns=[];
let realAns=[];

    let data=-1;
    let cnt=0;
    window.addEventListener('load', init);
    function init() {
        let tmp=document.getElementById("question")
        if(tmp!=null){
        let a=document.getElementsByClassName("answer")
        a[0].addEventListener("click", buttonOne);
        a[1].addEventListener("click", buttonTwo);
        a[2].addEventListener("click", buttonThree);
        a[3].addEventListener("click", buttonFour);
        dataFetch();
        }
    }

    async function dataFetch(){
        const url='Questions.json';
        const request = new Request(url);
        const response = await fetch(request);
        data = await response.json();
        dataGetter("-1");
    }

    function gotoResult(){
        localStorage.userAns=userAns
        localStorage.realAns=realAns
        console.log(localStorage.userAns)
        window.location.href = "../Finish/Finish.html";
    }

    function buttonOne(){
        userAns.push('1');
        dataGetter("1");
    }
    function buttonTwo(){
        userAns.push('2');
        dataGetter("1");
    }
    function buttonThree(){
        userAns.push('3');
        dataGetter("1");
    }
    function buttonFour(){
        userAns.push('4');
        dataGetter("1");
    }
    function dataGetter(temp) {
        if(temp==="1"){
            processData();
            showQuestion();
        }
        else{
            showQuestion();
        }
    }

    function showQuestion(){
        let buttonOne=document.getElementById("answer1");
        let buttonTwo=document.getElementById("answer2");
        let buttonThree=document.getElementById("answer3");
        let buttonFour=document.getElementById("answer4");
        let questionText=document.getElementById("questionText");
        let titleText=document.getElementById("titleText");
        buttonOne.innerHTML=data[cnt].answer1;
        buttonTwo.innerHTML=data[cnt].answer2;
        buttonThree.innerHTML=data[cnt].answer3;
        buttonFour.innerHTML=data[cnt].answer4;
        questionText.innerHTML=data[cnt].question;
        titleText.innerHTML="Вопрос "+(cnt+1);
    }

    function processData(){
        let ans=data[cnt].correctAnswer;
        realAns.push(ans);
        console.log(cnt)
        cnt=cnt+1;
        if(cnt==5){
            gotoResult();
        }
    }
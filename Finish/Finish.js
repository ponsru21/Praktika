let db
async function openDB() {
  db = await idb.openDb('userScores', 1, db => {
    db.createObjectStore('scores', {keyPath: 'name'});
  });
}

async function listScores() {
  let tx = db.transaction('scores');
  let allScores = tx.objectStore('scores');

  let scores = await allScores.getAll();

  if (scores.length) {
    //if database exists then show it
  } else {
    //else if it dosent do some funny stuff
  }


}

async function clearScores() {
  let tx = db.transaction('scores', 'readwrite');
  await tx.objectStore('scores').clear();
  await list();
}

async function addScore(username, score) {
    //adding stuff
  let name = username
  let score = score

  let tx = db.transaction('scores', 'readwrite');

  try {
    await tx.objectStore('score').add({name, score});
    await list();
  } catch(err) {
    if (err.name == 'ConstraintError') {
      alert("Such book exists already");
      await addBook();
    } else {
      throw err; //needs fixes later
    }
  }
}
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
            userAns=[1,2,3] //temp
            realAns=[1,2,3] //temp
        let username=localStorage.name
        textName.innerHTML=username + ", Ваш результат:"
        let totalQuestions=Math.ceil(userAns.length/2)
        for(let i=0; i<userAns.length; i++){
            if(userAns[i]===realAns[i] && userAns[i]!=','){
                score++
            }
        }
        addScore(username, score)
        const transaction = db.transaction(["answers"]);
        const objectStore = transaction.objectStore("answers");
        const request = objectStore.get("Dev");
        request.onsuccess = (event) => {
            console.log('${event.target.result}')
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

    function writeAnswer(username, score){

        let obj={name:username, score:score}
    }
    function gotoLanding(){
        window.location.href = "../Landing/Landing.html"
    }

    function restartTest(){
        window.location.href = "../Question/Question.html"
    }

    function showResults(){
        
    }
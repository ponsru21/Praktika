let db
async function openDB() {
  let openRequest = indexedDB.open("scores", 2);
  openRequest.onsuccess = function() {
  db = openRequest.result;
  }
openRequest.onupgradeneeded = function() {
  db = openRequest.result;
  if (!db.objectStoreNames.contains('scores')) { 
    db.createObjectStore('scores', {keyPath: 'name'});
  }
}
}
async function getUserScores(){

}
async function getAllScores(bigList) {
  console.log(db)
  let tx = db.transaction('scores', 'readonly');
  let allScores = tx.objectStore('scores');
  let scores = await allScores.getAll();

  if (scores.length>9) {
    scores.sort((a,b) => a.score-b.score)
    for(let i=0; i<10; i++){
      if (scores[i].length){
      let userScore=document.createElement("li")
      let userScoreName=scores[i].name
      let userScoreActual=scores[i].score
      userScore.appendChild(document.createTextNode("Имя: " + userScoreName +" | Результат: " + userScoreActual))
      bigList.appendChild(userScore)
    } else {
      console.log("error, not enough results")
    }
  }
  } else {
    for(let i=0; i<scores.length; i++){
      if (scores[i].length){
      let userScore=document.createElement("li")
      let userScoreName=scores[i].name
      let userScoreActual=scores[i].score
      userScore.appendChild(document.createTextNode("Имя: " + userScoreName +" | Результат: " + userScoreActual))
      bigList.appendChild(userScore)
    } else {
      console.log("error, not enough results")
    }
  }
}
}
async function clearScores() {
  let tx = db.transaction('scores', 'readwrite');
  await tx.objectStore('scores').clear();
}
async function addScore(username, userScore) { //needs fixes later
  let tx = db.transaction('scores', 'readwrite');
  try {
    await tx.objectStore('score').add({username, userScore});
    await list();
  } catch(err) {
    if (err.name == 'ConstraintError') {
      alert("Such book exists already");
      await addBook();
    } else {
      throw err; 
    }
  }
}
    window.addEventListener('load', init);
    function init() {
        document.getElementById("start").addEventListener("click", startTest);
        document.getElementById("results").addEventListener("click", showResults);
        document.getElementById("nameInput").addEventListener("input", buttonUnlock)
        openDB()
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
        let bigList=document.createElement("ol")
        bigList.setAttribute("id", "resultList")

        getAllScores(bigList)
        document.body.appendChild(bigList)
    }

let db
async function openDB() {
  db = await idb.openDb('userScores', 1, db => {
    db.createObjectStore('scores', {keyPath: 'name'});
  });
}
async function getUserScores(){

}
async function getAllScores() {
  let tx = db.transaction('scores');
  let allScores = tx.objectStore('scores');

  let scores = await allScores.getAll();

  if (scores.length) {
    let list=0
    for(let i=0; i<10; i++){
    }
    listElem.innerHTML = books.map(book => `<li>
        name: ${book.name}, price: ${book.price}
      </li>`).join('');
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

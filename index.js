function addListeners(){
    document.getElementById('sort-button').addEventListener('click', function(){
        displayRandomizedSet();
    })
    document.getElementById('mean-button').addEventListener('click', function(){
        displayMean();
    })
    document.getElementById('table-button').addEventListener('click', function(){
        getData();
    })
}

function displayRandomizedSet(){
    let answer = randomizeSet([22, 14, 3, 4, 37, 6, 7, 81, 9, 10])
    let html = `<p>${answer}</p>`
    document.getElementById('random-sort-answer').innerHTML = html;
}

function randomizeSet(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        let temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
    return array;
}

function displayMean(){
    let answer = getMean([22, 14, 3, 4, 37, 6, 7, 81, 9, 10])
    let html = `<p>${answer}<p>`
    document.getElementById('find-mean-answer').innerHTML = html;
}

function getMean(arr){
    let sum = arr.reduce((a, b) => a + b);
    return sum/arr.length
}

function getData(){
    getJSON()
      .then(data => {
        displayData(data);
      })
  }
  
  function getJSON(){
    const url = "https://bpbuild.com/devtest/data.php";
    return fetch(url).then(response => response.json());
  }
  
  function displayData(data){
      const table = document.getElementById('api-data')
      let html = `
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
      </tr>
    `
    data.map(item => {
      html += renderData(item);
    })
    table.innerHTML = html;
  }
  
  function renderData(item){
    return`
      <tr>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.email}</td>
        <td>${item.gender}</td>
      </tr>`
  }

addListeners();
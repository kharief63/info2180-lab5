window.onload = function() {

  var loadTextBtn = document.querySelector('#lookup');
  var loadCitiesBtn=document.querySelector("#lookupcities");
  var httpRequest;

  loadTextBtn.addEventListener('click', function() {

    httpRequest = new XMLHttpRequest();
    var userInput=encodeURIComponent(document.getElementById("country").value);
    httpRequest.onreadystatechange = loadQuote;
    httpRequest.open("GET", "world.php?country="+ userInput, true);
    httpRequest.send();
  });

  loadCitiesBtn.addEventListener("click", function(){

    httpRequest = new XMLHttpRequest();
    var userInput=encodeURIComponent(document.getElementById("country").value);
    httpRequest.onreadystatechange = loadCities;
    httpRequest.open("GET", "world.php?country="+ userInput+"&lookup=cities", true);
    httpRequest.send();
  });

  function loadQuote() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      }else {
        alert('There was a problem with the request.');
      }
    }
  }

  function loadCities(){
    if (httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      }else {
        alert('There was a problem with the request.');
      }
    }
  }
};
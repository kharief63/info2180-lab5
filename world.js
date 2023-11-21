window.onload=function(){
    var look=document.getElementById("lookup");
    look.addEventListener("click",lookClick);

    var cityLook=document.getElementById("cities");
    cityLook.addEventListener("click", cityClick);



    function lookClick(e){
        e.preventDefault();
        console.log("lookup clicked");
        const htr = new XMLHttpRequest();
        searchContent = document.getElementById("country").value;
        console.log(searchContent);
        htr.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        htr.open("GET", "http://localhost/info2180-lab5/world.php?country="+searchContent);
        htr.send();
    }

    function cityClick(c){
        c.preventDefault();
        console.log("city lookup clicked");
        const htr = new XMLHttpRequest();
        searchContent = document.getElementById("country").value;
        console.log(searchContent);

        htr.onreadystatechange=function(){
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        htr.open("GET", "http://localhost/info2180-lab5/world.php?country="+searchContent+"&context=cities");
        htr.send(); 

    }
}
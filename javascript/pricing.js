

    function check(){
        // getting the checkbox and the prcing plans 
        var checkBox = document.getElementById("checkbox");
        var text1 = document.getElementsByClassName("text1");
        var text2 = document.getElementsByClassName("text2");
        
      
// checking if the checkbox is checked it will show hourly pricing plan 
        for (var i=0; i < text1.length; i++){
            if(checkBox.checked == true){
                text1[i].style.display = "block";
                text2[i].style.display = "none";
            }
            // checking if the checkbox is not checked to show monthly pricing plan
            else if (checkBox.checked == false){
                text1[i].style.display = "none";
                text2[i].style.display = "block";
            }
        }
    }

check();


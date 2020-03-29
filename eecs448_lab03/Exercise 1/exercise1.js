document.addEventListener("DOMContentLoaded",() => {
    let input1 = document.querySelector("#enter");
    let input2 = document.querySelector("#renter");

	
 	document.querySelector("#the_enter").addEventListener("click",(e) => {
		console.log('click');
        console.log('enter',input1.value);
        console.log('renter',input2.value);
        if(!check_same(input1.value,input2.value) )
        {
            document.querySelector("#result_text").innerText = "password don't match!";
        }
        else if(check_length(input1.value))
        {
            document.querySelector("#result_text").innerText = "the length is not at least 8";
        }
        else{
            document.querySelector("#result_text").innerText = "varify";

        }

        
     });
    });

    check_same = function(num1, num2)
    {
        if(num1==num2)
        {
            return true;
        }
        else{
            return false;
        }
    }
    check_length = function(num)
    {
        if(num.length>=8)
        {
            return false;
        }
        else{
            return true;
        }
    }
    
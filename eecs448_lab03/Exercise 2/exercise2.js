let current =0

let pic_arr = new Array;
pic_arr[0]= "pic1.jpg"
pic_arr[1]= "pic2.jpg"
pic_arr[2]= "pic3.jpg"
pic_arr[3]= "pic4.jpg"
pic_arr[4]= "pic5.jpg"


document.addEventListener("DOMContentLoaded",() => {
document.querySelector("#picture1").src = pic_arr[0];

 	document.querySelector("#pushback").addEventListener("click",(e) => {
        console.log(current);

        if(current == 0)
        {
            document.querySelector("#picture1").src = pic_arr[4];
            current =4;
        }
        else{
            current--;
            document.querySelector("#picture1").src = pic_arr[current];
        }

        
     });
  

     document.querySelector("#pushfront").addEventListener("click",(e) => {
		console.log(current);
        if(current == 4)
        {
            document.querySelector("#picture1").src = pic_arr[0];
            current =0;
        }
        else{
            current++;
            document.querySelector("#picture1").src = pic_arr[current];
        }

        
     });

    });
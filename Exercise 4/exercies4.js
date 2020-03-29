document.addEventListener("DOMContentLoaded",() => {
    let b_red = document.querySelector("#b_red_value");
    let b_green = document.querySelector("#b_green_value");
    let b_blue = document.querySelector("#b_blue_value");

    let bg_red = document.querySelector("#bg_red_value");
    let bg_green = document.querySelector("#bg_green_value");
    let bg_blue = document.querySelector("#bg_blue_value");



	
 	document.querySelector("#conform").addEventListener("click",(e) => {
        let b_red = document.querySelector("#b_red_value").value;
        let b_green = document.querySelector("#b_green_value").value;
        let b_blue = document.querySelector("#b_blue_value").value;
        let b_width = document.querySelector("#width_value").value;
    
        let bg_red = document.querySelector("#bg_red_value").value;
        let bg_green = document.querySelector("#bg_green_value").value;
        let bg_blue = document.querySelector("#bg_blue_value").value;



        border_color = 'rgb(' +String(b_red) + ',' + String(b_green)+ ','+ String(b_blue) + ')'
        border_width = b_width
        background_color = 'rgb(' +String(bg_red) + ',' + String(bg_green)+ ','+ String(bg_blue) + ')'
        

        text.style.backgroundColor = background_color;
        text.style.borderColor = border_color;
        text.style.borderWidth = border_width;

        document.querySelector("#info").innerText = "the text back ground is in RGB( "+ bg_red+ "," + bg_green + ","+ bg_blue+ ")\n" +"the border color is RGB( "+ b_red+ "," + b_green + ","+ b_blue+ ")"

     });
    });

    change_style = function(){

    }



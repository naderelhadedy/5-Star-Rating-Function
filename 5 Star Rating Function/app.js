/*global variables*/
const stars = document.querySelectorAll(".star");
const list = document.getElementById("rate").children;
const result = document.getElementById("result");

/*performing function for each star*/
stars.forEach(performAction);

/*performing function definition*/
function performAction(item) {

    //hover function definition
    function hover() {
        //first star
        if (item == list[0]) {
            this.innerHTML = '&#9733;';
            this.style.cursor = "pointer";
            this.style.color = "gold";
        }
        //second star
        if (item == list[1]) {
            this.innerHTML = '&#9733;';
            this.style.cursor = "pointer";
            this.style.color = "gold";
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.cursor = "pointer";
            list[0].style.color = "gold";
        }
        //third star
        if (item == list[2]) {
            this.innerHTML = '&#9733;';
            this.style.cursor = "pointer";
            this.style.color = "gold";
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.cursor = "pointer";
            list[0].style.color = "gold";
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.cursor = "pointer";
            list[1].style.color = "gold";
        }
        //fourth star
        if (item == list[3]) {
            this.innerHTML = '&#9733;';
            this.style.cursor = "pointer";
            this.style.color = "gold";
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.cursor = "pointer";
            list[0].style.color = "gold";
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.cursor = "pointer";
            list[1].style.color = "gold";
            //third
            list[2].innerHTML = '&#9733;';
            list[2].style.cursor = "pointer";
            list[2].style.color = "gold";
        }
        //fifth star
        if (item == list[4]) {
            this.innerHTML = '&#9733;';
            this.style.cursor = "pointer";
            this.style.color = "gold";
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.cursor = "pointer";
            list[0].style.color = "gold";
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.cursor = "pointer";
            list[1].style.color = "gold";
            //third
            list[2].innerHTML = '&#9733;';
            list[2].style.cursor = "pointer";
            list[2].style.color = "gold";
            //fourth
            list[3].innerHTML = '&#9733;';
            list[3].style.cursor = "pointer";
            list[3].style.color = "gold";
        }
    }


    //hover function call
    item.addEventListener("mouseover", hover);


    //unhover function definition
    function unhover() {
        //first star
        if (item == list[0]) {
            this.innerHTML = '&#9734;';
            this.style.color = "grey";
        }
        //second star
        if (item == list[1]) {
            this.innerHTML = '&#9734;';
            this.style.color = "grey";
            //first
            list[0].innerHTML = '&#9734;';
            list[0].style.color = "grey";
        }
        //third star
        if (item == list[2]) {
            this.innerHTML = '&#9734;';
            this.style.color = "grey";
            //first
            list[0].innerHTML = '&#9734;';
            list[0].style.color = "grey";
            //second
            list[1].innerHTML = '&#9734;';
            list[1].style.color = "grey";
        }
        //fourth star
        if (item == list[3]) {
            this.innerHTML = '&#9734;';
            this.style.color = "grey";
            //first
            list[0].innerHTML = '&#9734;';
            list[0].style.color = "grey";
            //second
            list[1].innerHTML = '&#9734;';
            list[1].style.color = "grey";
            //third
            list[2].innerHTML = '&#9734;';
            list[2].style.color = "grey";
        }
        //fifth star
        if (item == list[4]) {
            this.innerHTML = '&#9734;';
            this.style.color = "grey";
            //first
            list[0].innerHTML = '&#9734;';
            list[0].style.color = "grey";
            //second
            list[1].innerHTML = '&#9734;';
            list[1].style.color = "grey";
            //third
            list[2].innerHTML = '&#9734;';
            list[2].style.color = "grey";
            //fourth
            list[3].innerHTML = '&#9734;';
            list[3].style.color = "grey";
        }
    }


    //unhover function call
    item.addEventListener("mouseout", unhover);


    //click function definition
    function click() {
        //first star
        if (item == list[0]) {
            this.innerHTML = '&#9733;';
            this.style.color = "gold";
            this.removeEventListener("mouseover", hover);
            this.removeEventListener("mouseout", unhover);
            result.innerHTML = "You rated <span>1</span> star";
        }
        //second star
        if (item == list[1]) {
            this.innerHTML = '&#9733;';
            this.style.color = "gold";
            this.removeEventListener("mouseover", hover);
            this.removeEventListener("mouseout", unhover);
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.color = "gold";
            list[0].removeEventListener("mouseover", hover);
            list[0].removeEventListener("mouseout", unhover);
            result.innerHTML = "You rated <span>2</span> stars";
        }
        //third star
        if (item == list[2]) {
            this.innerHTML = '&#9733;';
            this.style.color = "gold";
            this.removeEventListener("mouseover", hover);
            this.removeEventListener("mouseout", unhover);
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.color = "gold";
            list[0].removeEventListener("mouseover", hover);
            list[0].removeEventListener("mouseout", unhover);
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.color = "gold";
            list[1].removeEventListener("mouseover", hover);
            list[1].removeEventListener("mouseout", unhover);
            result.innerHTML = "You rated <span>3</span> stars";
        }
        //fourth star
        if (item == list[3]) {
            this.innerHTML = '&#9733;';
            this.style.color = "gold";
            this.removeEventListener("mouseover", hover);
            this.removeEventListener("mouseout", unhover);
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.color = "gold";
            list[0].removeEventListener("mouseover", hover);
            list[0].removeEventListener("mouseout", unhover);
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.color = "gold";
            list[1].removeEventListener("mouseover", hover);
            list[1].removeEventListener("mouseout", unhover);
            //third
            list[2].innerHTML = '&#9733;';
            list[2].style.color = "gold";
            list[2].removeEventListener("mouseover", hover);
            list[2].removeEventListener("mouseout", unhover);
            result.innerHTML = "You rated <span>4</span> stars";
        }
        //fifth star
        if (item == list[4]) {
            this.innerHTML = '&#9733;';
            this.style.color = "gold";
            this.removeEventListener("mouseover", hover);
            this.removeEventListener("mouseout", unhover);
            //first
            list[0].innerHTML = '&#9733;';
            list[0].style.color = "gold";
            list[0].removeEventListener("mouseover", hover);
            list[0].removeEventListener("mouseout", unhover);
            //second
            list[1].innerHTML = '&#9733;';
            list[1].style.color = "gold";
            list[1].removeEventListener("mouseover", hover);
            list[1].removeEventListener("mouseout", unhover);
            //third
            list[2].innerHTML = '&#9733;';
            list[2].style.color = "gold";
            list[2].removeEventListener("mouseover", hover);
            list[2].removeEventListener("mouseout", unhover);
            //fourth
            list[3].innerHTML = '&#9733;';
            list[3].style.color = "gold";
            list[3].removeEventListener("mouseover", hover);
            list[3].removeEventListener("mouseout", unhover);
            result.innerHTML = "You rated <span>5</span> stars";
        }
    }


    //click function definition
    item.addEventListener("click", click);

}
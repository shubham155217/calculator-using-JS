

let displayinput=document.getElementById("inputbox");
let buttons=document.querySelectorAll('button')
let buttonsarray=Array.from(buttons);
let string='';

buttonsarray.forEach(btn =>{
    btn.addEventListener('click',(e)=> {
        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            displayinput.value=string;
        }
    else if(e.target.innerHTML== "AC"){
        string="";
        displayinput.value=string;
    }
    else if(e.target.innerHTML== "="){
        string = eval(string);
        displayinput.value=string;
    }
    else{
        string=string+e.target.innerHTML;
        displayinput.value=string;
    }

    });
});

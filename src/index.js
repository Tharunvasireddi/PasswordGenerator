document.addEventListener("DOMContentLoaded",()=>{
    let input = document.getElementById("input");
    let slider = document.getElementById("slider");
    let containNumbers = document.getElementById("containNumbers");
    let containCharacters = document.getElementById("containCharacters");
    let generate = document.getElementById("generate");
    let copypassword = document.getElementById("copypassword");
    let showPassword = document.getElementById("showPassword");
    let numberCheck = false;
    let characterCheck = false;
    let password = "";
    let index=0;
    let passwordLength = 0;
    let isVisible = true;
    generate.addEventListener("click",()=>{
        input.value ="";
        showPassword.innerText = "hide";
        generatePassword();
    });
    function generatePassword(){
        input.value ="";
        password = "";
        passwordLength = parseInt(slider.value);
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let Numbers = "0123456789";
        let Characters = "!@#$%^&*()_";
        let numberCheck = containNumbers.checked;
        let characterCheck = containCharacters.checked;
        if(numberCheck){
            alphabets += Numbers;
        }
        if(characterCheck){ 
            alphabets += Characters;
        }        
        for(let i=1;i<=passwordLength;i++){
            index = Math.floor(Math.random()*(alphabets.length + 0))+0;
            password += alphabets[index];
        }
          input.value = password;
    }
    copypassword.addEventListener("click",()=>{
        input.select();
        input.setSelectionRange(0,99999);
        navigator.clipboard.writeText(input.value);
    })
    showPassword.addEventListener("click",()=>{
        isVisible = !isVisible;
        if(isVisible){
            input.type = "password";
            showPassword.innerText = "show";
        }
        else{
            input.type = "text";
            showPassword.innerText = "hide"
        }
    })
    slider.addEventListener("change",()=>{
        slider.innerText = parseInt(slider.value);
    })
})
document.addEventListener("DOMContentLoaded", () => {

```
console.log("ShopEase Website Loaded");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Action Successful!");
    });
});


const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", (event) => {

        const inputs = form.querySelectorAll("input");

        let valid = true;

        inputs.forEach(input => {
            if(input.value.trim() === ""){
                valid = false;
            }
        });

        if(!valid){
            event.preventDefault();
            alert("Please fill all required fields.");
        }
    });
}
```

});

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

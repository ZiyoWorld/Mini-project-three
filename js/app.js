const message = document.querySelector("#message");
const result = document.querySelector("#result");

let limit = 50;

result.textContent = 0 + "/" + limit;


message.addEventListener("input", () =>{
   let textLength = message.value.length;
   result.textContent = textLength + "/" + limit;
  
   if(textLength > limit){
      message.style.borderColor = "red";
      result.style.color = "red";  
   } else{
        message.style.borderColor = "green";
      result.style.color = "green"; 
   }
  

})

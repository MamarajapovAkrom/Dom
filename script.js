// // Event bubling bu birro bir xodisa va xodisa jarayonida click yoki boshqa bir event bo'lganda bir necha jarayonga 
// // o'tib ketishi
// const todolist=document.querySelector(".todo-list");
// const btn=document.querySelector("#submint");
// const todoNr=document.querySelector(".todo-nr");
// const items=todolist.children;
// btn.addEventListener("click",addIteam);

// todolist.addEventListener("click",function(){
//     console.log("ul bosildi");
// })
// function addIteam(){
//     const newIteam=document.createElement("li");
//     newIteam.classList.add("iteam");
//     newIteam.innerText=`Iteam ${items.length+1}`;
//     todolist.append(newIteam);
//     newIteam.addEventListener("click",deleteiteam);
// }
// function deleteiteam(e){
//     e.stopProgation();
//     const eachTime=e.target;
//     eachTime.remove();
// }

// const animated=document.querySelector(".animated");
// const submit=document.getElementById("submint");
// submit.addEventListener("click",function(){
//     animated.style.color="red";
//     animated.classList.toggle("helping");
// });

// function checkCharacterCount() {
//     const input = document.getElementById("myInput");
//     const count = input.value.length;
  
//     if (count > 50) {
//       input.style.borderColor = "red";
//     } else {
//       input.style.borderColor = "";
//     }
  
//     document.getElementById("characterCount").innerHTML = "50/" + count;
//   }

// function wordPress() {
//     const input = document.getElementById("text");
//     const count = input.value.length;
//     input.style.borderColor = count > 50 ? "red" : "";
//     document.getElementById("div10").innerText = "50/" + count;
//   }

// UY ISHI UCHUN VAZIFA

// const button = document.querySelector("button");
// const table = document.querySelector("table");

// button.addEventListener("click",function(){
//     let tr=document.createElement("tr");
//     let td1=document.createElement("td");
//     let td2=document.createElement("td");
//     const in1 = document.querySelector("#in1").value;
//     const in2 = document.querySelector("#in2").value;
//     td1.innerText=in1;
//     td2.innerText=in2;
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     table.appendChild(tr);
// });
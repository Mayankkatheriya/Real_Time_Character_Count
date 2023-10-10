let text = document.querySelector("textarea")
let totalCount = document.querySelector(".total")
let remains = document.querySelector(".remains")
text.addEventListener('input', (e)=>{
    let count = e.target.value.length;
    let rem = 80-e.target.value.length;
    totalCount.style.fontSize = "2.5rem"
    remains.style.fontSize = "2.5rem"
    totalCount.innerText = count;
    remains.innerText = rem;
    setTimeout(()=>{
        totalCount.style.fontSize = "1.6rem";
    }, 500);
    setTimeout(()=>{
        remains.style.fontSize = "1.6rem";
    }, 500);
})
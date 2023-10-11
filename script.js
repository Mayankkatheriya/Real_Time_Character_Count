let text = document.querySelector("textarea")
let totalCount = document.querySelector(".total")
let remains = document.querySelector(".remains")
text.addEventListener('input', (e)=>{
    let count = e.target.value.length;
    let rem = 99-e.target.value.length;
    totalCount.style.transform = "scale(2) translateY(-4px)"
    remains.style.transform = "scale(2) translateY(-4px)"
    totalCount.innerText = count;
    remains.innerText = rem;
    setTimeout(()=>{
        totalCount.style.transform = "scale(1) translateY(0)";
    }, 400);
    setTimeout(()=>{
        remains.style.transform = "scale(1) translateY(0)";
    }, 400);
})
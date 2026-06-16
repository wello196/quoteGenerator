const quoteText=document.querySelector(".quote");
const authorName=document.querySelector(".name");
const speechBtn=document.querySelector(".speech");
const copyBtn=document.querySelector(".copy");

const newQuoteBtn=document.querySelector("button");
const loader=document.querySelector(".loader");


const randomQuote=async ()=>{
    try{
    speechSynthesis.cancel();
    copyBtn.children[0].classList.add("fa-copy");
    newQuoteBtn.innerText = "Loading...";
    newQuoteBtn.classList.add("loading");

    const response= await fetch("https://dummyjson.com/quotes/random")
    if(!response.ok){
        throw new Error("Network response was not ok")
    }
    const data = await response.json();
    console.log(data)
    newQuoteBtn.innerText="Next Quote"
    newQuoteBtn.classList.remove("loading");
    quoteText.innerText=data.quote
    authorName.innerText=data.author

    }catch(err){
        quoteText.innerText=`Something went wrong ${err.message}`
        authorName.innerText="Unknown"
    }
    
    
}

speechBtn.addEventListener('click',()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteText.innerText)
    copyBtn.children[0].classList.add("fa-solid", "fa-check");
    copyBtn.children[0].classList.remove("fa-copy");
    
})



newQuoteBtn.addEventListener('click',randomQuote)
    


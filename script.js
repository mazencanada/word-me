
document.getElementById("generate-button").addEventListener("click",generate)

function generate(){
 let wordsGenerated=document.getElementById("words-generated");
 wordsGenerated.innerHTML=" "
let input = document.getElementById("input-text").value;
let splitting=input.split(" ");
console.log(splitting);
let makeSet= new Set(splitting);
let words=Array.from(makeSet);
console.log(words);



words.forEach(function(item){
let li =document.createElement("li");
let spanOne=document.createElement("span")
let spantwo=document.createElement("span")
spanOne.append(item.toUpperCase())
spantwo.innerHTML='&nbsp <i class="fa-regular fa-heart"></i>'
li.append(spanOne,spantwo)
wordsGenerated.append(li)
spantwo.addEventListener("click",function(){
    let learnWords= document.getElementById("learn-words");
    let li =document.createElement("li");
    let spanThree=document.createElement("span")
    spanThree.innerHTML=' &nbsp <i class="fa-solid fa-trash"></i>'
    spantwo.innerHTML=""
    li.append(spanOne,spanThree)
    learnWords.append(li)
    spanOne.addEventListener("click",function(){
        let arabic=document.createElement("span")
        let english =spanOne.innerText;
        let api=`https://api.mymemory.translated.net/get?q=${english}&langpair=en|ar-SA`
        fetch(api).then(res => res.json()).then(data => {
            arabic.innerText=data.responseData.translatedText;
            li.style.height="80px"
            li.append(arabic)
        learnWords.append(li)
        });
        
    })
    spanThree.addEventListener("click",function(){
        li.innerHTML=""
        li.style.backgroundColor="#FFFFFF"
        })
   })
   
})

}

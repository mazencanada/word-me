
document.getElementById("generate-button").addEventListener("click",generate)

function generate(){
 let wordsGenerated=document.getElementById("words-generated");
 wordsGenerated.innerHTML=" "
let input = document.getElementById("input-text").value;
 //split the input into words and return an array
let splitting=input.split(" ");
console.log(splitting);
 //Remove Duplicate using Set
let makeSet= new Set(splitting);
 //create an array from the set
let words=Array.from(makeSet);
console.log(words);
//loop through all the elements of the array using forEach and create list items and 2 spans for the word and icon 
words.forEach(function(item){
let li =document.createElement("li");
let spanOne=document.createElement("span")
let spantwo=document.createElement("span")
spanOne.append(item.toUpperCase())
spantwo.innerHTML='&nbsp <i class="fa-regular fa-heart"></i>'
li.append(spanOne,spantwo)
wordsGenerated.append(li)

 //add generated words to WORDS list
spantwo.addEventListener("click",function(){
    let learnWords= document.getElementById("learn-words");
    let liTwo =document.createElement("li");
    let spanThree=document.createElement("span")
    spanThree.innerHTML=' &nbsp <i class="fa-solid fa-trash"></i>'
    spantwo.innerHTML=""
    liTwo.append(spanOne,spanThree)
    learnWords.append(liTwo)
    li.style.backgroundColor="#6477FE";
    spanThree.addEventListener("click",function(){
      liTwo.innerHTML=""
      liTwo.style.backgroundColor="#6477FE"
      })
 //add to NEW WORDS list icon 
 spanOne.addEventListener("click",function(){
    let arabic=document.createElement("span")
    let english =spanOne.innerText;
 //Translation api
    let api=`https://api.mymemory.translated.net/get?q=${english}&langpair=en|ar-SA`
    fetch(api).then(res => res.json()).then(data => {
        arabic.innerText=data.responseData.translatedText;
        liTwo.style.height="80px"
        liTwo.append(arabic)
        arabic.style.display="block"
    learnWords.append(liTwo)
    });
    
})

})


   
})

}

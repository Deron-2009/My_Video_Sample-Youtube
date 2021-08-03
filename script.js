// window.alert("This is an very important website. If you really want to continue, click on 'OK'.")

const main=document.querySelector(".main")
const like=document.querySelector("#like")
const dislike=document.querySelector("#dislike")
const share=document.querySelector("#share")
const save=document.querySelector("#save")
const subscribe=document.querySelector("#subscribe")

let good=true
like.addEventListener("click",
function(){
    if(good){
        like.style.backgroundColor="gray"
        dislike.style.backgroundColor="white"
        like.value="👍LIKED!!!"
        dislike.value="👎🏾DISLIKE"
        good=false
    }
    else{
        like.style.backgroundColor="white"
        like.value="👍🏾LIKE"
        good=true
    }
})

let deron=true
dislike.addEventListener("click",
function(){
    if(deron){
        dislike.style.backgroundColor="gray"
        like.style.backgroundColor="white"
        dislike.value="👎DISLIKED!!!"
        like.value="👍🏾LIKE"
        deron=false
    }
    else{
        dislike.style.backgroundColor="white"
        dislike.value="👎🏾DISLIKE"
        deron=true
    }
})

share.addEventListener("click",
function(){
    share.style.backgroundColor="gray"
    share.value="✨https://youtu.be/_4kHxtiuML0"
})

save.addEventListener("click",
function(){
    save.style.backgroundColor="gray"
    save.value="✨Saved!!!"
})

let light=true
subscribe.addEventListener("click",
function(){
    if(light){
        subscribe.style.backgroundColor="gray"
        subscribe.value="SUBSCRIBED!!!"
        light=false
    }
    else{
        subscribe.style.backgroundColor="red"
        subscribe.value="SUBSCRIBE"
        light=true
    }
})
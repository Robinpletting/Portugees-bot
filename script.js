async function send(){

let input = document.getElementById("input").value

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message: input
})
})

const data = await res.json()

document.getElementById("chat").innerHTML += "<p>"+data.reply+"</p>"

}

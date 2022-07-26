const sendbtn = document.getElementById('send-btn')

sendbtn.addEventListener('click', sendmsg)

function sendmsg (e){
    const input = document.querySelector("input")
    const chat = document.getElementById("chat")
    const p = document.createElement('p')
    p.innerText = input.value
    chat.appendChild(p)
    input.value = ("")
}
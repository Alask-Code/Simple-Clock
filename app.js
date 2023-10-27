
function formatedMinutes() {
    const date = new Date()
    if (date.getMinutes() < 10) {
        return "0" + date.getMinutes()
    } else {
        return date.getMinutes()
    }
}

function setTime() {
    const date = new Date()
    function getTime() {
        return `${date.getHours()}:${formatedMinutes()}`
    }
    const timeHolder = document.querySelector('p')
    timeHolder.innerText = getTime()
}
setTime()
setInterval(() => {
    setTime()
}, 1000)
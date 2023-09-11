function setTime() {
    function getTime() {
        const date = new Date()
        return `${date.getHours()}:${date.getMinutes()}`
    }
    const timeHolder = document.querySelector('p')
    timeHolder.innerText = getTime()
}
setTime()
setInterval(() => {
    setTime()
}, 1000)
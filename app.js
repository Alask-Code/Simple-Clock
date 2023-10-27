import { moonClock } from './scripts/moonClock.js'

window.addEventListener('DOMContentLoaded', () => {
    moonClock.updatePlaceholder(moonClock.formatedTime())
    setInterval(() => {
        moonClock.updatePlaceholder(moonClock.formatedTime())
    }, 1000)
})

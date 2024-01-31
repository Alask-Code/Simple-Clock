import { simpleClock } from './scripts/simpleClock.js'

window.addEventListener('DOMContentLoaded', () => {
    simpleClock.updatePlaceholder(simpleClock.formatedTime())
    setInterval(() => {
        simpleClock.updatePlaceholder(simpleClock.formatedTime())
    }, 1000)
})

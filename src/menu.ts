import { init } from './main'

const startBtn = document.getElementById('startBtn')!
const menuRoot = document.getElementById('menu-root')!

startBtn.addEventListener('click', () => {
	init(), (menuRoot.style.display = 'none')
})

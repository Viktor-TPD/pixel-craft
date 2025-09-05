import { init } from './main'
import { SeedBox } from './components/SeedBox'
import { setSeed } from './lib/utils/perlinNoise'

const modalContent = document.querySelector('.modal-body')
if (!modalContent) {
	throw new Error('Modal content not found')
}
const seedBox = new SeedBox(modalContent as HTMLElement)
const startBtn = document.getElementById('startBtn')!
const menuRoot = document.getElementById('menu-root')!

startBtn.addEventListener('click', () => {
	const seedValue = seedBox.getSeedValue()
	setSeed(seedValue)

	init()
	menuRoot.style.display = 'none'
})

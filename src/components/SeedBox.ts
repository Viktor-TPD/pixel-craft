export class SeedBox {
	private container: HTMLElement
	private inputElement: HTMLInputElement

	constructor(parentElement: HTMLElement) {
		this.container = this.createContainer()
		this.inputElement = this.createInput()

		this.container.appendChild(this.inputElement)

		parentElement.appendChild(this.container)
	}

	private createContainer(): HTMLElement {
		const container = document.createElement('div')
		container.className = 'seed-box-input-group'
		container.style.cssText = `
		display: flex;
		align-items: center;
		gap: 10px;
		`
		return container
	}

	private createInput(): HTMLInputElement {
		const input = document.createElement('input')
		input.type = 'number'
		input.min = '0'
		input.max = '99999'
		input.placeholder = 'Enter seed...'
		input.className = 'seed-input'
		return input
	}

	public getSeedValue(): number {
		const inputValue = this.inputElement.value.trim()

		if (inputValue === '') {
			return Math.floor(Math.random() * 100000)
		}

		const parsedValue = parseInt(inputValue, 10)
		return Math.max(0, Math.min(99999, parsedValue))
	}
}

import { makeAutoObservable } from 'mobx'

class DarkTheme {
	constructor() {
		makeAutoObservable(this)
	}

	changeIcon = ''

	changeTheme(icon = 'sun') {
		return icon === 'sun'
			? (this.changeIcon = 'moon')
			: (this.changeIcon = 'sun')
	}
}

export const darkTheme = new DarkTheme()

import { makeAutoObservable } from 'mobx'

class DarkTheme {
	changeIcon = ''

	constructor() {
		makeAutoObservable(this)
	}

	changeTheme(icon = 'sun') {
		return icon === 'sun'
			? (this.changeIcon = 'moon')
			: (this.changeIcon = 'sun')
	}
}

export const darkTheme = new DarkTheme()

import { makeAutoObservable } from 'mobx'

class DarkTheme {
  constructor() {
    makeAutoObservable(this)
  }

  currentIcon = ''

  getIcon() {
    return this.currentIcon
  }

  changeTheme(icon: string) {
    return icon === 'sun' ? (this.currentIcon = 'sun') : (this.currentIcon = 'moon')
  }
}

export const darkTheme = new DarkTheme()

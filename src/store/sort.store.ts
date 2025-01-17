import { makeAutoObservable } from 'mobx'

class Sort {
  constructor() {
    makeAutoObservable(this)
  }
}

export const sort = new Sort()

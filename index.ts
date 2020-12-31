import random from './template/default'

class DanceComment {
  orderNumber: number = -1
  cList: any[] = []
  list: any[] = random
  config = {
    time: 10000,
    useTemplate: true,
    template: [],
    orderPlay: true
  }

  constructor (option: {
    time: number,
    useTemplate: boolean,
    template: []
  }) {
    this.config = Object.assign({}, this.config, option)

    if (!this.config.useTemplate) {
      this.list = []
    }

    this.checkList(option && option.template)
  }

  init ():void {
    this.create()

    if (this.config.time && this.config.time >= 100) {
      setInterval(() => {
        this.clear()
        this.create()
      }, this.config.time)
    }
  }

  clear ():void {
    this.cList.forEach(item => {
      document.removeChild(item)
    })
  }

  create ():void {
    const getRandom: number = this.getNumber()
    const commList: [] = this.list[getRandom]
    const cList: any[] = []
    commList.forEach(item => {
      const comm: any = document.createComment(item)
      cList.push(comm)
      document.insertBefore(comm, document.querySelector('html'))
    })

    this.cList = cList
  }

  getNumber (): number {
    if (this.config.orderPlay) {
      this.orderNumber++
      if (this.orderNumber > this.list.length - 1) {
        this.orderNumber = 0
      }
      return this.orderNumber
    } else {
      return this.random(0, this.list.length - 1)
    }
  }

  checkList (list: any):void {
    if (!list) { return }
    for (let i = 0; i < list.length; i++) {
      if (!this.isArray(list[i])) {
        console.error('template is not Array -> template: [[String, String], [String, String]....]')
        continue
      }
      for (let j = 0; j < list[i].length; j++) {
        if (!this.isString(list[i][j])) {
          console.error('template is not String -> template: [[String, String], [String, String]....]')
          continue
        }
      }
      this.list.push(list[i])
    }
  }

  random (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  isArray (data: any): boolean {
    return Object.prototype.toString.call(data) === '[object Array]'
  }

  isString (data: any): boolean {
    return Object.prototype.toString.call(data) === '[object String]'
  }
}

export default DanceComment

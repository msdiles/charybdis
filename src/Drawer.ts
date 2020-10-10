import {IPoint, IVector} from "./interfaces/geometry"

class Drawer {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  fps: number = 0
  fpsPrev: number = 0
  time: number = 0
  prevTime: number = 0
  objects: any[] = []

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D
    this.initialize()
  }

  private initialize() {
    this.ctx.canvas.width = window.innerWidth
    this.ctx.canvas.height = window.innerHeight
    this.clearFrame()
  }

  private clearFrame() {
    this.ctx.fillStyle = "#000000"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  prerender() {
    this.showFPS()
  }

  render() {
    const update = () => {
      this.clearFrame()
      this.objects.forEach((func) => {
        func.call(this)
      })
      requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)
  }

  showFPS() {
    this.time = this.prevTime = performance.now()
    this.objects.push(() => {
      this.time = performance.now()
      console.log(this.fps)
      if (this.time - this.prevTime >= 1000) {
        this.fpsPrev = this.fps
        this.fps = 0
        this.prevTime = this.time
      } else {
        this.fps += 1
      }
      this.ctx.font = "12px serif"
      this.ctx.fillStyle = "#8ffe09"
      this.ctx.fillText(this.fpsPrev.toString(), 1800, 30)

    })
  }


}

export default Drawer

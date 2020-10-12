import Entity from "../Entity"
import {IPoint} from "../interfaces/geometry"
import Drawer from "../Drawer"
import Projector from "../Projector"

class Point extends Entity {
  coordinates: [IPoint] | [] = []

  constructor(center: IPoint, canvas: HTMLCanvasElement) {
    super(center, canvas, [center])

  }

  draw(x: number, y: number) {
    if (this.coordinates.length) {
      this.ctx.fillStyle="red"
      this.ctx.fillRect(x, y, 1, 1)
    }
  }

  findProjections(points: [A: IPoint, B: IPoint, C: IPoint]) {
    this.coordinates = [Projector.findProjectionOfPoint(points[0], points[1], points[2])]
    console.log(this.coordinates)
  }
}


export default Point

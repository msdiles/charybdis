import {IPoint} from "./interfaces/geometry"

abstract class Entity {
  __coordinates: IPoint[]
  coordinates: [IPoint] | [] = []
  center: IPoint
  ctx: CanvasRenderingContext2D

  constructor(center: IPoint, canvas: HTMLCanvasElement,coordinates:IPoint[]) {
    this.center = center
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    this.__coordinates=coordinates
  }

  abstract draw(x:number,y:number): void

  abstract findProjections(points: IPoint[]): void
}

export default Entity

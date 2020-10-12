import Entity from "./Entity"
import {IPoint, IVector} from "./interfaces/geometry"
import Screen from "./Screen"
import Vector from "./Vector"

class Camera {
  center : IPoint
  distance: number
  screen: Screen
  cameraPoint: IPoint
  normalVector: IVector

  constructor(point: IPoint, distance: number) {
    this.center = point
    this.distance = distance
    this.screen = new Screen(
      Vector.createPoint(400 , 400, 400),
      Vector.createPoint(880, 1040, 400),
      Vector.createPoint(400, 400, -200),
      Vector.createPoint(880, 1040, -200)
    )

    this.normalVector = Vector.vectorNormalization(this.screen.planeEquation)
    this.cameraPoint = this.defineCameraPoint()
  }

  private defineCameraPoint(): IPoint {
    return {
      x: this.screen.midPoint.x + this.distance * this.normalVector.x,
      y: this.screen.midPoint.y + this.distance * this.normalVector.y,
      z: this.screen.midPoint.z + this.distance * this.normalVector.z
    }

  }
}

export default Camera

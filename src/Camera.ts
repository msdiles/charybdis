import Entity from "./Entity"
import {IPoint, IVector} from "./interfaces/geometry"
import Screen from "./Screen"
import Vector from "./Vector"

class Camera extends Entity {

  distance: number
  screen: Screen
  cameraPoint: IPoint
  normalVector: IVector

  constructor(point: IPoint, distance: number) {
    super(point.x, point.y, point.z)
    this.distance = distance
    this.screen = new Screen(
      Vector.createPoint(0, 0, 100),
      Vector.createPoint(1920, 0, 100),
      Vector.createPoint(0, -1080, 100),
      Vector.createPoint(1920, -1080, 100)
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

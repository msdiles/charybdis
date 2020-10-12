import {IPoint} from "./interfaces/geometry"
import Vector from "./Vector"

class Screen {
  width: number
  height: number
  midPoint: IPoint
  planeEquation: IPoint

  constructor(S1: IPoint, S2: IPoint, S3: IPoint, S4: IPoint) {
    this.width = this.defineWidth(S1, S2)
    this.height = this.defineHeight(S1, S3)
    this.midPoint = this.defineMidPoint(S2, S3)
    this.planeEquation = this.definePlaneEquation(
      S1,
      S2,
      this.midPoint
    )
  }

  private defineWidth(A: IPoint, B: IPoint) {
    return Vector.vectorLength(A, B)
  }

  private defineHeight(A: IPoint, C: IPoint) {
    return Vector.vectorLength(A, C)
  }

  private defineMidPoint(A: IPoint, B: IPoint) {
    return Vector.vectorMidPoint(A, B)
  }

  private definePlaneEquation(A: IPoint, B: IPoint, C: IPoint): IPoint {
    return Vector.vectorPlaneEquation(A, B, C)
  }

}


export default Screen

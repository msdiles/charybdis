import {IPoint} from "./interfaces/geometry"
import Vector from "./Vector"

class Projector {
  static findProjectionOfPoint(A: IPoint, B: IPoint, P: IPoint): IPoint {
    let x, y, z: [number, number]
    x = [B.x - A.x, A.x]
    y = [B.y - A.y, A.y]
    z = [B.z - A.z, A.z]
    let k = (1 - P.x * x[1] - P.y * y[1] - P.z * z[1]) / (P.x * (x[0]) + P.y * (y[0]) + P.z * (z[0]))
    return {
      x: +(k * x[0] + x[1]).toFixed(2),
      y: +(k * y[0] + y[1]).toFixed(2),
      z: +(k * z[0] + z[1]).toFixed(2)
    }
  }

  static findCoordinate(A: IPoint, B: IPoint, angle: number) {
    return Vector.vectorLength(A,B) *angle
  }
}

export default Projector

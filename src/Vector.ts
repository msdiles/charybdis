import {IPoint, IVector,} from "./interfaces/geometry"

class Vector {
  static createPoint(x: number, y: number, z: number): IPoint {
    return {x, y, z}
  }

  static vectorLength(vector: IVector): number
  static vectorLength(A: IPoint, B: IPoint): number
  static vectorLength(A: any, B?: IPoint): number {
    if (B) {
      return Math.sqrt((A.x + B.x) ** 2 + (A.y + B.y) ** 2 + (A.z + B.z) ** 2)
    } else {
      return Math.sqrt((A.x) ** 2 + (A.y) ** 2 + (A.z) ** 2)
    }
  }


  static vectorMidPoint(A: IPoint, B: IPoint): IPoint {
    return {x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, z: (A.z + B.z) / 2}
  }

  static vectorPlaneEquation(A: IPoint, B: IPoint, C: IPoint): IPoint {
    let detA, detB, detC: number

    detA = this.vectorDeterminant(B.y - A.y, C.y - B.y, B.z - A.z, C.z - B.z)
    detB = -this.vectorDeterminant(B.x - A.x, C.x - B.x, B.z - A.z, C.z - B.z)
    detC = this.vectorDeterminant(B.x - A.x, C.x - B.x, B.y - A.y, C.y - B.y)

    const sum = (A.x * detA + A.y * detB + A.z * detC)
    return {x: detA / sum, y: detB / sum, z: detC / sum}
  }

  //| a  b |
  //| c  d |
  static vectorDeterminant(a: number, b: number, c: number, d: number): number {
    return a * d - c * b
  }

  static vectorNormalization(vector: IVector): IVector {
    const vectorLength = this.vectorLength(vector)
    return {
      x: +(vector.x / vectorLength).toFixed(5),
      y: +(vector.y / vectorLength).toFixed(5),
      z: +(vector.z / vectorLength).toFixed(5)
    }
  }
}

export default Vector

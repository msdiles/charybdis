import Drawer from "./Drawer"
import EngineCore from "./EngineCore"
import Camera from "./Camera"
import Screen from "./Screen"
import Vector from "./Vector"
import Entity from "./Entity"
import Point from "./Entities/Point"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
// const drawer = new Drawer(canvas)
const engine = new EngineCore(Vector.createPoint(0, 0, 0), 50, canvas,
  [new Point(Vector.createPoint(0, 80, 500),canvas)])


console.log("Height:", engine.camera.screen.height)
console.log("Width:", engine.camera.screen.width)
console.log("MidPoint:", engine.camera.screen.midPoint)

console.log("PlaneEquation:", engine.camera.screen.planeEquation)

console.log("NormalVector:", engine.camera.normalVector)
console.log("CameraPoint:", engine.camera.cameraPoint)


engine.start()

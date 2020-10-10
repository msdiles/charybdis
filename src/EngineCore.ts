import Camera from "./Camera"
import Vector from "./Vector"
import Drawer from "./Drawer"
import {IPoint} from "./interfaces/geometry"

class EngineCore {
  camera: Camera
  drawer : Drawer

  constructor(cameraPoint:IPoint,distance:number,canvas:HTMLCanvasElement) {
    this.camera = new Camera(cameraPoint, distance)
    this.drawer = new Drawer(canvas)
  }

   start(){
    this.drawer.prerender()
    this.drawer.render()
  }
}

export default EngineCore

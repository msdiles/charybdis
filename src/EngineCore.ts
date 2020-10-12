import Camera from "./Camera"
import Vector from "./Vector"
import Drawer from "./Drawer"
import {IPoint} from "./interfaces/geometry"
import Entity from "./Entity"
import Point from "./Entities/Point"
import Projector from "./Projector"

class EngineCore {
  camera: Camera
  drawer: Drawer
  entities: [Entity | Point]

  constructor(cameraPoint: IPoint, distance: number, canvas: HTMLCanvasElement, entities: [Entity]) {
    this.camera = new Camera(cameraPoint, distance)
    this.drawer = new Drawer(canvas)
    this.entities = entities
  }

  start() {
    this.drawer.predraw(this.entities.map(ent => this.render(ent)))
    this.drawer.draw()
  }

  private render(ent: Entity | Point) {
    ent.findProjections([ent.__coordinates[0], this.camera.cameraPoint, this.camera.screen.planeEquation])
    const cosU = Vector.cosBetweenTwoVectors(Vector.createPoint(400, 400, 400),
      Vector.createPoint(880, 1040, 400), ent.coordinates[0] as IPoint)
    const cosV = Vector.cosBetweenTwoVectors(Vector.createPoint(400, 400, 400),
      Vector.createPoint(400, 400, -200), ent.coordinates[0] as IPoint)
    if (cosU > 0 && cosV > 0) {
      const m = Math.round(Projector.findCoordinate(Vector.createPoint(400, 400, 400), ent.coordinates[0] as IPoint, cosU))
      const n = Math.round(Projector.findCoordinate(Vector.createPoint(400, 400, 400), ent.coordinates[0] as IPoint, cosV))
      console.log(m, n)
      if (m < this.camera.screen.width && n < this.camera.screen.height)
        return () => {
          ent.draw(m, n)
        }

    }
    return null
  }
}

export default EngineCore

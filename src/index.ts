import { Vector3 } from 'ezvector';

export class Mesh {
  vertices: Array<Vector3>;
  triangles: Array<number>;
  normals: Array<number>;

  constructor(
    vertices: Array<Vector3>,
    triangles: Array<number>,
    normals: Array<number>,
  ) {
    this.vertices = vertices;
    this.triangles = triangles;
    this.normals = normals;
  }
}

export class Texture {
  image: ImageBitmap;
  width: number;
  height: number;

  constructor(image: ImageBitmap) {
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }
}

export class Material {
  albedo: Texture;

  constructor(albedo: Texture) {
    this.albedo = albedo;
  }
}

export class Transform {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;

  constructor(
    position: Vector3 = new Vector3(0, 0, 0),
    rotation: Vector3 = new Vector3(0, 0, 0),
    scale: Vector3 = new Vector3(1, 1, 1),
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

interface IComponent {
  start(): void;
  update(): void;
}

export class Object {
  mesh: Mesh;
  material: Material;
  transform: Transform;
  components: Array<IComponent>;

  constructor(
    mesh: Mesh,
    material: Material,
    transform: Transform = new Transform(),
    components: Array<IComponent> = new Array<IComponent>(),
  ) {
    this.mesh = mesh;
    this.material = material;
    this.transform = transform;
    this.components = components;
  }
}

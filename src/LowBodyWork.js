/**
 * LowBodyWork
 * @constructor
 */

  class LowBodyWork extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.front = new LowVehicleFront(scene);
        this.sides = new MyBoxSides(scene);
		this.floor = new Plane(scene, 50);
        this.triangle = new MySpecialTriangle(scene);
  	};



    display() {

        this.scene.pushMatrix();
        this.scene.scale(4.2, 1.1, 1.9);
        this.scene.translate(0, 0.5, 0);
        this.sides.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(4.2, 1, 1.9);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, 0, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0)
        this.scene.scale(1.9, 0, 0.1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, 1.1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1.9, 0, 0.1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.front.display();
        this.scene.popMatrix();
    }
}
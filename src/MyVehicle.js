/**
 * MyVehicle
 * @constructor
 */

  class MyVehicle extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.lowerBodyWork = new MyUnitCubeQuad(scene);
        this.upperBodyWork = new TopBodyWork(scene);

        this.wheel = new Wheel(scene);

  	};

    display()
    {
            this.scene.pushMatrix();
        this.scene.scale(4.2, 1.1, 1.9);
        this.scene.translate(0.5, 0.5, 0.5);
        this.lowerBodyWork.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2, 1.1, 0);
        this.upperBodyWork.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0.9, 0, 1.9);
        this.wheel.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(3.3, 0, 1.9);
        this.wheel.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0.9, 0, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.wheel.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(3.3, 0, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.wheel.display();
            this.scene.popMatrix();
    };


 }

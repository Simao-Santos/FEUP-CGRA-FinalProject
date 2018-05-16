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
        this.upperBodyWork = new MyUnitCubeQuad(scene);

        this.wheel = new MyCylinder(scene, 20, 1);

  	};

    display()
    {
            this.scene.pushMatrix();
        this.scene.scale(1.80, 0.95, 4.30);
        this.lowerBodyWork.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0.95, 0);
        this.scene.scale(1.80, 0.95, 4.00);
        this.upperBodyWork.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0.4, -0.4, 1.5);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.3,0.3,1);
        this.wheel.display();
            this.scene.popMatrix();

    };


 }

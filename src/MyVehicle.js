/**
 * MyVehicle
 * @constructor
 */

  class MyVehicle extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.lowerBodyWork = new LowBodyWork(scene);
        this.upperBodyWork = new TopBodyWork(scene);
        this.wheel = new Wheel(scene);

        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.velocity = 0;
        this.angle = 0;


  	};

    display()
    {
        this.scene.pushMatrix();
    this.scene.translate(0, 0.5, 0);
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.angle, 0, 1, 0);

        this.scene.pushMatrix();
    this.lowerBodyWork.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
    this.scene.translate(-0.1, 1.1, -0.95);
    this.upperBodyWork.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

    //Back Right Wheel
    this.scene.translate(-1.2, 0, 0.95);
    this.wheel.display();
        this.scene.popMatrix();

    //Front Right Wheel
        this.scene.pushMatrix();
    this.scene.translate(1.2, 0, 0.95);
    this.wheel.display();
        this.scene.popMatrix();

    //Back Left Wheel
        this.scene.pushMatrix();
    this.scene.translate(-1.2, 0, -1.15);
    this.wheel.display();
        this.scene.popMatrix();

    //Front Left Wheel
        this.scene.pushMatrix();
    this.scene.translate(1.2, 0, -1.15);
    this.wheel.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    };

    updateCoordinates(deltaTime) {

        this.x += this.velocity * Math.cos(this.angle);
        //this.y += this.velocity;
        this.z += this.velocity * - Math.sin(this.angle);

    };



 }

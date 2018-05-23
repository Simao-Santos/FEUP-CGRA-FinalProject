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
        this.wheel_right = new Wheel(scene);
        this.wheel_left = new Wheel(scene);
        this.mudguard = new MudGuard(scene);

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
    this.scene.translate(0, 1.1, 0);
    this.upperBodyWork.display();
        this.scene.popMatrix();


    //Back Right Wheel
        this.scene.pushMatrix();
    this.scene.translate(-1.2, 0, 0.95);

        this.scene.pushMatrix();
    this.mudguard.display();
        this.scene.popMatrix();
    this.wheel_right.display();
        this.scene.popMatrix();

    //Front Right Wheel
        this.scene.pushMatrix();
    this.scene.translate(1.2, 0, 0.95);

        this.scene.pushMatrix();
    this.mudguard.display();
        this.scene.popMatrix();

    this.wheel_right.display();
        this.scene.popMatrix();

    //Back Left Wheel
        this.scene.pushMatrix();
    this.scene.translate(-1.2, 0, -0.95);
    this.scene.rotate(Math.PI, 0, 1, 0);

        this.scene.pushMatrix();
    this.mudguard.display();
        this.scene.popMatrix();

    this.wheel_left.display();
        this.scene.popMatrix();

    //Front Left Wheel
        this.scene.pushMatrix();
    this.scene.translate(1.2, 0, -0.95);
    this.scene.rotate(Math.PI, 0, 1, 0);

        this.scene.pushMatrix();
    this.mudguard.display();
        this.scene.popMatrix();
    this.wheel_left.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    };

    updateCoordinates(deltaTime) {

        this.x += this.velocity * Math.cos(this.angle);
        //this.y += this.velocity;
        this.z += this.velocity * - Math.sin(this.angle);

    };

    updateWheelSpin(deltaTime) {

        this.wheel_left.setWheelSpinAngle(this.velocity / (Math.PI / 4));
        this.wheel_right.setWheelSpinAngle(-this.velocity / (Math.PI / 4));

    };



 }

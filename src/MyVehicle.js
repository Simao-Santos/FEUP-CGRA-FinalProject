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
        this.fender = new MyFender(scene);
        this.bigLight = new MyRoundLight(scene);
        this.smallLight = new MySmallLight(scene);


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

        this.displayLowBodywork();
        this.displayTopBodyWork();
        this.displayLights();
        this.displayFenders();
        this.displayWheels();

        this.scene.popMatrix();
    };

    displayTopBodyWork() {

        this.scene.pushMatrix();
    this.scene.translate(0, 1.1, 0);
    this.upperBodyWork.display();
        this.scene.popMatrix();

    }

    displayLowBodywork() {

        this.lowerBodyWork.display();

    }

    displayFenders() {

        //Back Right Wheel
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, 0.95);
        this.fender.display();
            this.scene.popMatrix();

        //Front Right Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, 0.95);
        this.fender.display();
            this.scene.popMatrix();

        //Back Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, -0.95);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.fender.display();
            this.scene.popMatrix();

        //Front Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, -0.95);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.fender.display();
            this.scene.popMatrix();

    }

    displayWheels() {

        //Back Right Wheel
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, 0.95);
        this.wheel_right.display();
            this.scene.popMatrix();

        //Front Right Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, 0.95);
        this.wheel_right.display();
            this.scene.popMatrix();

        //Back Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, -0.95);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.wheel_left.display();
            this.scene.popMatrix();

        //Front Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, -0.95);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.wheel_left.display();
            this.scene.popMatrix();

    }


    displayLights() {

            this.scene.pushMatrix();
        this.scene.translate(2.15, 0.4, 0.6);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, -1, 0);
        this.bigLight.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2.15, 0.4, -0.6);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, 1, 0);
        this.bigLight.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2.15, 0.65, 0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, -1, 0);
        this.smallLight.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2.15, 0.65, -0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, 1, 0);
        this.smallLight.display();
            this.scene.popMatrix();

    }

    updateCoordinates(deltaTime) {

        this.x += this.velocity * Math.cos(this.angle);
        this.z += this.velocity * - Math.sin(this.angle);

    };

    updateWheelSpin(deltaTime) {

        this.wheel_left.setWheelSpinAngle(this.velocity / (Math.PI / 4));
        this.wheel_right.setWheelSpinAngle(-this.velocity / (Math.PI / 4));

    };



 }

/**
 * MyVehicle
 * @constructor
 */

  class MyVehicle extends CGFobject
  {
  	constructor(scene, topBodyworkTexture, lowBodyworkTexture, wheelTexture, fenderTexture)
  	{
        super(scene);

        this.blackText = new CGFappearance(this.scene);
        this.blackText.setAmbient(0, 0, 0, 1);
        this.blackText.setDiffuse(0, 0, 0, 1);
        this.blackText.setSpecular(0, 0, 0, 1);

        this.whiteText = new CGFappearance(this.scene);
        this.whiteText.setAmbient(1, 1, 1, 1);
        this.whiteText.setDiffuse(1, 1, 1, 1);
        this.whiteText.setSpecular(1, 1, 1, 1);
        this.whiteText.setShininess(40);

        this.goldText = new CGFappearance(this.scene);
        this.goldText.setAmbient(1, 0.84, 0, 1);
        this.goldText.setDiffuse(1, 0.84, 0, 1);
        this.goldText.setSpecular(1, 0.84, 0, 1);
        this.goldText.setShininess(40);

        this.redText = new CGFappearance(this.scene);
        this.redText.setAmbient(1, 0, 0, 1);
        this.redText.setDiffuse(1, 0, 0, 1);
        this.redText.setSpecular(1, 0, 0, 1);
        this.redText.setShininess(40);

        this.disneyText = new CGFappearance(this.scene);
        this.disneyText.loadTexture("../resources/images/final_mickey.png");
        this.disneyText.setAmbient(0.5, 0.5, 0.5, 1);
        this.disneyText.setDiffuse(0.8, 0.8, 0.8, 1);
        this.disneyText.setSpecular(0.3, 0.3, 0.3, 1);
        this.disneyText.setShininess(150);

        this.vehicleAppearances = [this.blackText, this.whiteText, this.goldText, this.redText, this.disneyText];

        this.lowBodyworkTexture = lowBodyworkTexture;
        this.topBodyworkTexture = topBodyworkTexture;
        this.wheelTexture = wheelTexture;
        this.fenderTexture = fenderTexture;

        this.lowerBodyWork = new LowBodyWork(scene, this.vehicleAppearances, lowBodyworkTexture);
        this.upperBodyWork = new TopBodyWork(scene, this.vehicleAppearances, topBodyworkTexture);
        this.wheel_back = new Wheel(scene, this.vehicleAppearances, wheelTexture);
        this.wheel_front = new Wheel(scene, this.vehicleAppearances, wheelTexture);
        this.fender = new MyFender(scene, this.vehicleAppearances, fenderTexture);
        this.bigLight = new MyRoundLight(scene);
        this.smallLight = new MySmallLight(scene);
        this.windows = new MyWindows(scene);

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

        this.scene.pushMatrix();
    this.scene.translate(0, 1.1, 0);
    this.windows.display();
        this.scene.popMatrix();

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

        //Back Right Fender
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, 0.95);
        this.fender.display();
            this.scene.popMatrix();

        //Front Right Fender
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, 0.95);
        this.fender.display();
            this.scene.popMatrix();

        //Back Left Fender
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, -0.95);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.fender.display();
            this.scene.popMatrix();

        //Front Left Fender
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
        this.wheel_back.display();
            this.scene.popMatrix();

        //Front Right Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, 0.95);
        this.wheel_front.display();
            this.scene.popMatrix();

        //Back Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, -1.15);
        this.wheel_back.display();
            this.scene.popMatrix();

        //Front Left Wheel
            this.scene.pushMatrix();
        this.scene.translate(1.2, 0, -1.15);
        this.wheel_front.display();
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
        this.scene.translate(2.13, 0.65, 0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, -1, 0);
        this.smallLight.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2.13, 0.65, -0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, 1, 0);
        this.smallLight.display();
            this.scene.popMatrix();

    }

    updateCoordinates(deltaTime) {

        this.x += this.velocity * deltaTime * Math.cos(this.angle);
        this.z += this.velocity * deltaTime * -Math.sin(this.angle);

    };

    updateWheelSpin(deltaTime) {

        this.wheel_back.setWheelSpinAngle(this.velocity * deltaTime * Math.PI / 2);
        this.wheel_front.setWheelSpinAngle(this.velocity * deltaTime * Math.PI / 2);

    };

    updateCarAngle(deltaTime) {
        this.angle += this.wheel_front.stir_angle * this.velocity * deltaTime * 0.4 ;
    }

    updateTextures(topBodyworkTexture, lowBodyworkTexture, wheelTexture, fenderTexture){

        this.lowerBodyWork.update(lowBodyworkTexture);
        this.upperBodyWork.update(topBodyworkTexture);
        this.wheel_back.update(wheelTexture);
        this.wheel_front.update(wheelTexture);
        this.fender.update(fenderTexture);

    }
 }

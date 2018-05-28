/*
* MyCrane
* @constructor
*/

class MyCrane extends CGFobject
{

    constructor(scene)
    {
        super(scene);

        this.base = new MyCraneBase(scene);
        this.mainArm = new MyCraneMainArm(scene);
        this.secondArm = new MyCraneSecondArm(scene);

        this.rustyText = new CGFappearance(this.scene);
        this.rustyText.loadTexture("../resources/images/rusted_metal.jpg");
        this.rustyText.setAmbient(0.5, 0.5, 0.5, 1);
        this.rustyText.setDiffuse(0.8, 0.8, 0.8, 1);
        this.rustyText.setSpecular(0.3, 0.3, 0.3, 1);
        this.rustyText.setShininess(70);


        this.rotationAngle = 0;

    };
    
    /*This function can receive the car as an argument, and pass it to the secondArm.display() function
    * The crane has a base, a main arm (a quadrangular prism and a toped-cylinder to make a gear like structure)
    * and a second arm, similar to the main on buut smalled
    */
    display(pulledCar) {

        //Non-rotating base of the crane
            this.scene.pushMatrix();
        this.rustyText.apply();
        this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        //Side rotation of the crane
         this.scene.rotate(this.rotationAngle, 0, 1, 0);

            this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.rotate(-Math.PI * 2.5 / 4, 1, 0, 0);

        //Main arm of the crane
            this.scene.pushMatrix();
        this.rustyText.apply();
        this.mainArm.display();
            this.scene.popMatrix();

        //Seocnd arm of the crane
            this.scene.pushMatrix();
        this.rustyText.apply();
        this.secondArm.display(pulledCar);
            this.scene.popMatrix();

            this.scene.popMatrix();
            this.scene.popMatrix();


    };

    //Updates the side rotation angle (Animation)
    updateRotationAngle(deltaTime, angle) {

        if(deltaTime < 10)
            this.rotationAngle += angle * deltaTime * Math.PI * 2;
    };


};

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
        this.magnetAndWire = new MyCraneMagnet(scene);


        this.rotationAngle = 0;

    };

    display() {

            this.scene.pushMatrix();
        this.scene.rotate(this.rotationAngle, 0, 1, 0);

            this.scene.pushMatrix();
        this.scene.translate(0, 5.7, -5.2);
        this.magnetAndWire.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
       this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.rotate(-Math.PI * 2.5 / 4, 1, 0, 0);
            this.scene.pushMatrix();
        this.mainArm.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 7.55);
        this.secondArm.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

            this.scene.popMatrix();

    };

    updateRotationAngle(deltaTime, angle) {

        console.log(deltaTime);
        if(deltaTime < 10)
            this.rotationAngle += angle * deltaTime * Math.PI * 2;
    }


};

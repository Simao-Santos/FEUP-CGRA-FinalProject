/*
* MyCraneMagnet
* @constructor
*/

class MyCraneMagnet extends CGFobject
{

    constructor(scene)
    {
        super(scene);

        this.cylinder = new MyCylinder(scene, 30, 30);
        this.base = new MyCylinder(scene, 30, 30);
        this.top = new MyCircle(scene, 30);

        this.rustyText = new CGFappearance(this.scene);
        this.rustyText.loadTexture("../resources/images/rusted_metal.jpg");
        this.rustyText.setAmbient(0.5, 0.5, 0.5, 1);
        this.rustyText.setDiffuse(0.8, 0.8, 0.8, 1);
        this.rustyText.setSpecular(0.3, 0.3, 0.3, 1);
        this.rustyText.setShininess(70);

        this.compensationAngle =  -Math.PI / 8;

    };

    display(pulledCar) {

            this.scene.pushMatrix();
        this.scene.rotate(this.compensationAngle, 1, 0, 0);
        this.scene.translate(0, -3, 0);
        this.scene.rotate(Math.PI / 2, -1, 0, 0);

        if(pulledCar != undefined){

            this.scene.pushMatrix();
            this.scene.translate(0, -4.9, -2.6);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.rotate(Math.PI, 0, 1, 0);
            pulledCar.display();
            this.scene.popMatrix();

        }
        
        this.rustyText.apply();
            this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.1);
        this.scene.scale(0.03, 0.03, 3);
        this.cylinder.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(1.3, 1.3, 0.1);
        this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.1);
        this.scene.scale(1.3, 1.3, 1);
        this.top.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(1.3, 1.3, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.top.display();
            this.scene.popMatrix();


            this.scene.popMatrix();
    };

    updateCompensationAngle(deltaTime, angle) {
        this.compensationAngle += angle * deltaTime * Math.PI * 2;
    }


}

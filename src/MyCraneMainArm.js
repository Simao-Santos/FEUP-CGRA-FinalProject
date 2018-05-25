/*
* MyCraneMainArm
* @constructor
*/

class MyCraneMainArm extends CGFobject
{

    constructor(scene)
    {
        super(scene);

        this.base = new MyCylinder(scene, 30, 30);
        this.top = new MyCircle(scene, 30);
        this.arm = new MyPrism(scene, 4, 30);
        this.armTop = new MyCircle(scene, 4);

    };

    display() {

            this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 8, 1, 0, 0);

            this.scene.pushMatrix();
        this.scene.scale(0.8, 0.8, 0.5);
        this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(0.8, 0.8, 1);
       this.top.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

            this.scene.pushMatrix();

            this.scene.pushMatrix();

        this.scene.translate(0.05, 0, 7.55);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);

            this.scene.pushMatrix();
        this.scene.scale(0.65, 0.65, 0.22);
       this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.22);
        this.scene.scale(0.65, 0.65, 1);
        this.top.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.65, 0.65, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.top.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

        this.scene.scale(0.3, 0.3, 7);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.armTop.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.armTop.display();
            this.scene.popMatrix();

        this.arm.display();
            this.scene.popMatrix();

    };



}

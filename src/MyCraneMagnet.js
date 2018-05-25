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

    };

    display() {

            this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, -1, 0, 0);

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.1);
        this.scene.scale(0.03, 0.03, 2.5);
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

    }


}

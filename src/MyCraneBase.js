/**
 * MyCraneBase
 * @constructor
 */
class MyCraneBase extends CGFobject
{

    constructor(scene)
    {
        super(scene);

        this.base = new MyCylinder(scene, 30, 30);
        this.top = new MyCircle(scene, 30);

    };

    //The base is made with a cylinder and a circle as the top
    display() {

            this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);

            this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1);
        this.base.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.scene.scale(1.5, 1.5, 1);
        this.top.display();
            this.scene.popMatrix();

    };


};

/**
* MyRoundLight
* @constructor
*/

class MyRoundLight extends CGFobject
{
    constructor(scene) {
        super(scene);

        this.light = new MySemisphere(scene, 30, 30);

    };

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.05);
        this.light.display();
        this.scene.popMatrix();

    };

}

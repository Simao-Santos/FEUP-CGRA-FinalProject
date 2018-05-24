/**
* MyRoundLight
* @constructor
*/

class MyRoundLight extends CGFobject
{
    constructor(scene) {
        super(scene);

        this.light = new MyCircle(scene, 30);

        this.texture = new CGFappearance(this.scene);
        this.texture.loadTexture("../resources/images/biglight.png");
        this.texture.setAmbient(0.5, 0.5, 0.5, 1);
        this.texture.setDiffuse(1, 1, 1, 1);
        this.texture.setSpecular(1, 1, 1, 1);
        this.texture.setShininess(300);


    };

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.05);
        this.texture.apply();
        this.light.display();
        this.scene.popMatrix();

    };

}

/**
* MySmallLight
* @constructor
*/

class MySmallLight extends CGFobject
{
    constructor(scene) {
        super(scene);

        this.light = new MySemisphere(scene, 30, 30);

        this.texture = new CGFappearance(scene);
        this.texture.setAmbient(1, 0.40, 0, 1);
        this.texture.setDiffuse(1, 0.40, 0, 1);
        this.texture.setSpecular(1, 0.40, 0, 1);
        this.texture.setShininess(200);

    };

    //This small light is a long semisphere
    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.05, 0.05, 0.1);
        this.texture.apply();
        this.light.display();
        this.scene.popMatrix();

    };

}

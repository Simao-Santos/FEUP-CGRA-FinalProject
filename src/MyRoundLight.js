/**
* MyRoundLight
* @constructor
*/

class MyRoundLight extends CGFobject
{
    constructor(scene) {
        super(scene);

        this.light = new MyCylinder(scene, 30, 30);

        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.5, 0.5, 0.5, 1);
        this.texture.setDiffuse(0.5, 0.5, 0.5, 1);
        this.texture.setSpecular(0.5, 0.5, 0.5, 1);
        this.texture.setShininess(300);


    };

    //Round Car Light made of a cylinder
    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.05);
        this.texture.apply();
        this.light.display();
        this.scene.popMatrix();

    };

}

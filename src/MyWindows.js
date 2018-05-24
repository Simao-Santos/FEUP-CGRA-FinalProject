/*
* MyWindows
* @constructor
*/

class MyWindows extends CGFobject
{

    constructor(scene) {

        super(scene);

        this.front_window = new MyTrapezoid(scene, 1.6, 0.1, 0.1, 0.15, 0.915);
        this.leftSide_smallWindow = new MyTrapezoid(scene, 1, 0.13, 0, 0.09, 0.9);
        this.leftSide_bigWindow = new MyTrapezoid(scene, 2.7, 0, 0, 0.09, 0.9);
        this.rightSide_smallWindow = new MyTrapezoid(scene, 1, 0, 0.13, 0.09, 0.9);
        this.rightSide_bigWindow = new MyTrapezoid(scene, 2.7, 0, 0, 0.09, 0.9);
        this.back_window = new MyTrapezoid(scene, 1.5, 0.1, 0.1, 0, 0.9);

        this.windowAppearance = new CGFappearance(this.scene);
        this.windowAppearance.loadTexture("../resources/images/window_notEdited.jpg");
        this.windowAppearance.setAmbient(0.5,0.5,0.5,1);
        this.windowAppearance.setDiffuse(0.8,0.8,0.8,1);
        this.windowAppearance.setSpecular(1, 1, 1, 1);
        this.windowAppearance.setShininess(120);

    };

    display() {

            this.scene.pushMatrix();
            this.scene.translate(0, 0.05, 0);
            this.windowAppearance.apply();

            this.scene.pushMatrix();
        this.scene.translate(2.105, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.front_window.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(-2.105, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, -1, 0);
        this.back_window.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, 0.955);

            this.scene.pushMatrix();
        this.leftSide_bigWindow.display()
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(2.0, 0, 0);
        this.leftSide_smallWindow.display();
            this.scene.popMatrix();

            this.scene.popMatrix();
            this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.955);
        this.scene.rotate(Math.PI, 0, 1, 0);

            this.scene.pushMatrix();
        this.rightSide_bigWindow.display()
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(-2.0, 0, 0);
        this.rightSide_smallWindow.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

            this.scene.popMatrix();

    };
};

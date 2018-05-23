/**
* LowVehicleFront
* @constructor
*/

class LowVehicleFront extends CGFobject
{
    constructor(scene) {
        super(scene);

        this.halfcylinder = new MyCylinder(scene, 4, 10, 2);
        this.light = new MySemisphere(scene, 30, 30);


    };

    //The sides come from a QuadrangularPrism, with a 2 unit diagonal and 1 unit high
    display() {

        this.scene.pushMatrix();
        this.scene.translate(2.1, 1.1, 0);
        this.scene.scale(1, 1.1, 1);
        this.scene.rotate(Math.PI / 2, 0, 0, -1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1.9 / 2, 0.1, 1);
        this.halfcylinder.display();
        this.scene.popMatrix()

        this.scene.pushMatrix();
        this.scene.translate(2.2, 0.4, 0.6);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, -1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.05);
        this.light.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.2, 0.4, -0.6);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.05);
        this.light.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.2, 0.65, 0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, -1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.05, 0.05, 0.1);
        this.light.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.2, 0.65, -0.8);
        this.scene.rotate(Math.atan(0.1 / Math.sin(Math.PI / 4)), 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.05, 0.05, 0.1);
        this.light.display();
        this.scene.popMatrix();

    };

    /*constructor(scene)
    {
    super(scene);

    this.slices = 30;
    this.display_slices = 5;
    this.scale_z;
    this.alpha = (Math.PI * 2 / this.slices) * this.display_slices;
    this.calculateScale(this.slices, this.display_slices);
    this.cylinder = new MyCylinder(scene, this.slices, 10, this.display_slices);

};

calculateScale(slices, display_slices) {

var beta = this.alpha / 2;
var width = 2 * Math.sin(beta);

this.scale_z = 1.9 / width;
console.log(this.alpha);

};

display() {

this.scene.scale(1, 1, this.scale_z);
this.scene.rotate(this.alpha / 2, 0, 1, 0);
this.scene.rotate(Math.PI / 2, 1, 0, 0);
this.cylinder.display();
}*/
}

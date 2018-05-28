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

    //The front is made using only 2 sides of a 4 side cylinder. 
    display() {

        this.scene.pushMatrix();
        this.scene.translate(2.1, 1.1, 0);
        this.scene.scale(1, 1.1, 1);
        this.scene.rotate(Math.PI / 2, 0, 0, -1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1.9 / 2, 0.1, 1);
        this.halfcylinder.display();
        this.scene.popMatrix()

    };


}

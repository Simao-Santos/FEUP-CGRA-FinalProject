/**
 * Wheel
 * @constructor
 */

  class Wheel extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.tire = new MyCylinder(scene, 20, 20);
        this.front = new MyCircle(scene, 20);
        this.back = new MyCircle(scene, 20);

        this.wheel_spin_angle = 0;

        this.materialDefault = new CGFappearance(scene);
        this.wheelTexture = new CGFappearance(scene);
        this.wheelTexture.loadTexture("../resources/images/donald.png");

  	};

    display()
    {
            this.scene.pushMatrix();
        this.scene.rotate(this.wheel_spin_angle, 0, 0, 1);

            this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.2);
        this.materialDefault.apply();

        this.tire.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.translate(0, 0, 0.2);
        this.wheelTexture.apply();
        this.front.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.materialDefault.apply();
        this.back.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

    };

    update () {

    };

    setWheelSpinAngle(angle) {
        this.wheel_spin_angle += angle;

        /*if(this.wheel_spin_angle >= 2 * Math.PI)
            this.wheel_spin_angle = 0;*/
    }


 }

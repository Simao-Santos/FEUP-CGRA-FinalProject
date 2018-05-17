/**
 * Wheel
 * @constructor
 */

  class Wheel extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.tire = new MyCylinder(scene, 20, 1);
        this.front = new MyCircle(scene, 20);

  	};

    display()
    {
            this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.2);
        this.tire.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.translate(0, 0, 0.2);
        this.front.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.front.display();
            this.scene.popMatrix();

    };


 }

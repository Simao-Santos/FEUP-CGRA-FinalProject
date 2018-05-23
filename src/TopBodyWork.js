/**
 * TopBodyWork
 * @constructor
 */
class TopBodyWork extends CGFobject
{
	constructor(scene)
	{
		super(scene);

        this.front_trapezoid = new MyTrapezoid(scene, 1.7, 0.1, 0.1, 0.15);
		this.back_trapezoid = new MyTrapezoid(scene, 1.7, 0.1, 0.1, 0);
		this.side1_trapezoid = new MyTrapezoid(scene, 4.05, 0.15, 0, 0.1);
		this.side2_trapezoid = new MyTrapezoid(scene, 4.05, 0, 0.15, 0.1);
		this.top = new Plane(scene, 50);


	};

    display() {

			this.scene.pushMatrix();
		this.scene.translate(2.1, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.front_trapezoid.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-2.1, 0, 0);
		this.scene.rotate(-Math.PI / 2, 0, 1, 0);
		this.back_trapezoid.display();
				this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 0, 0.95);
		this.side1_trapezoid.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 0, -0.95);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.side2_trapezoid.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 1, 0);
		this.scene.scale(4.05, 1, 1.7);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);
		this.top.display();
			this.scene.popMatrix();


    };
};

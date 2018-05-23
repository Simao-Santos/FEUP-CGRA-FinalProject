/**
 * TopBodyWork
 * @constructor
 */
class TopBodyWork extends CGFobject
{
	constructor(scene)
	{
		super(scene);

        this.topBody = new MyTrapezePrism(scene, 1.5, 0.2, 0.2, 0.05, 10);

	};

    display() {

		this.scene.rotate( Math.PI / 2, 0, 1, 0);
		this.scene.scale(1, 0.8, 4.2);
		this.scene.translate(0, 0, - 0.5);
        this.topBody.display();

    };
};

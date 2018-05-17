/**
 * TopBodyWork
 * @constructor
 */
class TopBodyWork extends CGFobject
{
	constructor(scene)
	{
		super(scene);

        this.topBody = new MyTrapezePrism(scene, 3.8, 0.1, 0.3, 0.1, 10);

	};

    display() {


		this.scene.scale(1, 0.9, 1.9);
        this.topBody.display();

    };
};

/**
 * TopBodyWork
 * @constructor
 */
class TopBodyWork extends CGFobject
{
	constructor(scene, width, height, frontDiff, backDiff)
	{
		super(scene);

        this.width = width;
        this.height = height;
        this.frontDiff = frontDiff;
        this.backDiff = backDiff;

        this.frontPrism = new TriangularPrism(scene, 1);
        //this.backPrism = new TriangularPrism(scene, 10);
        this.midBody = new QuadrangularPrism(scene, 4, 1);

	};

    display() {

            this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.midBody.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.scene.rotate( - Math.PI / 2, 0, 1, 0);
        this.frontPrism.display();
            this.scene.popMatrix();

    };
};

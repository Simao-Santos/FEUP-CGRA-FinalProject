/**
 * TopBodyWork
 * @constructor
 */
class TopBodyWork extends CGFobject
{
	constructor(scene, vehicleAppearances, index)
	{
		super(scene);

        this.front_trapezoid = new MyTrapezoid(scene, 1.7, 0.1, 0.1, 0.15);
		this.back_trapezoid = new MyTrapezoid(scene, 1.7, 0.1, 0.1, 0);
		this.leftSide_trapezoid = new MyTrapezoid(scene, 4.05, 0, 0.15, 0.1);
		this.rightSide_trapezoid = new MyTrapezoid(scene, 4.05, 0.15, 0, 0.1);
		this.top = new Plane(scene, 50);

		this.TopCarAppearancesList = {
			'blackTopText' : 0,
			'whiteTopText' : 1,
			'goldTopText' : 2,
			'redTopText' : 3,
			'disneyTopText' : 4
		}

		this.vehicleAppearances = vehicleAppearances;
		this.index = index;
		this.disneyflag = false;

		this.currTopAppearance = this.TopCarAppearancesList[this.index];

	};

    display() {

			this.scene.pushMatrix();
		this.scene.translate(2.1, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.vehicleAppearances[this.currTopAppearance].apply();
		this.front_trapezoid.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-2.1, 0, 0);
		this.scene.rotate(-Math.PI / 2, 0, 1, 0);
		this.vehicleAppearances[this.currTopAppearance].apply();
		this.back_trapezoid.display();
				this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 0, 0.95);
		this.vehicleAppearances[this.currTopAppearance].apply();
		this.rightSide_trapezoid.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 0, -0.95);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.leftSide_trapezoid.display();
		this.vehicleAppearances[this.currTopAppearance].apply();
			this.scene.popMatrix();

			this.scene.pushMatrix();
		this.scene.translate(-0.075, 1, 0);
		this.scene.scale(4.05, 1, 1.7);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);

		if(this.disneyflag){
			this.vehicleAppearances[4].apply();
		}
		else {
			this.vehicleAppearances[this.currTopAppearance].apply();
		}
		this.top.display();
			this.scene.popMatrix();


    };

	update(index) {
		this.index = index;
		if(this.index == 'disneyTopText') {
			this.currTopAppearance = this.TopCarAppearancesList['whiteTopText'];
			this.disneyflag = true;
		}
		else {
			this.currTopAppearance = this.TopCarAppearancesList[this.index];
			this.disneyflag = false;
		}
	}
};

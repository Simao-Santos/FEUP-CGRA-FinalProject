/**
 * Wheel
 * @constructor
 */

  class Wheel extends CGFobject
  {
  	constructor(scene, vehicleAppearances, index)
  	{
        super(scene);

        this.tire = new MyCylinder(scene, 20, 20);
        this.front = new MyCircle(scene, 20);
        this.back = new MyCircle(scene, 20);

        this.spin_angle = 0;
        this.stir_angle = 0;

        this.WheelCarAppearancesList = {
            'blackWheelText' : 0,
            'whiteWheelText' : 1,
            'goldWheelText' : 2,
            'redWheelText' : 3,
            'disneyWheelText' : 4
        }

        this.vehicleAppearances = vehicleAppearances;
		this.index = index;
		this.disneyflag = false;

		this.currWheelAppearance = this.WheelCarAppearancesList[this.index];
  	};

    display()
    {
            this.scene.pushMatrix();
        this.scene.rotate(this.stir_angle, 0, 1, 0);
        this.scene.rotate(this.spin_angle, 0, 0, -1);

            this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.2);
        this.vehicleAppearances[0].apply();
        this.tire.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.translate(0, 0, 0.2);
        this.vehicleAppearances[this.currWheelAppearance].apply();
        this.front.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.display();
            this.scene.popMatrix();

            this.scene.popMatrix();

    };

    update(index) {

		this.currWheelAppearance = this.WheelCarAppearancesList[index];

	}

    setWheelSpinAngle(angle) {

        this.spin_angle +=angle;

    }

    setWheelStirAngle(angle) {

        this.stir_angle += angle;

        if(this.stir_angle >= (Math.PI / 4)){
            this.stir_angle = Math.PI / 4;
        }
        if(this.stir_angle <= -(Math.PI / 4)) {
            this.stir_angle = -Math.PI / 4;
        }

    }


 }

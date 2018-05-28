/**
 * Fender
 * @constructor
 */

  class MyFender extends CGFobject
  {
  	constructor(scene, vehicleAppearances, index)
  	{
        super(scene);

        this.mudguard = new MySemisphere(scene, 20, 20, 10, 20);

        this.FenderCarAppearancesList = {
            'blackFenderText' : 0,
            'whiteFenderText' : 1,
            'goldFenderText' : 2,
            'redFenderText' : 3,
            'disneyFenderText' : 4
        }

        this.vehicleAppearances = vehicleAppearances;
		this.index = index;
		this.disneyflag = false;

		this.currTopAppearance = this.FenderCarAppearancesList[this.index];
  	};

    //consists of a semisphere, where only a half slices are represented (quarte of a sphere)
    display()
    {
        this.scene.pushMatrix();
        this.scene.scale(0.6, 0.6, 0.6);
        this.vehicleAppearances[this.currFenderAppearance].apply();
        this.mudguard.display();
        this.scene.popMatrix();
    };
    //Updates the part texture
    update(index) {
            this.currFenderAppearance = this.FenderCarAppearancesList[index];
    }

 }

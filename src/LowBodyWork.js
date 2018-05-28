/**
 * LowBodyWork
 * @constructor
 */

  class LowBodyWork extends CGFobject
  {
  	constructor(scene, vehicleAppearances, index)
  	{
        super(scene);

        this.front = new LowVehicleFront(scene);
        this.sides = new MyBoxSides(scene);
		this.floor = new Plane(scene, 50);
        this.triangle = new MySpecialTriangle(scene);

        //List of the possible textures
        this.BotCarAppearancesList = {
            'blackBotText' : 0,
            'whiteBotText' : 1,
            'goldBotText' : 2,
            'redBotText' : 3,
            'disneyBotText' : 4
        }

        this.vehicleAppearances = vehicleAppearances;
        this.index = index;
        this.disneyflag = false;

        this.currBotAppearance = this.BotCarAppearancesList[this.index];

  	};



    display() {

        this.scene.pushMatrix();
        this.vehicleAppearances[this.currBotAppearance].apply();

        //Sides of the lowerPart
        this.scene.pushMatrix();
        this.scene.scale(4.2, 1.1, 1.9);
        this.scene.translate(0, 0.5, 0);
        this.sides.display();
        this.scene.popMatrix();

        //Floor of the car
        this.scene.pushMatrix();
        this.scene.scale(4.2, 1, 1.9);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.floor.display();
        this.scene.popMatrix();

        //Small triangle to cover a small space in the front
        this.scene.pushMatrix();
        this.scene.translate(2.1, 0, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0)
        this.scene.scale(1.9, 0, 0.1);
        this.triangle.display();
        this.scene.popMatrix();

        //Small triangle to cover a small space in the bottom
        this.scene.pushMatrix();
        this.scene.translate(2.1, 1.1, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1.9, 0, 0.1);
        this.triangle.display();
        this.scene.popMatrix();

        //Front of the car
        this.scene.pushMatrix();
        this.front.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    //Updates the textures of the car
    update(index) {
            this.currBotAppearance = this.BotCarAppearancesList[index];

    }
}

/**
 * MyVehicle
 * @constructor
 */

  class MyVehicle extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.lowerBodyWork = new MyUnitCubeQuad(scene);
        this.upperBodyWork = new MyUnitCubeQuad(scene);

  	};

    display()
    {
            //this.scene.pushMatrix();
            //this.lowerBodyWork.scale();
        this.lowerBodyWork.display();
        this.upperBodyWork.display();

    };


 }

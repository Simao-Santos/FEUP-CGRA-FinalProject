/**
 * Fender
 * @constructor
 */

  class MyFender extends CGFobject
  {
  	constructor(scene)
  	{
        super(scene);

        this.mudguard = new MySemisphere(scene, 20, 20, 10, 20);

  	};

    display()
    {
        this.scene.scale(0.6, 0.6, 0.6);
        this.mudguard.display();
    };
//ola

 }

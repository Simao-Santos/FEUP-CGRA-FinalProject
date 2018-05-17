
class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
        this.gui = new dat.GUI();
 	}

	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui


		// add a button:
		// the first parameter is the object that is being controlled (in this case the scene)
		// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
		// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); };


		this.gui.add(this.scene, 'axis_status');

		var f1 = this.gui.addFolder('Toggle_Lights');
		f1.add(this.scene, 'lights1');
		f1.add(this.scene, 'lights2');
		f1.add(this.scene, 'lights3');


		//isto poe a folder "Luzes" aberto por default

		// add a group of controls (and open/expand by defult)

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;

		//group.add(this.scene, 'Lights');
		//group.add(this.scene, 'option2');

		// add a slider
		// must be a numeric variable of the scene, initialized in scene.init e.g.
		// this.speed=3;
		// min and max values can be specified as parameters

		//this.gui.add(this.scene, 'speed', -5, 5);

		return true;
	};

	/**
	 * processKeyboard
	 * @param event {Event}
	 */
	processKeyboard(event) {
		// call CGFinterface default code (omit if you want to override)
		super.processKeyboard(event);

		// Check key codes e.g. here: http://www.asciitable.com/
		// or use String.fromCharCode(event.keyCode) to compare chars

		// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
		switch (event.keyCode)
		{
			case (65):	// only works for capital 'A', as it is
				console.log("Key 'A' pressed");
		};
	};
};

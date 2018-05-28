
class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
        this.gui = new dat.GUI();
 	};

	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

        this.gui.add(this.scene, 'Toogle_Axis');

        //BUttons for the light toggling
		var f1 = this.gui.addFolder('Toggle_Lights');
		f1.add(this.scene, 'lights1');
		f1.add(this.scene, 'lights2');
		f1.add(this.scene, 'lights3');

        //Button to choose the car parts' texture
        this.gui.add(this.scene, 'topCar_texture', ['blackTopText', 'whiteTopText', 'goldTopText', 'redTopText', 'disneyTopText']);
        this.gui.add(this.scene, 'botCar_texture', ['blackBotText', 'whiteBotText', 'goldBotText', 'redBotText', 'disneyBotText']);
        this.gui.add(this.scene, 'wheels_texture', ['blackWheelText', 'whiteWheelText', 'goldWheelText', 'redWheelText', 'disneyWheelText']);
        this.gui.add(this.scene, 'fenders_texture', ['blackFenderText', 'whiteFenderText', 'goldFenderText', 'redFenderText', 'disneyFenderText']);

        //Button to change the framerate
		this.gui.add(this.scene, 'framespersec', 10, 100);

        this.initKeys();
        return true;
	};

    initKeys() {
        this.scene.gui=this;
        this.processKeyboard=function(){};
        this.activeKeys={};
    };
    processKeyDown(event) {
        this.activeKeys[event.code]=true;
    };
    processKeyUp(event) {
        this.activeKeys[event.code]=false;
    };
    isKeyPressed(keyCode) {
        return this.activeKeys[keyCode] || false;
    };

};

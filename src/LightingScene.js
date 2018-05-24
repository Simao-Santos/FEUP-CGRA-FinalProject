	var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 1;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene
{
	constructor()
	{
		super();
	};

	init(application)
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.gl.clearColor(0.5294117647058824, 0.807843137254902, 0.9215686274509803, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		//Textures

		this.enableTextures(true);

		this.terrainTexture = new CGFappearance(this);
		this.terrainTexture.loadTexture("../resources/images/sand.png");
		this.terrainTexture.setTextureWrap("REPEAT", "REPEAT");

		this.topCar_texture= 'whiteTopText';
		this.botCar_texture = 'whiteBotText';
		this.wheels_texture = 'disneyWheelText';
		this.fenders_texture = 'whiteFenderText';

		// Scene elements
		this.car = new MyVehicle(this, this.topCar_texture, this.botCar_texture, this.wheels_texture, this.fenders_texture);

		//Altimetry

		this.altimetry= [
		[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3, 10.0 ],
		[ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3, 10.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 2.5, 2.4, 0.0, 0.0, 10.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 3.5, 2.4, 0.0, 0.0, 10.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0 ],
		[ 2.0 , 3.0 , 2.0, 1.0, 2.5, 2.4, 2.3, 1.3, 10.0 ]
		];


		this.terrain = new MyTerrain(this, 8, this.altimetry);

		// Materials
		this.materialDefault = new CGFappearance(this);

		this.framespersec = 50;

		this.setUpdatePeriod(1000/this.framespersec);

		//Interface
		this.option1 = true;
		this.option2 = false;
		this.speed = 3;

		this.Toogle_Axis = false;
		this.lights1 = true;
		this.lights2 = true;
		this.lights3 = true;

		this.keyW = false;
		this.keyA = false;
		this.keyD = false;
		this.keyS = false;



	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);

		// Positions for three lights
		this.lights[0].setPosition(-5, 6, -5, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setPosition(0, 6, 6, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(6, 0, 0, 1.0);
		this.lights[2].setVisible(true); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].enable();
	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	doSomething(){
		console.log("Doing something...");
	};

	checkKeys()
	{
		var text="Keys pressed: ";
		var keysPressed=false;
		if (this.gui.isKeyPressed("KeyW"))
		{
			text+=" W ";
			keysPressed=true;
			this.keyW = true;
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			keysPressed=true;
			this.keyS = true;

		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			text+=" A ";
			keysPressed=true;
			this.keyA = true;
		}
		if (this.gui.isKeyPressed("KeyD"))
		{
			text+=" D ";
			keysPressed=true;
			this.keyD = true;

		}
		if (keysPressed){
			console.log(text);

		}
	}


	display()
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		if(this.Toogle_Axis) {
			this.axis.display();
		}

		// ---- END Background, camera and axis setup

		this.materialDefault.apply();

		this.pushMatrix();
			this.translate(0, 0, -10);
			//this.mickeyMaterial.apply();
			this.car.display();
		this.popMatrix();

		this.pushMatrix();
			this.scale(50, 1, 50);
			this.rotate(-Math.PI/2, 1, 0, 0);
			this.terrainTexture.apply();
			this.terrain.display();
		this.popMatrix();

		//TESTING
		console.log(this.framespersec);


	};

	updateMovement(currTime) {
		if(this.keyW) {
			this.keyW = false;
			this.car.velocity += 0.1 * this.speed;
		}
		if(this.keyS) {
			this.keyS = false;
			this.car.velocity -= 0.1 * this.speed;
		}

		if(!this.keyA && !this.keyD){

			if(this.car.wheel_front.stir_angle > 0)
			this.car.wheel_front.setWheelStirAngle( -(Math.PI / 2) / 25);

			if(this.car.wheel_front.stir_angle < 0)
			this.car.wheel_front.setWheelStirAngle((Math.PI / 2) / 25);

		}

		if(this.keyA) {
			this.keyA = false;
			this.car.wheel_front.setWheelStirAngle((Math.PI / 2) / 50);
		}
		if(this.keyD) {
			this.keyD = false;
			this.car.wheel_front.setWheelStirAngle( -(Math.PI / 2) / 50);
		}

	}

	update(currTime) {

		this.lastTime = this.lastTime || 0;
		this.deltaTime = currTime - this.lastTime;
		this.lastTime = currTime;

		this.deltaTime = this.deltaTime / 1000;

		// Update all lights used
		if(this.lights1)
			this.lights[0].enable();
		else
			this.lights[0].disable();

		if(this.lights2)
			this.lights[1].enable();
		else
			this.lights[1].disable();

		if(this.lights3)
			this.lights[2].enable();
		else
			this.lights[2].disable();


		this.checkKeys();
		this.updateMovement();

		if(this.car.velocity != 0) {
			this.car.updateWheelSpin(this.deltaTime);
			this.car.updateCarAngle(this.deltaTime);
		}

		this.car.updateCoordinates(this.deltaTime);

		this.car.updateTextures(this.topCar_texture, this.botCar_texture, this.wheels_texture, this.fenders_texture);

		this.setUpdatePeriod(1000/this.framespersec);

	};

};

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
		this.dangerousZoneTexture = new CGFappearance(this);
		this.dangerousZoneTexture.loadTexture("../resources/images/dangerous_zone.png");
		this.dangerousZoneTexture.setTextureWrap("REPEAT", "REPEAT");

		//Variables that determine which texture each part of the car has
		this.topCar_texture= 'whiteTopText';
		this.botCar_texture = 'whiteBotText';
		this.wheels_texture = 'disneyWheelText';
		this.fenders_texture = 'whiteFenderText';

		// Scene elements
		this.car = new MyVehicle(this, this.topCar_texture, this.botCar_texture, this.wheels_texture, this.fenders_texture);
		this.road = new Road(this);
		this.home = new Buildings(this);
		this.crane = new MyCrane(this);
		this.dangerZone = new Plane(this, 30);

		//Altimetry

		this.altimetry= [
		[ 0.0 , 0.0 , 4.0, 4.0, 5.0, 6.0, 6.0, 8.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0 ],
		[ 0.0 , -3.0 , -2.0, 0.0, 0.0, 0.0, 0.0, 3.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 7.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 7.0 ],
		[ 0.0 , 1.3 , 2.3, 2.4, 2.5, 1.0, 2.0, 5.0, 7.0 ]
		];

		this.terrain = new MyTerrain(this, 8, this.altimetry);

		// Materials
		this.materialDefault = new CGFappearance(this);

		//FPS - this.framespersec is the variable the user changes to change the fps
		this.framespersec = 50;

		this.setUpdatePeriod(1000/this.framespersec);

		//Speed value used to calculate the car velocity
		this.speed = 3;

		//Interface

		//Variables regarding both the axis and light activation
		this.Toogle_Axis = false;
		this.lights1 = true;
		this.lights2 = true;
		this.lights3 = true;


		//Variables regarding the car controlls
		this.keyW = false;
		this.keyA = false;
		this.keyD = false;
		this.keyS = false;
		this.keyF = false;


		/*	Crane Animation
				The animation sequence is defined in the array this.animationSequence. When the animation starts, it will pass throught the
				array and transition to a new state when the current one is over. This condition is verifies using the variable this.endState
				By default, the first state is always 'Stop', and after the animation starts, it ends when the currAnimationState is 0 ('Stop').
		*/

		this.animationSequence = ['FirstSpin', 'DescendArm', 'GrabCar', 'AscendArm', 'SpinBack', 'DescendArm', 'ReleaseCar', 'AscendArm', 'Stop'];
		this.animationCounter = 0;

		this.animationStatesList = {
			'Stop' : 0,
			'FirstSpin' : 1,
			'SpinBack' : 2,
			'AscendArm' : 3,
			'DescendArm' : 4,
			'GrabCar' : 5,
			'ReleaseCar' : 6
		}


		//Variables regarding the state of the crane animation
		this.animationStatus = false;
		this.carLifted = false;
		this.endState = false;
		this.currAnimationState = this.animationStatesList['Stop'];
		this.sideRotationAngle = Math.PI / 30;
		this.sideRotationMaxAngle = Math.PI;



	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);

		// Positions for three lights
		this.lights[0].setPosition(2, 6, 10, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setPosition(2, 6, -10, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(-10, 7, 20, 1.0);
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

	//Verifies the keyboard keys that are pressed and modify the variables corresponding to each key to true or false accordingly
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
		if (this.gui.isKeyPressed("KeyF"))
		{
			text+=" F ";
			keysPressed=true;
			this.keyF = true;

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


		//Terrain setup
			this.pushMatrix();
		this.scale(50, 1, 50);
		this.rotate(-Math.PI/2, 1, 0, 0);
		this.terrainTexture.apply();
		this.terrain.display();
			this.popMatrix();

			this.pushMatrix();
		this.road.display();
			this.popMatrix();

			this.pushMatrix();
		this.translate(0, 0, -17.5);
    	this.home.display();
			this.popMatrix();

			this.pushMatrix();
		this.home.display();
			this.popMatrix();

			this.pushMatrix();
		this.translate(0, 0.02, 5.7);
		this.scale(5, 0, 3.5);
		this.rotate(-Math.PI/2, 1, 0, 0);
		this.dangerousZoneTexture.apply();
		this.dangerZone.display();
			this.popMatrix();

		/*When the car is lifted in the air, its display is handled by the crane, because the car will have the same movement as the crane magnetAndWire
		This is why the carLifted variable is used. When the car is in the air, its object is passed to the this.crane.display() function
		*/
		if(this.carLifted) {

				this.pushMatrix();
			this.crane.display(this.car);
				this.popMatrix();

		}
		else {

				this.pushMatrix();
			this.car.display();
				this.popMatrix();

				this.pushMatrix();
			this.crane.display();
				this.popMatrix();

		}

		this.popMatrix();

	};

	//Updates the car movement values according to the kays that are being pressed at the moment
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

		//When the car velocity is at 0, only the wheels can stir, not the car
		if(this.car.velocity != 0) {
			this.car.updateWheelSpin(this.deltaTime);
		}

		//If the car is in the middle of the animation, it can't move even if the wheels turn
		if(!this.animationStatus){
			this.car.updateCoordinates(this.deltaTime);
			this.verifyCarPosition();

			if(this.car.velocity != 0)
				this.car.updateCarAngle(this.deltaTime);
		}

		this.car.updateTextures(this.topCar_texture, this.botCar_texture, this.wheels_texture, this.fenders_texture);

		this.setUpdatePeriod(1000/this.framespersec);

		//Verifies if the current state has come to an end. If so, it moves to the next one
		if(this.endState) {
			this.endState = false;
			this.animationCounter++;
			this.currAnimationState = this.animationStatesList[this.animationSequence[this.animationCounter]]
		}

		//Verifies if the animation ende in the current state or not
		if(this.animationSequence[this.animationCounter] == 'Stop') {
			this.animationCounter = 0;
			this.endState = false;
			this.animationStatus = false;
		}

		this.craneAnimationSelect(this.deltaTime);
	};

	//Updates the car coordinates to the new ones after the animation is over
	updateCarEndCoordiantes() {
		this.car.x = -this.car.x;
		this.car.z = -this.car.z;
		this.car.angle += this.sideRotationMaxAngle;
	}

	//Selects which function to call depending on the current State
	craneAnimationSelect(deltaTime) {

		switch(this.currAnimationState) {
			case 1:
				this.rotateCraneToGrab(deltaTime);
				break;
			case 2:
				this.rotateCraneToRelease(deltaTime);
				break;
			case 3:
				this.ascendCraneArm(deltaTime);
				break;
			case 4:
				this.descendCraneArm(deltaTime);
				break;
			case 5:
				this.grabCar();
				break;
			case 6:
				this.releaseCar();
				this.updateCarEndCoordiantes();
				break;
			default:
				break;
		}
	};

	//Rotates the crane to the grab location
	rotateCraneToGrab(deltaTime) {

		this.crane.updateRotationAngle(deltaTime, this.sideRotationAngle);

		if(this.crane.rotationAngle >= this.sideRotationMaxAngle) {
			this.endState = true;
		}
	};

	//Rotates the crane to the release location
	rotateCraneToRelease(deltaTime) {

		this.crane.updateRotationAngle(deltaTime, -this.sideRotationAngle);

		if(this.crane.rotationAngle <= 0) {
			this.endState = true;
		}
	}

	//Descends the crane's second arm and the magnet
	descendCraneArm(deltaTime) {

		this.crane.secondArm.updateRotationAngle(deltaTime, Math.PI / 20);
		this.crane.secondArm.magnetAndWire.updateCompensationAngle(deltaTime, Math.PI / 20);

		if(this.crane.secondArm.rotationAngle >= Math.PI * 5 / 8){
			this.endState = true;
		}

	};

	//Ascends the crane's second arm and the magnet
	ascendCraneArm(deltaTime) {

		this.crane.secondArm.updateRotationAngle(deltaTime, -Math.PI / 20);
		this.crane.secondArm.magnetAndWire.updateCompensationAngle(deltaTime, -Math.PI / 20);

		if(this.crane.secondArm.rotationAngle <= Math.PI / 4){
			this.endState = true;
		}

	};

	//Grabs the car
	grabCar(deltaTime) {

		this.carLifted = true;
		this.endState = true;

	}

	//Releases the carLifted
	releaseCar(deltaTime) {

		this.carLifted = false;
		this.endState = true;
	}

	verifyCarPosition() {
		if(this.car.x > -0.5 && this.car.x < 0.5 && this.car.z > 5.5 && this.car.z < 6.5) {
			this.car.velocity = 0;
			this.currAnimationState = this.animationStatesList[this.animationSequence[0]];
			this.animationStatus = true;
		}
	}

};

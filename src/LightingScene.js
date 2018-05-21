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

		// Scene elements
		this.car = new MyVehicle(this);
		this.test_c = new LowBodyWork(this);
		this.test2 = new LowVehicleFront(this);
		this.test = new MySpecialTriangle(this);

		//Test elements


		this.terrain = new Plane(this, 50);

		// Materials
		this.materialDefault = new CGFappearance(this);

		this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3,0.3,0.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		this.materialA.setSpecular(0.2,0.2,0.2,1);
		this.materialA.setShininess(10);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3,0.3,0.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(0.8,0.8,0.8,1);
		this.materialB.setShininess(120);

		//Textures

		this.enableTextures(true);

		this.terrainTexture = new CGFappearance(this);
		this.terrainTexture.loadTexture("../resources/images/grass.jpg");
		this.terrainTexture.setTextureWrap("REPEAT", "REPEAT");

		this.setUpdatePeriod(30);

		//Interface
		this.option1 = true;
		this.option2 = false;
		this.speed = 3;

		this.Toogle_Axis = true;
		this.lights1 = true;
		this.lights2 = true;
		this.lights3 = true;


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
			this.car.velocity += 0.01 * this.speed;
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			keysPressed=true;
			this.car.velocity -= 0.01 * this.speed;

		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			text+=" A ";
			keysPressed=true;
			this.car.angle += (Math.PI * 2) / 100;
		}
		if (this.gui.isKeyPressed("KeyD"))
		{
			text+=" D ";
			keysPressed=true;
			this.car.angle -= (Math.PI * 2) / 100;

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
		//this.scale(1, 5, 1);
		//this.rotate( - Math.PI / 2, 1, 0, 0);
		//this.test_c.display();
		this.popMatrix();

			this.pushMatrix();
		this.car.display();
			this.popMatrix();

		this.pushMatrix();
			this.scale(50, 1, 50);
			this.rotate(-Math.PI/2, 1, 0, 0);
			this.terrainTexture.apply();
			this.terrain.display();
		this.popMatrix();


	};

	update(currTime) {

		this.lastTime = this.lastTime || 0;
		this.deltaTime = currTime - this.lastTime;
		this.lastTime = currTime;

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
		this.car.updateCoordinates(this.deltaTime);

	};


};

class Buildings extends CGFobject{

	constructor(scene)
	{
		super(scene);

        this.wall1 = new Plane(this.scene, 50);

        this.wallTexture = new CGFappearance(this.scene);
		this.wallTexture.loadTexture("../resources/images/wall_home.png");
        this.wallTexture.setTextureWrap("REPEAT", "REPEAT");

        this.topTexture = new CGFappearance(this.scene);
		this.topTexture.loadTexture("../resources/images/top.jpg");
        this.topTexture.setTextureWrap("REPEAT", "REPEAT");

        this.entryTexture = new CGFappearance(this.scene);
		this.entryTexture.loadTexture("../resources/images/garage_door.jpg");
        this.entryTexture.setTextureWrap("REPEAT", "REPEAT");
    };

    display(){

    //home entrance
    this.scene.pushMatrix();
        this.scene.translate(5, 3, 8.5);
        this.scene.scale(10, 6, 10);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.wallTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
        this.scene.translate(4.99, 2.3, 8.5);
        this.scene.scale(5, 4.5, 8);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.entryTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

    //Side wall
    this.scene.pushMatrix();
        this.scene.translate(10, 3, 3.5);
        this.scene.scale(10, 6, 10);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.wallTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

	//Side wall
    this.scene.pushMatrix();
        this.scene.translate(10, 3, 13.5);
        this.scene.scale(10, 6, 10);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.wallTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

	//Back wall
    this.scene.pushMatrix();
        this.scene.translate(15, 3, 8.5);
        this.scene.scale(10, 6, 10);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.wallTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

	//Rooftop
    this.scene.pushMatrix();
        this.scene.translate(10, 6, 8.5);
        this.scene.scale(10, 6, 10);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(-Math.PI, 0, 0, 1);
        this.topTexture.apply();
        this.wall1.display();
    this.scene.popMatrix();

    }
}

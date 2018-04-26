/**
 * MyCircle
 * @constructor
 */
class MyCircle extends CGFobject
{
	constructor(scene, slices)
	{
		super(scene);
        this.slices = slices;

		this.initBuffers();
	};

	initBuffers()
	{

        var degToRad = Math.PI / 180.0;
        var alpha = (360 / this.slices) * degToRad;
        var ang = 0;
        var x_coord, y_coord, z_coord = 0;
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        //Centre of the circle
        this.vertices.push(0,0,0);
        this.texCoords.push(0.5,0.5);

        //Pushing other vertices
        for(var i = 0; i < this.slices; i++){
            x_coord = Math.cos(alpha * i);
            y_coord = Math.sin(alpha * i);
            this.vertices.push(x_coord, y_coord, z_coord);

            this.texCoords.push(0.5 + x_coord/ 2, 0.5 - y_coord / 2);

        }

        for(var i = 0; i < this.slices; i++){

            if(i + 2 > this.slices)
                this.indices.push(0, i + 1, 1);
            else
                this.indices.push(0, i + 1, i + 2);

        }

        for(var j = 0; j < this.slices + 1; j++) {
            this.normals.push(0,0,1);

        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

	};
};

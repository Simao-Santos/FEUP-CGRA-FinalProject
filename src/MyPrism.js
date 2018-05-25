/**
 * MyPrism
 * @constructor
 */
class MyPrism extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);

        this.slices = slices;
        this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers()
	{
		var degToRad = Math.PI / 180.0;
		var alpha = (360 / this.slices) * degToRad;
		var ang = 0;
		var floor_height = 1 / this.stacks;
		var x_coord, y_coord, z_coord;
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		for(var j = 0; j <= this.stacks; j++){
		    for(var i = 0; i < this.slices; i++){

		        x_coord = Math.cos(alpha * i);
		        y_coord = Math.sin(alpha * i);
		        z_coord = floor_height * j;
		        this.vertices.push(x_coord, y_coord, z_coord);
				x_coord = Math.cos(alpha * (i + 1));
		        y_coord = Math.sin(alpha * (i + 1));
				this.vertices.push(x_coord, y_coord, z_coord);

				this.normals.push(Math.cos(alpha / 2 + alpha * i), Math.sin(alpha / 2 + alpha * i), 0);
				this.normals.push(Math.cos(alpha / 2 + alpha * i), Math.sin(alpha / 2 + alpha * i), 0);

				this.texCoords.push(0, j * 1 / this.stacks);
				this.texCoords.push(1, j * 1 / this.stacks);

		    }
		}

		var index = 0;

		for(var i = 0; i < this.stacks; i++) {
			for(var j = 0; j < this.slices; j++) {

				this.indices.push(index, index + 1, index + 1 + this.slices * 2);
				this.indices.push(index + 1 + this.slices * 2, index + this.slices * 2, index);

				index += 2;
			}
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

};

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

		for(var j = 0; j < this.stacks; j++){
		    for(var i = 0; i < this.slices; i++){

		        x_coord = Math.cos(alpha * i);
		        y_coord = Math.sin(alpha * i);
		        z_coord = floor_height * j;
		        this.vertices.push(x_coord, y_coord, z_coord);
		        z_coord = floor_height * (j + 1);
		        this.vertices.push(x_coord, y_coord, z_coord);

		        x_coord = Math.cos(alpha * (i + 1));
		        y_coord = Math.sin(alpha * (i + 1));
		        z_coord = floor_height * (j + 1);
		        this.vertices.push(x_coord, y_coord, z_coord);
		        z_coord = floor_height * j;
		        this.vertices.push(x_coord, y_coord, z_coord);

		    }

		}

		var index = 0;

		for(var i = 0; i < (this.slices * this.stacks); i++){

			this.indices.push(index, index+3, index+2);
			this.indices.push(index+2, index+1, index);
			index += 4;

		}

		var x, y;
		var b = alpha / 2;

		for(var i = 0; i < this.stacks; i++) {
			for(var j = 0; j < this.slices; j++) {
				x = Math.cos(b + alpha * j);
				y = Math.sin(b + alpha * j);

				for(var s = 0; s < 4; s++){
					this.normals.push(x,y,0);
				}
			}
		}


		console.log(this.vertices);
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};

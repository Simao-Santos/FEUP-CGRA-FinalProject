/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject
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

			z_coord = floor_height * j;

		    for(var i = 0; i < this.slices; i++){
		        x_coord = Math.cos(alpha * i);
		        y_coord = Math.sin(alpha * i);
		        this.vertices.push(x_coord, y_coord, z_coord);
		    }

		}


        for(var i = 0; i < (this.slices * this.stacks); i++){

            if((i + 1) % this.slices == 0) {
                this.indices.push(i, 0 , i +  1 );
                this.indices.push(i + 1, i + this.slices, i);
            }else {
                this.indices.push(i, i + 1, i + this.slices + 1);
                this.indices.push(i + this.slices + 1, i + this.slices, i);
            }
		}

		var x, y;

		var x, y;
		var b = alpha / 2;

		for(var i = 0; i < this.stacks + 1; i++) {
			for(var j = 0; j < this.slices; j++) {
				x = Math.cos(alpha * j);
				y = Math.sin(alpha * j);

				this.normals.push(x,y,0);
			}
		}

		for(let j =0; j <= this.stacks; j++){
			for(let i=0; i < this.slices; i++){
				this.texCoords.push(i*1/this.slices,j*1/this.stacks);
			}
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};

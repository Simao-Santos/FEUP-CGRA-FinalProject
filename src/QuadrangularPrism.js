/**
 * QuadrangularPrism
 * @constructor
 */
class QuadrangularPrism extends CGFobject
{
	constructor(scene, stacks)
	{
		super(scene);

        this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers()
	{
		var ang = 0;
		var floor_height = 1 / this.stacks;
		var x_coord, y_coord, z_coord, i, index_start, max_vertice_indice;

		this.vertices = [];
		this.indices = [];
		this.normals = [];

        for(i = 0; i <= this.stacks; i++) {

            z_coord = floor_height * i;

            this.vertices.push(0, 0, z_coord);
            this.vertices.push(1, 0, z_coord);
            this.vertices.push(0, 1, z_coord);
            this.vertices.push(1, 1, z_coord);


        }

        /*Pushes both top vertices again because of the normals*/
        this.vertices.push(0, 0, 0);
        this.vertices.push(1, 0, 0);
        this.vertices.push(0, 1, 0);
        this.vertices.push(1, 1, 0);

        this.vertices.push(0, 0, floor_height * this.stacks);
        this.vertices.push(1, 0, floor_height * this.stacks);
        this.vertices.push(0, 1, floor_height * this.stacks);
        this.vertices.push(1, 1, floor_height * this.stacks);



        /*Pushes indices of the side of each stack*/

        for(i = 0; i < this.stacks; i++) {

            for(var j = 0; j < 4; j++) {
                
                this.indices.push(index_start + j, index_start + j + 1, index_start + j + 5);
                this.indices.push(index_start + j + 5, index_start + j + 4, index_start + j);

            }

        }

        /*Pushes each top faces indices*/
        max_vertice_indice = (this.vertices.length / 3) - 1;
        this.indices.push(0, 1, 2);
        this.indices.push(max_vertice_indice, max_vertice_indice - 1, max_vertice_indice - 2);

        /*Pushes the normals of the side of each stack*/
        for( i = 0; i <= this.stacks; i++) {

            this.normals.push(Math.cos(side_alpha), Math.sin(side_alpha), 0);
            this.normals.push(Math.cos(side_alpha), Math.sin(side_alpha), 0);

        }

        /*Pushes the normals of the top faces*/
        this.normals.push(0, 0, -1);
        this.normals.push(0, 0, -1);
        this.normals.push(0, 0, -1);

        this.normals.push(0, 0, 1);
        this.normals.push(0, 0, 1);
        this.normals.push(0, 0, 1);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};

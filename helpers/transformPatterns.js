module.exports.PeopleTransform = {
	nombre: '$.name',
	estatura: '$.estatura',
	peso: '$.mass',
	color_cabello: '$.hair_color',
	color_piel: '$.skin_color',
	color_ojos: '$.eye_color',
	ano_nacimiento: '$.birth_year',
	genero: '$.gender',
	planeta_origen: '$.homeworld',
	peliculas: '$.films',
	especies: '$.species',
	vehiculos: '$.vehicles',
	naves: '$.starships',
	fecha_creacion: '$.created',
	fecha_edicion: '$.edited',
	url: '$.url'
}

module.exports.FilmTransform = {
	titulo: '$.title',
	episodio_id: '$.episode_id',
	introduccion: '$.opening_crawl',
	director: '$.director',
	productor: '$.producer',
	fecha_estreno: '$.release_date',
	especies: '$.species',
	vehiculos: '$.vehicles',
	naves: '$.starships',
	personajes: '$.characters',
	planets: '$.planets',
	fecha_creacion: '$.created',
	fecha_edicion: '$.edited',
	url: '$.url'
}

module.exports.StarshipTransform = {
	nombre: '$.name',
	modelo: '$.model',
	clase_nave: '$.starship_class',
	fabricante: '$.manufacturer',
	costo_creditos: '$.cost_in_credits',
	tamano: '$.length',
	tripulantes: '$.crew',
	pasajeros: '$.passengers',
	maxima_velocidad: '$.max_atmosphering_speed',
	hiperdrive: '$.hyperdrive_rating',
	MGLT: '$.MGLT',
	capacidad_carga: '$.cargo_capacity',
	provisiones: '$.consumables',
	peliculas: '$.films',
	pilotos: '$.pilots',
	fecha_creacion: '$.created',
	fecha_edicion: '$.edited',
	url: '$.url'
}
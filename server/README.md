# Appartamentos NC API Documentation

Este proyecto es parte de la emulacion 12 de No Country...

# API

Link de acceso a la API: https://appartments-api.onrender.com

# Autenticación

Todos los endpoints a excepción del registro requieren de envío de token a través del header

* [Login]: `POST /api/login`

# Login

Recopilamos un Token para un usuario registrado.

**URL** : `/api/login`

**Metodo** : `POST`

**Requiere Autenticación** : NO

**Restricciones de Datos**

```json
{	
    "email": "[string formato email]",
    "password": "[string formato password]"
}
```

**Ejemplos de datos**

```json
{
    "username": "mail@example.com",
    "password": "Abc*d1234"
}
```

## Response Exitosa

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```

* [Register]: `POST api/create`

# Register

Used to register a new user.

**URL** : `/api/create`

**Metodo** : `POST`

**Requiere Autenticación** : NO

**Restricciones de Datos**

```json
{
	"name": "[string]",
	"lastName": "[string]",
	"email": "[string]",
	"password": "[string]"
}
```

**Ejemplos de datos**

```json
{
	"name": "Abelardo",
	"lastName": "Martinez",
	"email": "mail@example.com",
	"password": "Abc*d1234"
}
```

## Response Exitosa

**Code** : `200 OK`

**Content example**

```json
[
	{
		"id": 1,
		"username": "jramirez",
		"first_name": "Joaquin",
		"last_name": "Ramirez",
		"email": "jramirez15@gmail.com",
		"password": "$2b$10$l0PLiIAIGC0lSghuCv6OKePtZirh9U2cdsTmy9Lh1TIsf8sGiPHKG",
		"is_active": true,
		"updated_at": "2023-07-17T04:31:27.835Z",
		"created_at": "2023-07-17T04:31:27.835Z"
	},
	true
]
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

To authenticate you need to add a token like this:


### Users

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Me]: `GET /api/me`

# Show Current User Info

Get the details of the currently Authenticated User along with basic
subscription information.

**URL** : `/api/me`

**Metodo** : `GET`

**Requiere Autenticación** : YES

**Header** : Authorization

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content examples**

```json
{
	"id": 1,
	"username": "jramirez",
	"first_name": "Joaquin",
	"last_name": "Ramirez",
	"email": "jramirez15@gmail.com",
	"phone": null,
	"avatar": null,
	"is_active": "1",
	"created_at": "2023-07-17T04:31:27.000Z",
	"updated_at": "2023-07-17T04:31:27.000Z"
}
```

* [Get an User] : `GET /api/me`

* [List all Users] : `GET /api/users/list`

# List users

Get the list of users .

**URL** : `/api/users/list/`

**Metodo** : `GET`

**Requiere Autenticación** : YES

**Header** : Authorization

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content examples**

```json
[

	{
		"id": 1,
		"username": "jramirez",
		"first_name": "Joaquin",
		"last_name": "Ramirez",
		"email": "jramirez15@gmail.com",
		"phone": "958953258",
		"avatar": "http://res.cloudinary.com/dmp6ghtzb/image/upload/v1689568415/px47qejljwvywq1nooag.jpg"
	},
    {
		"id": 1,
		"username": "marcoshdh",
		"first_name": "Manuel",
		"last_name": "Espen",
		"email": "mspsen@gmail.com",
		"phone": "935656457",
		"avatar": "http://res.cloudinary.com/dmp6ghtzb/image/upload/v1689568415/px47qejljwvywq1nooag.jpg"
	}
]
```

* [Update an User]: `PUT /api/users/update/:id`

# Update Current User info

Allow the Authenticated User to update their details.

**URL** : `/api/users/update/:id`

**Metodo** : `PUT`

**Requiere Autenticación** : YES

**Header**: Authorization

**Permissions required** : None

**Restricciones de Datos**

```json
{
	"phone": "String",
	"avatar": "string",
    "first_name": "string"
}
```


**Ejemplos de datos**

Partial data is allowed.

```json
{
    "first_name": "John"
}
```

## Response Exitosa

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"message": "Actualizado con éxito."
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. a name field is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "first_name": [
        "Please provide maximum 30 character or empty string",
    ]
}
```

## Notes

* Endpoint will ignore irrelevant and read-only data such as parameters that
  don't exist, or fields that are not editable like `id` or `email`.
* Similar to the `GET` endpoint for the User, if the User does not have a
  UserInfo instance, then one will be created for them.

# Delete Current User info

Allow the Authenticated User to delete their details and information.

**URL** : `/api/users/:id`

**Metodo** : `DELETE`

**Requiere Autenticación** : YES

**Header**: Authorization

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content example** :

```json
{
	"message": "La cuenta ha sido eliminada."
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "Ocurrió un error al eliminar la cuenta."
}
``` 

### Properties

Endpoints for viewing and manipulating properties that the Authenticated User
has permissions to access.

* [List Properties] : `GET /api/properties/list`

# List properties

Get the list of properties .

**URL** : `/api/properties/list`

**Metodo** : `GET`

**Requiere Autenticación** : YES

**Header** : Authorization

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": 1,
		"name": "Amplio Dpto. de 2 Dorms. en Miraflores en Alquiler",
		"description": "Se Alquila Amplio departamento en pleno centro de Miraflores, Av. Larco esquina con la Av. Benavides, transporte público para todo Lima, comercios, bancos, instituciones de todo tipo, centros de estudios, todo a la mano.",
		"address": "Sur Aot 125",
		"city": "Lima",
		"province": "Lima",
		"country": "Peru",
		"price": 500,
		"available": true,
		"is_featured": false,
		"for_sale": false,
		"for_rent": false
	},
    {
		"id": 2,
		"name": "Amplio Dpto. de 2 Dorms. en URB LA PERLA en Alquiler",
		"description": "Se Alquila Amplio departamento en pleno centro de STOCK, Av. ESPON esquina con la Av. Benavides, transporte público para todo Lima, comercios, bancos, instituciones de todo tipo, centros de estudios, todo a la mano.",
		"address": "Sur Aot 125",
		"city": "Lima",
		"province": "Lima",
		"country": "Peru",
		"price": 500,
		"available": true,
		"is_featured": false,
		"for_sale": false,
		"for_rent": false
	}
]
``` 

* [List Properties Detail] : `GET /api/properties/list-detail`

# List properties Detail

Get the list of properties to home card.

**URL** : `/api/properties/list-detail`

**Metodo** : `GET`

**Requiere Autenticación** : NO

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": 1,
		"name": "Amplio Dpto. de 2 Dorms. en Miraflores en Alquiler",
		"description": "Se Alquila Amplio departamento en pleno centro de Miraflores, Av. Larco esquina con la Av. Benavides, transporte público para todo Lima, comercios, bancos, instituciones de todo tipo, centros de estudios, todo a la mano.",
		"address": "Sur Aot 125",
		"city": "Lima",
		"province": "Lima",
		"country": "Peru",
		"price": 500,
		"available": true,
		"is_featured": false,
		"for_sale": false,
		"for_rent": false,
		"created_at": "2023-07-17T04:04:33.000Z",
		"updated_at": "2023-07-17T04:04:33.000Z",
		"p_details": [
			{
				"id": 1,
				"covered_area": 785.5,
				"uncovered_area": 125,
				"bedrooms": 2,
				"bathrooms": 2,
				"toilette": 2,
				"garage": 1,
				"swimming_pool": 1,
				"reception_hall": 1,
				"balcony": 1,
				"elevator": 1,
				"gym": 1,
				"antiquity": "6",
				"property_id": 1,
				"garden": true,
				"terrance": true,
				"grill": 1,
				"credit_worthy": true,
				"professional_use": true,
				"created_at": "2023-07-17T04:04:35.000Z",
				"updated_at": "2023-07-17T04:04:35.000Z"
			}
		],
		"PropertiesPhotos": [
			{
				"id": 1,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971905_ierfug.jpg",
				"property_id": 1,
				"created_at": "2023-07-17T09:40:33.000Z",
				"updated_at": "2023-07-17T09:40:33.000Z"
			},
			{
				"id": 2,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971904_o65g8q.jpg",
				"property_id": 1,
				"created_at": "2023-07-17T09:40:33.000Z",
				"updated_at": "2023-07-17T09:40:33.000Z"
			},
			{
				"id": 3,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971875_efhbp5.jpg",
				"property_id": 1,
				"created_at": "2023-07-17T09:41:33.000Z",
				"updated_at": "2023-07-17T09:41:33.000Z"
			}
		]
	},
	{
		"id": 2,
		"name": "Amplio Dpto. de 2 Dorms. en Lira en Alquiler",
		"description": "Se Alquila Amplio departamento en pleno centro de Lira, Av. Las Flores esquina con la Av. Benavides, transporte público para todo Lima, comercios, bancos, instituciones de todo tipo, centros de estudios, todo a la mano.",
		"address": "Saint Dennis 656",
		"city": "Lira",
		"province": "Lima",
		"country": "Peru",
		"price": 800,
		"available": true,
		"is_featured": true,
		"for_sale": false,
		"for_rent": true,
		"created_at": "2023-07-17T09:04:33.000Z",
		"updated_at": "2023-07-17T09:04:33.000Z",
		"p_details": [
			{
				"id": 2,
				"covered_area": 350,
				"uncovered_area": 50,
				"bedrooms": 2,
				"bathrooms": 2,
				"toilette": 1,
				"garage": 1,
				"swimming_pool": 1,
				"reception_hall": 0,
				"balcony": 0,
				"elevator": 0,
				"gym": 0,
				"antiquity": "2",
				"property_id": 2,
				"garden": true,
				"terrance": false,
				"grill": 1,
				"credit_worthy": false,
				"professional_use": false,
				"created_at": "2023-07-17T09:40:33.000Z",
				"updated_at": "2023-07-17T09:40:33.000Z"
			}
		],
		"PropertiesPhotos": [
			{
				"id": 4,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/315902922_ywkj7l.jpg",
				"property_id": 2,
				"created_at": "2023-07-17T09:42:33.000Z",
				"updated_at": "2023-07-17T09:42:33.000Z"
			},
			{
				"id": 5,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/315902916_cdakyf.jpg",
				"property_id": 2,
				"created_at": "2023-07-17T09:43:33.000Z",
				"updated_at": "2023-07-17T09:43:33.000Z"
			},
			{
				"id": 6,
				"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/315902914_cudclf.jpg",
				"property_id": 2,
				"created_at": "2023-07-17T09:44:33.000Z",
				"updated_at": "2023-07-17T09:44:33.000Z"
			}
		]
	}
]
``` 

* [Get Property Full Detail] : `GET /api/properties/1/full-detail`

# Get a property with Full Detail

Get the list of properties to property page.

**URL** : `/api/properties/full-detail`

**Metodo** : `GET`

**Requiere Autenticación** : NO

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content examples**

```json

{
	"id": 1,
	"name": "Amplio Dpto. de 2 Dorms. en Miraflores en Alquiler",
	"description": "Se Alquila Amplio departamento en pleno centro de Miraflores, Av. Larco esquina con la Av. Benavides, transporte público para todo Lima, comercios, bancos, instituciones de todo tipo, centros de estudios, todo a la mano.",
	"address": "Sur Aot 125",
	"city": "Lima",
	"province": "Lima",
	"country": "Peru",
	"price": 500,
	"available": true,
	"is_featured": false,
	"for_sale": false,
	"for_rent": false,
	"created_at": "2023-07-17T04:04:33.000Z",
	"updated_at": "2023-07-17T04:04:33.000Z",
	"p_details": [
		{
			"id": 1,
			"covered_area": 785.5,
			"uncovered_area": 125,
			"bedrooms": 2,
			"bathrooms": 2,
			"toilette": 2,
			"garage": 1,
			"swimming_pool": 1,
			"reception_hall": 1,
			"balcony": 1,
			"elevator": 1,
			"gym": 1,
			"antiquity": "6",
			"property_id": 1,
			"garden": true,
			"terrance": true,
			"grill": 1,
			"credit_worthy": true,
			"professional_use": true,
			"created_at": "2023-07-17T04:04:35.000Z",
			"updated_at": "2023-07-17T04:04:35.000Z"
		}
	],
	"PropertiesPhotos": [
		{
			"id": 1,
			"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971905_ierfug.jpg",
			"property_id": 1,
			"created_at": "2023-07-17T09:40:33.000Z",
			"updated_at": "2023-07-17T09:40:33.000Z"
		},
		{
			"id": 2,
			"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971904_o65g8q.jpg",
			"property_id": 1,
			"created_at": "2023-07-17T09:40:33.000Z",
			"updated_at": "2023-07-17T09:40:33.000Z"
		},
		{
			"id": 3,
			"url": "https://res.cloudinary.com/dmp6ghtzb/image/upload/v1689612214/1096971875_efhbp5.jpg",
			"property_id": 1,
			"created_at": "2023-07-17T09:41:33.000Z",
			"updated_at": "2023-07-17T09:41:33.000Z"
		}
	],
	"properties_services": [
		{
			"id": 1,
			"property_id": 1,
			"electricidad": true,
			"telefono": true,
			"gas": true,
			"internet": true,
			"alarma": false,
			"ascensor": false,
			"created_at": "2023-07-17T09:40:35.000Z",
			"updated_at": "2023-07-17T09:40:35.000Z"
		},
		{
			"id": 2,
			"property_id": 1,
			"electricidad": true,
			"telefono": true,
			"gas": true,
			"internet": false,
			"alarma": true,
			"ascensor": true,
			"created_at": "2023-07-17T08:04:35.000Z",
			"updated_at": "2023-07-17T08:04:35.000Z"
		}
	],
	"properties_rooms": [
		{
			"id": 1,
			"property_id": 1,
			"cocina": 1,
			"comedor": 1,
			"living": 1,
			"baños": 1,
			"dormitorios": 2,
			"toilet": 1,
			"garage": 1,
			"terraza": 1,
			"pileta": 2,
			"jardin": 1,
			"sum": 1,
			"created_at": "2023-07-17T08:04:35.000Z",
			"updated_at": "2023-07-17T08:04:35.000Z"
		}
	]
}
``` 

* [Create a Property]: `POST /api/properties/create`

Used to register a new property to offer.

**URL** : `/api/properties/create`

**Metodo** : `POST`

**Requiere Autenticación** : YES

**Restricciones de Datos**

```json
{	
	"id": "[integer]",
	"name": "[string]",
	"description": "[text]",
	"images":"[string url]",
	"address": "[string, valid text plain address of the property]",
	"province": "[string, valid text plain province of the property]",
	"country": "[string, valid text plain country of the property]",
	"price": "[float, valid price amount that includes decimals]",
	"available": "[boolean]",
	"total_area":"`[integer]",
	"covered_area":"`[INTEGER]",
	"bedrooms":"`[integer]",
	"bathrooms":"`[integer]",
	"garage":"`[integer]",
	"swimming_pool":"`[integer]",
	"balocny":"`[integer]",
	"elevator":"`[integer]",
	"antiquity":"`[STRING]",
	"property_id":"`[integer]",
	"created_at": "`[date]",
	"updated_at": "`[date]",
	}
```

**Ejemplos de datos**

```json
"result": {
		"id": "03034567899",
		"property_id":"20221218",
		"name": "Monoambiente alq Palermo pesos",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"address": "123 fake street",
		"province": "MOntana",
		"country": "Argentina",
		"price": 125000,
		"available": "[true]",
		"createdAt": "2023-04-09T08:12:48.496Z",
		"updatedAt": "2023-04-09T16:56:01.426Z",
		"total_area":"500",
		"covered_area":"250",
		"bedrooms":"4",
		"bathroom":"2",
		"garaje":"2",
		"swimming_pool":"1",
		"balcony":"0",
		"elevator":"1",
		"antiquity":"5"				
	}
```

## Response Exitosa

**Code** : `200 OK`

**Content example**

```json
{
	"name": "[Monoambiente alq Pehuajó]",
	"address": "[123 Fake street]",
	"province": "[Montana]",
	"price": "[150000]",
}
```

## Error Response

**Condition** : Si un campo de las detalles no cumple con los requisitos.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Verificar que todos los campos esten cargados correctamente."
    ]
}
```
* [Get a Property] : `GET /api/properties/find/:id`

# Show a Property

Trae la ficha de la propiedad seleccionada

**URL** : `/api/properties/find/:id`

**Metodo** : `GET`

**Requiere Autenticación** : YES

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Restricciones de Datos**

```json
{	
	"id": "[integer]",
	"name": "[string]",
	"description": "[text]",
	"images":"string url",
	"address": "[string, valid text plain address of the property]",
	"province": "[string, valid text plain province of the property]",
	"country": "[string, valid text plain country of the property]",
	"price": "[float, valid price amount that includes decimals]",
	"available": "[boolean]",
	"total_area":"string",
	"bedrooms":"integer",
	"bathrooms":"integer",
	"garage":"integer",
	"swimming_pool":"integer",
	"balocny":"integer",
	"elevator":"integer",
	"antiquity":"STRING",
	"property_id":"integer",
	"created_at": "date",
	"updated_at": "date",
	}
```

**Ejemplos de contenido**

```json
{
	"result": {
		"id": "03034567899",
		"property_id":"123123456",
		"name": "Monoambiente alq Palermo pesos",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"address": "123 fake street",
		"province": "MOntana",
		"country": "Argentina",
		"price": 125000,
		"available": "[true]",
		"createdAt": "2023-04-09T08:12:48.496Z",
		"updatedAt": "2023-04-09T16:56:01.426Z",
		"total_area":"500",
		"bedrooms":"4",
		"bathroom":"2",
		"garaje":"2",
		"swimming_pool":"1",
		"balcony":"0",
		"elevator":"1",
		"antiquity":"5"				
	}
}
```

## Notes

* Endpoint will ignore irrelevant and read-only data such as parameters that
  don't exist, or fields that are not editable like `id` or `email`.
* Similar to the `GET` endpoint for the User, if the User does not have a
  UserInfo instance, then one will be created for them.

* [Update a Property] : `PUT /api/properties/update/:id`

# Update Property

Allow the Authenticated User as admin to update property info.

**URL** : `/api/properties/update/:id`

**Metodo** : `PUT`

**Requiere Autenticación** : YES

**Header**: Authorization

**Permissions required** : None

**Ejemplos de datos**

Puede modificar un solo valor

```json
{
	"price": 180000
}
```

## Response Exitosa

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
	"address": "123 fake street",
}
```

## Error Response

**Condition** : If provided data is invalid, or a name field is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "first_name": [
        "Verifique los datos ingresados.",
    ]
}
```

* [Delete a Property]: `DELETE /api/properties/`

**URL** : `/api/properties/:id`

**Metodo** : `DELETE`

**Requiere Autenticación** : YES

**Header**: Authorization

**Permissions required** : None

## Response Exitosa

**Code** : `200 OK`

**Content example** :

```json
{
"La propiedad ha sido eliminada."
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "Ocurrió un error al eliminar la propiedad."
}
``` 
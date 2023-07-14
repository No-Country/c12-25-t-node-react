# Appartamentos NC API Documentation

This project is part of No Country emulation process ...

1. Navigate to the directory where the repository was downloaded
``` bash
cd api
```
2. Install the required dependencies
``` bash
npm install
```
3. Configure API

	i. Locate the file named `.env.example` in the main /api folder.

	ii. Create a copy of this file, called `.env` by removing the `example` extension.

	iii. Open the `.env` file in a text editor.


## Authentication

Open endpoints require no Authentication.

* [Login]: `POST /api/login`

# Login

Used to collect a Token for a registered User.

**URL** : `/api/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{	
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "mail@example.com",
    "password": "Abc*d1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "tokenGenerated": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
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

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
	"name": "[valid name]",
	"lastName": "[valid lastname]",
	"email": "[valid email address]",
	"password": "[valid plain text password]"
}
```

**Data example**

```json
{
	"name": "Abelardo",
	"lastName": "Martinez",
	"email": "mail@example.com",
	"password": "Abc*d1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"name": "Abelardo",
	"lastName": "Martinez",
	"email": "amartinez@gmail.com",
	"is_active": "active",
	"id": "6438cb33d072af368825960e",
	"createdAt": "2023-04-14T03:40:35.226Z",
	"updatedAt": "2023-04-14T03:40:35.226Z"
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

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"id": "643273b3a5ae2815da879f25",
	"name": "Pedro",
	"lastName": "Porro",
	"email": "pporro12@gmail.com",
	"password": "$2b$10$fxMnMneNfj2dfcFzryXU..jMKVGIIAmPsfZqN6GnIetUQZlO7E3xq",
	"homeAddress": "Lancaster 652",
	"age": 39,
	"is_active": "active",
	"createdAt": "2023-04-09T08:13:39.195Z",
	"updatedAt": "2023-04-09T08:13:39.195Z"
}
```

* [Get an User] : `GET /api/me`

# Show Current User Info

Get the details of the currently Authenticated User along with basic
subscription information.

**URL** : `/api/me`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"result": {
		"id": "64327380a5ae2815da879f22",
		"name": "Pedro",
		"lastName": "Porro",
		"email": "miemail@gmail.com",
		"password": "123456",
		"homeAddress": "Lancaster 652",
		"age": 48,
		"is_active": "active",
		"createdAt": "2023-04-09T08:12:48.496Z",
		"updatedAt": "2023-04-09T16:56:01.426Z",
	}
}
```

* [List all Users] : `GET /api/users/list`

# List users

Get the list of users .

**URL** : `/api/users/list/`

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json

	{
		"id": "64327380a5ae2815da879f22",
		"name": "Pedro",
		"lastName": "Porro",
		"email": "miemail@gmail.com",
		"password": "123456",
		"homeAddress": "Lancaster 652",
		"age": 48,
		"is_active": "active",
		"createdAt": "2023-04-09T08:12:48.496Z",
		"updatedAt": "2023-04-09T16:56:01.426Z",
	},
	{
		"id": "643273b3a5ae2815da879f25",
		"name": "Pedro",
		"lastName": "Porro",
		"email": "pporro12@gmail.com",
		"password": "$2b$10$fxMnMneNfj2dfcFzryXU..jMKVGIIAmPsfZqN6GnIetUQZlO7E3xq",
		"homeAddress": "Lancaster 652",
		"age": 39,
		"is_active": "active",
		"createdAt": "2023-04-09T08:13:39.195Z",
		"updatedAt": "2023-04-09T08:13:39.195Z"
	},
	{
		"id": "6432f2e57394e81b51fe8033",
		"name": "Paul",
		"lastName": "Godrick",
		"email": "pgodrick@gmail.com",
		"password": "$2b$10$BBYD0N.6fC6IFNQcKkwnj.wHB4rRiUkifLuDcFNnqq2bcq0o04Ktu",
		"homeAddress": "Chesterfueld 122",
		"age": 26,
		"is_active": "active",
		"createdAt": "2023-04-09T17:16:21.917Z",
		"updatedAt": "2023-04-09T17:16:21.917Z"
	},
	{
		"id": "6432f3637394e81b51fe8036",
		"name": "Victor",
		"lastName": "Esparza",
		"email": "vesparza@gmail.com",
		"password": "$2b$10$SQ.LmsihSpgX4tbMPLZyPeMM74I9JYGY3zXlDBRd3nQfS4QNMLEEm",
		"homeAddress": "Neterfield 989",
		"age": 24,
		"is_active": "active",
		"createdAt": "2023-04-09T17:18:27.241Z",
		"updatedAt": "2023-04-09T17:18:27.241Z"
	}
]
```

* [Update an User]: `POST /api/users/update/:id`

# Update Current User info

Allow the Authenticated User to update their details.

**URL** : `/api/users/update/:id`

**Method** : `POST`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : None

**Data constraints**

```json
{
	"name": "Pedro",
	"lastName": "Porro",
	"password": "123456"
}
```

Note that `id` and `email` are currently read only fields.

**Data examples**

Partial data is allowed.

```json
{
    "name": "John"
}
```

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"id": "64327380a5ae2815da879f22",
	"name": "Pedro",
	"lastName": "Porro",
	"email": "miemail@gmail.com",
	"password": "123456",
	"homeAddress": "Lancaster 652",
	"age": 48,
	"is_active": "active",
	"createdAt": "2023-04-09T08:12:48.496Z",
	"updatedAt": "2023-04-09T16:56:01.426Z",
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

**Method** : `DELETE`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : None

## Success Responses

**Code** : `200 OK`

**Content example** :

```json
{
"La cuenta ha sido eliminada."
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

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": "0303456789963",
		"name": "Casa en venta 3hab San Fernando",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 40,
	},
	{
		"id": "0303456789963",
		"name": "Dpto en alquiler 1hab Palermo",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 95,
	},
	{
		"id": "0303456789963",
		"name": "Monoambiente alq Pehuajó",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 49,
	}
]
```
* [List Properties] : `GET /api/properties/list-available`

# List properties

Get the list of properties .

**URL** : `/api/properties/list-available`

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": "0303456789963",
		"name": "Casa en venta 3hab San Fernando",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 40,
		"available": "[available]"
	},
	{
		"id": "0303456789963",
		"name": "Dpto en alquiler 1hab Palermo",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 95,
		"available": "[available]"
	},
	{
		"id": "0303456789963",
		"name": "Monoambiente alq Pehuajó",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"price": 49,
		"available": "[available]"
	}
]
``` 

* [Create a Property]: `POST /api/properties/create`

Used to register a new property to offer.

**URL** : `/api/properties/create`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{	
	"id": "[id]",
	"name": "[valid name]",
	"description": "[valid text plain description of the property]",
	"address": "[valid text plain address of the property]",
	"province": "[valid text plain province of the property]",
	"country": "[valid text plain country of the property]",
	"price": "[valid price amount that includes decimals]",
	"available": "[valid text plain if the property is available]"
	}
```

**Data example**

```json
{
	"id": "6432f13b3413339193948eec",
	"name": "[Monoambiente alq Pehuajó]",
	"description": "[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.]",
	"address": "[123 Fake street]",
	"province": "[Montana]",
	"country": "[Argentina]",
	"price": "[150000]",
	"available": "[available]"
	
}
```

## Success Response

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

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"result": {
		"id": "03034567899",
		"name": "Monoambiente alq Palermo pesos",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
		"address": "123 fake street",
		"province": "MOntana",
		"country": "Argentina",
		"price": 125000,
		"available": "[Disponible]"
	}
}
```

## Notes

* Endpoint will ignore irrelevant and read-only data such as parameters that
  don't exist, or fields that are not editable like `id` or `email`.
* Similar to the `GET` endpoint for the User, if the User does not have a
  UserInfo instance, then one will be created for them.

* [Update a Property] : `POST /api/properties/update/:id`

# Update Property

Allow the Authenticated User as admin to update property info.

**URL** : `/api/properties/update/:id`

**Method** : `POST`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : None

**Data constraints**

```json
{
	"id": "0303456789963",
	"name": "Monoambiente alq Pehuajó",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
	"address": "123 fake street",
	"province": "MOntana",
	"country": "Argentina",
	"price": 185000,
	"available": "[Disponible]"
}
```

**Data examples**

Partial data is allowed.

```json
{
	"price": 180000
}
```

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"id": "0303456789963",
	"name": "Monoambiente alq Pehuajó",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ex tincidunt nunc molestie auctor.",
	"address": "123 fake street",
	"province": "MOntana",
	"country": "Argentina",
	"price": 185000,
	"available": "[Disponible]"
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

**Method** : `DELETE`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : None

## Success Responses

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
										//hasta acá seria lo nuestro <------

### Services

Endpoints for viewing and manipulating the services which store can offer, user must be Authenticated has permissions to access.

* [List Services](accounts/get.md) : `GET /api/services/`

# List services

Get the list of users .

**URL** : `/api/v1/services/`

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": "0303456789963",
		"name": "Arreglo de Barba",
		"price": 50,
		"description": "Arreglo de barba, corte y perfilado, toalla caliente y aplicacion de aceites y ceras para la barba",
	},
	{
		"id": "0303456789963",
		"name": "Corte de Cabello",
		"price": 60,
		"description": "Corte de cabello a tijera y maquinas, lavado de cabello y aplicacion de productos",
	},
	{
		"id": "0303456789963",
		"name": "Corte de Cabello y Arreglo de Barba",
		"price": 90,
		"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla",
	}
]
```

* [Create a Service](accounts/post.md) : `POST /api/v1/services/`

Used to register a new product to offer.

**URL** : `/api/v1/services/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
	"name": "[valid name]",
	"price": "[valid price amount that includes decimals]",
    "description": "[valid text plain description of a service]",
}
```

**Data example**

```json
{
	"name": "Corte de Cabello y Arreglo de Barba",
	"price": 90,
	"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"name": "Corte de Cabello y Arreglo de Barba",
	"price": 90,
	"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla",
	"id": "6432f2737394e81b51fe802f",
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

* [Get a Service](user/get.md) : `GET /api/v1/services/:id`

# Show a service

Get the details of a service

**URL** : `/api/v1/services/:id`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"result": {
		"id": "0303456789963",
		"name": "Corte de Cabello y Arreglo de Barba",
		"price": 90,
		"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla",
	}
}
```

* [Update a Service](accounts/pk/put.md) : `PATCH /api/v1/services/:id`


# Update service info

Allow the Authenticated User as admin to update product info.

**URL** : `/api/v1/services/:id`

**Method** : `PATCH`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : None

**Data constraints**

```json
{
	"name": "Corte de Cabello y Arreglo de Barba",
	"price": 115,
	"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla"
}
```

**Data examples**

Partial data is allowed.

```json
{
	"price": 135,
}
```

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"id": 03034567899636432f2737394e81b51fe802f",
	"name": "Corte de Cabello y Arreglo de Barba",
	"price": 121,
	"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla",
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


* [Delete a Service](accounts/pk/delete.md) : `DELETE /api/v1/services/:id`

### Bookings

Endpoints for viewing and manipulating the bookings that the Authenticated User
has permissions to access.

* [List Bookings](accounts/get.md) : `GET /api/bookings/`

# List Bookings

Get the list of users .

**URL** : `/api/v1/bookings/`

**Method** : `GET`

**Auth required** : YES

**Header** : x-access-token

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json

[
	{
		"id": "0303456789963",
		"user": "643273b3a5ae2815da879f25",
		"date": "2023-04-12T16:00:00.000Z",
		"service": "6432f2737394e81b51fe802f",
		"product": "6432f0fb3413339193948eea",
	},
	{
		"id": "0303456789963",
		"user": "64327380a5ae2815da879f22",
		"date": "2023-04-12T16:00:00.000Z",
		"service": "6432f2737394e81b51fe802f",
		"product": "6432f0fb3413339193948eea",
	},
	{
		"id": "0303456789963",
		"user": "64327380a5ae2815da879f22",
		"date": "2023-04-12T16:00:00.000Z",
		"service": "6432f25b7394e81b51fe802d",
		"product": "6432f0de3413339193948ee8",
	}
]
```

* [Create a Booking](accounts/post.md) : `POST /api/v1/bookings/`

Used to register a booking.

**URL** : `/api/v1/bookings/`

**Method** : `POST`

**Auth required** : `YES`

**Data constraints**

```json
{
	"user": "[valid client id]",
"date": "[valid date]",
	"service": "[valid service id]",
	"product": "[valid product id]"
}
```

**Data example**

```json
{
	"user": "64327380a5ae2815da879f22",
"date": "2023-04-23T16:00:00.000+00:00",
	"service": "6432f25b7394e81b51fe802d",
	"product": "6432f0de3413339193948ee8"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"user": "64327380a5ae2815da879f22",
"date": "2023-04-23T16:00:00.000Z",
	"service": "6432f25b7394e81b51fe802d",
	"product": "6432f0de3413339193948ee8",
	"id": "643b902e8ed9a25ac3f32d9b",
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

* [Show a Booking Detail](accounts/pk/get.md) : `GET /api/v1/bookings/:id`

# Show a booking detail

Get the details of a service

**URL** : `/api/v1/booking/:id`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"result": {
		"id": "0303456789963",
		"user": "643273b3a5ae2815da879f25",
		"date": "2023-04-12T16:00:00.000Z",
		"service": {
			"id": "6432f2737394e81b51fe802f",
			"name": "Corte de Cabello y Arreglo de Barba",
			"price": 90,
			"description": "Corte de cabello corte a tijera y maquinas, lavado de cabeza y aplicacion de productos / arreglo de barba , corte, perfilado toalla",
		},
		"product": {
			"id": "0303456789963",
			"name": "Beard Oil GROWTH - El Turco",
			"description": "ACEITE PARA BARBA GROWTH EL TURCO",
			"price": 95,
		},
	}
}
```

* [Update a Booking](accounts/pk/put.md) : `PATCH /api/v1/bookings/:id`

Allow the Authenticated User as admin to update booking info.

**URL** : `/api/v1/services/:id`

**Method** : `PATCH`

**Auth required** : YES

**Header**: x-access-token

**Permissions required** : YES

**Data constraints**

```json
{
	"user": "[valid client id]",
	"date": "[valid date]",
	"service": "[valid service id]",
	"product": "[valid product id]"
}
```

**Data examples**

Partial data is allowed.

```json
{
	"date": "2023/04/15",
}
```

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** :

```json
{
	"id": "0303456789963",
	"user": "64327380a5ae2815da879f22",
	"date": "2023-08-12T16:00:00.000Z",
	"service": "6432f25b7394e81b51fe802d",
	"product": "6432f0de3413339193948ee8",
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

* [Delete a Booking](accounts/pk/delete.md) : `DELETE /api/v1/bookings/:id`

# ----------------------------------------------------------------------------------------
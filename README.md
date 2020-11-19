# TP-ARQWEB
Base de datos con publicaciones de alquileres de inmuebles para inmobiliaria.

Objetivos del servicio rest:

Porder realizar publicaciones de alquileres de viviendas que persistan en una base no relacional MongoDB.
Las publicaciones podran ser editadas y consultadas por distintos atributos como la zona, el metraje, precio y cantidad de ambientes.

Instalar dependencias: npm install.
Correr el servidor node: npm start.

Endpoints:

- CREATE:
Create a property publication.

Url: localhost:3000/api/publications/
Body example : 
{
"street":"Av Libertador", 
"number":3000,
"district":"Belgrano", 
"cp":"1429", 
"type":"D", 
"apt":"1B", 
"rooms":3, 
"brooms":1, 
"price":180000 
}

- UPDATE:
Update an specific property by ID.

Url: localhost:3000/api/publications/id
Url Example: localhost:3000/api/publications/5f5c149294a3b61d10fac413
Body example : 
{
"street":"Av Libertador", 
"number":3000,
"district":"Belgrano", 
"cp":"1429", 
"type":"D", 
"apt":"1B", 
"rooms":3, 
"brooms":1, 
"price":180000 
}

- GET:
Get an specific property by ID.

Url: localhost:3000/api/publications/id

- GET BY ATTRIBUTES:
Get properties by district, and price range.

Url: localhost:3000/api/publications/filter
Complete request example: localhost:3000/api/publications/filter?district=Belgrano&maxPrice=185000&minPrice=40000

- DELETE:
Delete an specific property by ID.

Url: localhost:3000/api/publications/id
Example: localhost:3000/api/publications/5f5c149294a3b61d10fac413

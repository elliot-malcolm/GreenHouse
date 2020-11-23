
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "full_name" VARCHAR (255),
    "favorite_plant" VARCHAR (255), 
    "ecological_region" VARCHAR (255)
);

CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	"type" VARCHAR (80),
	"size" VARCHAR (80), 
	"notes" VARCHAR (255), 
	"list" VARCHAR (5),
	"sci_name" VARCHAR (255), 
	"image_url" VARCHAR (255), 
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "plant_type" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80), 
	"scientific_name" VARCHAR (255), 
	"image_url" VARCHAR (255),
	"plant_id" INT REFERENCES "plant"
);

INSERT INTO "plant_type" ("type", "scientific_name", "image_url")
VALUES
('Snake Plant', 
'Dracaena trifasciata', 
'https://bit.ly/35JxTy6'), 

('Bamboo palm', 
'Chamaedorea', 
'https://bit.ly/3pJcahI'),

('Fiddle Leaf Fig',
'Ficus lyrata',
'https://bit.ly/3pJb9Gq'),

('Monstera',
'Monstera deliciosa',
'https://bit.ly/35M4HXh'),

('Money Tree',
'Pachira aquatica',
'https://bit.ly/390ijAq'),

('Chinese Fan Palm',
'Livistona chinensis',
'https://bit.ly/332ITF7'),

('Kimberly Queen Fern',
'Nephrolepis obliterata',
'https://bit.ly/2UHDTkD'),

('Bird of Paradise',
'Strelitzia reginae',
'https://bit.ly/339lPVs'),

('Parlor Palm',
'Chamaedorea elegans',
'https://bit.ly/35IM2M1'),

('Rubber Tree',
'Ficus elastica',
'https://bit.ly/3nGh3Gw'),

('Aloe Vera',
'Aloe barbadensis mille',
'https://bit.ly/35U5tl2');

INSERT INTO "plant" ("name", "type", "size", "notes", "list", "sci_name", "image_url")
VALUES
('Joe', 'Bird of Paradise', 'smol', 'Thirsty', 'No', 'Strelitzia reginae', 'https://bit.ly/339lPVs')
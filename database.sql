
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
    "experience_level" VARCHAR (255)
);

CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	"type" VARCHAR (80),
	"size" VARCHAR (80), 
	"notes" VARCHAR (255), 
	"list" BOOLEAN DEFAULT FALSE,
	"sci_name" VARCHAR (255), 
	"img_url" VARCHAR (255), 
 	"user_id" INT REFERENCES "user"
);

CREATE TABLE "comments" (
	"id" SERIAL PRIMARY KEY, 
	"comment" VARCHAR (255),
	"commentor_name" VARCHAR (255),
	"plant_id" INT REFERENCES "plant"
	);
	
	

CREATE TABLE "plant_type" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80), 
	"sci_name" VARCHAR (255), 
	"img_url" VARCHAR (255),
	"plant_id" INT REFERENCES "plant"
);

INSERT INTO "plant_type" ("type", "sci_name", "img_url")
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

-- INSERT INTO plant ("name", "type", "size", "notes", "list", "sci_name", "img_url", "user_id")
-- VALUES
-- ('Joe', 'Bird of Paradise', 'smol', 'Thirsty', 'Yes', 'Strelitzia reginae', 'https://bit.ly/339lPVs', 1),
-- ('Jenean ', 'Aloe', 'medium', 'Thirsty', 'Yes', 'Aloe barbadensis mille', 'https://bit.ly/35U5tl2', 2),
-- ('Jerry', 'Fiddle Leaf Fig', 'smol', 'Thirsty', 'Yes', 'Ficus lyrata', 'https://bit.ly/3pJb9Gq', 3),
-- ('Fidel', 'Monstera', 'medium', 'Thirsty', 'Yes', 'Monstera deliciosa', 'https://bit.ly/35M4HXh', 4),
-- ('George', 'Money Tree', 'smol', 'Thirsty', 'Yes', 'Pachira aquatica', 'https://bit.ly/390ijAq	', 5);

-- UPDATE "plant" SET "name" = 'New Guy' WHERE "id" = 2;

-- SELECT * FROM "plant" WHERE "id" = 1;

-- SELECT "plant".*, "user"."username" FROM "plant" 
-- JOIN "user" ON "user"."id" = "plant"."user_id"
-- GROUP BY "plant"."id", "user"."username";

-- INSERT INTO "plant" ("name", "type", "size", "notes", "list", "sci_name", "img_url", "user_id")
-- VALUES
-- ('Jasper', 'Bird of Paradise', 'chonky', 'Happy', 'Yes', 'Strelitzia reginae', 'https://bit.ly/3fObFOP', 10),
-- ('Cruella', 'Monstera', 'medium', 'Thirsty', 'Yes', 'Monstera deliciosa', 'https://bit.ly/3qbUj3b', 10),
-- ('Ursella', 'Parlor Palm', 'medium', 'Thirsty', 'Yes', 'Chamaedorea elegans', 'https://bit.ly/3moKxZl', 10);


-- SELECT * FROM "plants"
-- JOIN "comments" 
-- ON "plants"."id" = "person_hobby"."person_id"; 

-- SELECT * FROM "person"
-- JOIN "person_hobby" 
-- ON "person"."id" = "person_hobby"."person_id"; 

-- SELECT * FROM "comments" WHERE "plant_id" = 5;

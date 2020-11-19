
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "full_name" VARCHAR (255)
);


CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	"type" VARCHAR (80),
	"size" VARCHAR (80), 
	"notes" VARCHAR (255), 
	"user_id" INT REFERENCES ("user")
);

CREATE TABLE "plant_type" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80), 
	"scientific_name" VARCHAR (255), 
	"image_url" VARCHAR (255), 
	"plant_id" INT REFERENCES ("plant")
);
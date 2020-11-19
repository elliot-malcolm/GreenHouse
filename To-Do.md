T0-D0:

Database:
[x] Setup full user database + dummy data
[x] Setup full plant database + dummy data 
[x] Setup "plant_type" database + 10 plant archive data

[x] Registration page:
    update registerForm and user.router.js to take in 3 additional parameters:
    [x] Fullname 
    [x] Favorite Plant (dropdown input)
    [x] Ecological region (dropdown input)

[] GreenHouse Dashboard page:
    [] Header: GreenHouse
    [] Plant Divs populated with IMG from plant_type 
    [] Bottom of page route to Create Plant Object page

[] Create Plant Object page:
    Input fields:
    [] Name
    [] Type: dropdown with options from plant_type db table
    [] Image Upload (stretch)
    [] Size: smol, adult, chonky
    [] special notes input
    [] ADD to Greenhouse: POST to plants db
    [] Dashboard route button 

[] Plant Details page:
    Display from plants/plant_type db:
    [] Name
    [] Type 
    [] Scientific Name
    [] size
    [] notes
    [] edit plant info page route

[] Edit Plant Details Page:
    PUT edits on fields:
    [] Plant Name
    [] Plant Type
    [] Size
    [] Special Notes
    [] Save Changes button for PUT request
    [] Delete Plant button for DELETE request
    [] Back to Dashboard route button 

[] Stretch
    [] Cloud Storage for plant image database 
    [] Cloud Storage for personalized image uploads
    [] Trefle API for plant info 
    [] Public List page to showcase garden 
    [] Plant Health History - page to add "Health History" dated data to plant object
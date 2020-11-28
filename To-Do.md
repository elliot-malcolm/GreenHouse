T0-D0:

Database:
[x] Setup full user database + dummy data
[x] Setup full plant database + dummy data 
[x] Setup "plant_type" database + INSERT 10 plants archive data


[x] Registration page:
    update registerForm and user.router.js to take in 3 additional parameters:
    [x] Fullname 
    [x] Favorite Plant (dropdown input)
    [x] Ecological region (dropdown input)

[] Create Plant Object page:
    Input fields:
    [x] Name
    [x] Type: dropdown with options from plant_type db table
    [x] Image Upload (stretch)
    [x] Size: smol, adult, chonky
    [x] special notes input
    [x] ADD to Greenhouse: POST to plants db
    [x] Dashboard route button 

[] GreenHouse Dashboard page:
    [x] Header: GreenHouse
    [x] Plant Divs populated with IMG from plant_type 
    [x] EDIT button
    [x] DELETE button and delete request

[x] Edit Plant Details Page:
    PUT edits on fields:
    [x] Plant Name
    [x] Plant Type
    [x] Size
    [x] Special Notes
    [x] Save Changes button for PUT request

Update Database:

    [x] reference "plant" through "user_id"
    [x] update "plant" routes and states to accommodate user_id
    [x] conditional render unique user gardens
    
    [] reference "comment" through "plant"
    [] build comment routes


Stretch
[] Plant List
    [x] map through reducer selecting boolean true
    [x] display to public list boolean TRUE
    [] allow comments
        []comments saga
        []comments put route
        []comments database 

[] Stretch
    [] Public List page to showcase garden 
    [] Public commenting feature 
    [] Cloud Storage for plant image database 
    [] Plant Health History - page to add "Health History" dated data to plant object
    [] Trefle API for plant info 


        // get all plant_type -> arrayreducer for all objects + sagawatcher fetch plant_type info
        // loop through reducer to display "type" only in dropdown
        // selection of type inserts full info into local state + other info 

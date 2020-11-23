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


        // get all plant_type -> arrayreducer for all objects + sagawatcher fetch plant_type info
        // loop through reducer to display "type" only in dropdown
        // selection of type inserts full info into local state + other info 

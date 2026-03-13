# CS3035 – Course Project Description

## Description of Your Project

My project is an interactive Restaurant Finder built with SimpleKit and Leaflet. It loads a dataset of Fredericton restaurants and displays them on an interactive map using custom emoji-based markers. Users can filter restaurants by category, price, rating, and features, and the map updates instantly. When a marker is clicked, details about the restaurant appear in a sidebar.

## Demonstration Video Link
https://unbcloud-my.sharepoint.com/:v:/g/personal/n9ux5_unb_ca/IQBIHTqyr90rS4Lq-lWgZIhAAQBZPJuR5sx880dtq1yRzxM?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=bHfrsb

## Requirements

#Different Views
My project uses two different views working together:
- Leaflet Map View — Shows all restaurants as emoji markers with colored borders based on rating. Clicking a marker updates the detail panel.

- Detail Panel View — Shows the selected restaurant’s information (name, rating, price, features, description, and address).

Both views display the same restaurant data but in different visual forms:
one is spatial (map), and one is textual (details).

#Domain Objects
The domain object for this project is the Restaurant.
Each restaurant contains:
- Name
- Address
- Latitude & Longitude
- Average price
- Category/type
- Rating
- List of features
- Description
The dataset is loaded when the app starts, and every filter interacts with this data through the Model layer.

#Custom Widgets
The project includes multiple custom widgets implemented using SimpleKit canvas rendering:
- RadioButtonGroup for selecting the restaurant category
- RatingSlider for minimum rating filtering
- Price Slider for maximum price
- Features Checkbox Group for filtering by features
- All widgets have Models, Views, and Controllers following MVC
Each widget updates the controller, which re-filters the data and redraws the map.

#Filtering System
Users can filter restaurants by:
-Category (e.g., Chinese, Indian, Burgers…)
-Price (via slider)
-Rating (minimum rating slider)
-Features (checkboxes like pet friendly, gluten free, etc.)
All filters work together and update instantly.

## Challenges and Improvements
The biggest challenge was synchronizing the custom widgets with the Leaflet map so that every interaction immediately updates the markers. Managing multiple controllers and redrawing the canvas widgets while keeping MVC clean took some effort.
If I continued improving the project, I would add:
- A double-thumb price slider for selecting a price range
- A distance filter to show restaurants within a radius
- Animations or marker clustering on the map
- Saving the user’s filter preferences

## Other Comments
The app meets all required features:
- MVC implemented for every widget
- Custom canvas based UI components
- Multiple views (map + detail panel)
- Real-time filtering of data
- Clean and consistent UI
- Fully working integration with Leaflet
This project successfully demonstrates my understanding of SimpleKit, MVC architecture, and interactive UI programming.





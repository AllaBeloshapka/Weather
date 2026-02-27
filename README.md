# Weather App

Live Demo:  
https://allabeloshapka.github.io/Weather/

## Overview

Weather App is a two-page React application for searching, storing, and managing weather data.

This project was developed as a **team project** as part of a frontend development program.

The project is built using:

- React + TypeScript  
- Redux Toolkit  
- React Router  
- Axios  
- Styled-components  
- OpenWeatherMap API  

---

## Team Collaboration

This project was developed as part of a team.

### My Contribution

I was responsible for the implementation of the **Home page**, including:

- Layout structure and UI implementation
- Integration with OpenWeatherMap API using Axios
- Handling asynchronous requests
- Loading state management (button disabling and spinner display)
- Error handling and rendering error cards
- Implementation of Save and Delete functionality
- Dispatching Redux actions for storing and removing weather data
- Input validation and alert handling

The Home page was built according to the functional requirements and integrated with the global Redux state and application routing.

---

## Application Structure

The application consists of two pages:

- Home
- Weather

---

## Home Page

### Contains:

- Title: "Weather App"
- Navigation links:
  - Home (active by default)
  - Weather
- Input field for city name
- Search button
- Area for displaying:
  - weather data
  - or error information

---

## Home Page Functionality

### Weather Search

When the **Search** button is clicked:

A request is sent to:

https://api.openweathermap.org/data/2.5/weather?units=metric&q=${CITY_NAME}&appid=${APP_ID}

During the request:

- The Search button is disabled
- A loading spinner may be displayed

---

### Weather Result Display

Displayed data includes:

- City name
- Temperature (metric units)
- Weather icon:

http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png

The weather card contains:

- Save button
- Delete button

---

### Error Handling

If the API returns an error:

- An error card is displayed instead of weather data
- The error card contains a Delete button

---

### Validation

If the city input is empty:

- An alert is displayed requesting the user to enter a city name

---

### Save Action

When the Save button is clicked:

- Weather data is stored in Redux state
- The card disappears from the Home page
- The saved data appears on the Weather page
- A success alert is displayed

---

### Delete Action (Home Page)

When Delete is clicked:

- The current weather or error card is removed
- A success alert is displayed

---

## Weather Page

### Contains:

- Title: "Weather App"
- Navigation links:
  - Home
  - Weather (active)
- List of saved weather cards
- Delete all cards button (visible only if at least one card exists)

---

## Weather Page Functionality

### Delete (Single Card)

When Delete is clicked:

- The selected weather card is removed from Redux state
- A success alert is displayed

---

### Delete All Cards

When Delete all cards is clicked:

- All saved weather data is removed from Redux state
- A success alert is displayed
- The button is visible only when at least one card exists

---

## Architecture

- All weather data is stored in Redux state
- Creation and deletion are handled through Redux actions
- API requests are performed using Axios
- Routing is implemented with React Router
- Styling is implemented using Styled-components

---

## Local Development

To run the project locally:

npm install  
npm run dev  

---

## Production Build and Deployment

npm run build  
npm run deploy  
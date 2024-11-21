# mtm6302-persistent-preferences-Mallika-Kapoor-041130241
Student Name: Mallika Kapoor
Student ID: 041130241
# Persistent Preferences Web Page

## Description
This project allows users to customize the appearance of a webpage, including changing the theme and list style preferences. The user's choices are saved in the browser's **localStorage** so that preferences persist even after the page is reloaded. The web page consists of two main sections:
- A **List** section (left side) that dynamically displays a list of items.
- A **Preferences** section (right side) that allows the user to select different themes and list styles.

## Features
- **Theme Selection**: Choose between three themes: Light, Dark, and Blue.
- **List Style Selection**: Choose from three different list styles: Bullet, Numbered, and Square.
- **Persistent Preferences**: The user's theme and list style preferences are saved using **localStorage** and are applied every time the page is loaded.
- **Responsive Design**: The layout adjusts to fit various screen sizes, ensuring the page is user-friendly on all devices.

## Technologies Used
- HTML
- CSS (with Poppins font from Google Fonts)
- JavaScript (Event Listeners, LocalStorage)

## Setup Instructions
1. Clone this repository to your local machine using:
    ```bash
    git clone https://github.com/MallikaKapoor041130241/mtm6302-persistent-preferences-Mallika-Kapoor-041130241.git
    ```
2. Open the `index.html` file in your preferred browser to view the web page.

## How It Works
- The page initially loads with default preferences.
- Users can select a theme and list style from the **Preferences** panel on the right side of the screen.
- Once a selection is made, the page updates immediately, and the new preferences are saved in **localStorage**.
- On page reload, the saved preferences are applied automatically.

## Challenges Faced
- **Ensuring persistent preferences**: Implementing localStorage to save and retrieve theme and list style preferences required careful consideration of how to manage state across page loads.
- **Responsive Design**: Making sure the layout adjusts for different screen sizes while maintaining a clean, readable design.
- **Dark Theme Text Visibility**: Ensuring text is readable in the dark theme, especially for the list items, by adjusting text colors dynamically with JavaScript.

## Future Improvements
- Add more customizable options for the list (e.g., font size, item color).
- Include more theme options.
- Enhance accessibility features (e.g., keyboard navigation, better contrast for visibility).


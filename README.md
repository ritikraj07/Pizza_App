
# React Native Pizza App

This is a simple React Native application that allows users to browse pizzas, add them to cart, and view pizza details. It demonstrates navigation using React Navigation, state management with Redux Toolkit, and persistent cart data using AsyncStorage.

## Features

- **Navigation:** Implemented using React Navigation with two tabs: "Home" and "Cart".
- **Screens:**
  - **Home Screen:** Displays a list of pizzas fetched from `pizzaData`.
  - **Details Screen:** Shows details of selected pizza with options to add to cart or buy (coming soon).
  - **Cart Screen:** Displays items added to cart with options to increase, decrease, or remove items.
- **State Management:** Utilizes Redux Toolkit for managing cart state including adding, removing, and updating items.
- **Persistence:** Cart items are stored locally using AsyncStorage for persistence across sessions.
- **Styling:** Basic styling using React Native StyleSheet for improved UI.

## Folder Structure

```

├── .expo/
├── assets/
└── src/
    ├── assets/
    ├── components/
    ├── constants/
    ├── hooks/
    ├── navigation/
    ├── screens/
    └── store/

```

- .expo: Expo related configuration files.
- **`assets/`:** Static assets like images and fonts.
- **`src/`:** Source code directory.
  - **`components/`:** Reusable UI components like `CartItem` and `Navbar`.
  - **`constants/`:** Static data files like `pizzaData`.
  - **`hooks/`:** Custom hooks like `useAsyncStorage` for AsyncStorage operations.
  - **`navigation/`:** Navigation setup using React Navigation.
  - **`screens/`:** Screen components like `HomeScreen`, `CartScreen`, and `PizzaItemDetails`.
  - **`store/`:** Redux store setup with `cartSlice` for cart state management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ritikraj07/pizza-app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd pizza-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Metro bundler:
   ```bash
   npm start
   ```
5. Follow instructions to run on iOS or Android simulator/emulator or real device using the Expo Go app.

<!-- ## Additional Notes

- This project was developed as an assessment task focusing on React Native development skills including navigation, state management, and AsyncStorage usage.
- Feel free to explore and expand upon the features and functionality as needed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

 -->

MOOD TRACK APP
Description
This React Native application consists of two screens: a login screen and a content screen. The login screen allows users to enter their username, which is then stored using AsyncStorage. After logging in, users are navigated to the content screen, where they can write and save notes. The content screen features a toggle switch to change between light and dark themes, and notes are categorized based on the selected theme. Notes are also stored locally using AsyncStorage.

Features
Login Screen: Users can enter their username, which is stored locally.
Content Screen: Users can write and save notes, which are categorized based on the selected theme (light or dark).
Theme Toggle: The app supports light and dark themes, which users can switch between using a toggle switch.
Data Persistence: Usernames and notes are stored locally using AsyncStorage, ensuring data persistence across sessions.
User Logout: Users can log out, which clears their stored username.
Installation
Clone the repository to your local machine.
Navigate to the project directory and run npm install to install dependencies.
Make sure you have Expo CLI installed globally. If not, you can install it using npm install -g expo-cli.
Connect your device or emulator and run npm start to start the Metro bundler.
Use Expo Go app on your device to scan the QR code from the Metro bundler or run the app on an emulator.
Usage
On the login screen, enter your username and tap "Login".
You will be navigated to the content screen, where you can write and save notes.
Use the toggle switch to change between light and dark themes.
Write your notes and tap "Add" to save them.
To delete a note, tap on the delete icon next to it.
Tap "Logout" to log out and clear your stored username.
Technologies Used
React Native
AsyncStorage
React Navigation
React Native Paper
Expo
Screenshots
![1](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/84c8ea6e-3007-4d6b-b167-b0196a376133)
![2](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/f8d3e4c9-a665-41af-a3a7-91022950f876)
![3](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/62fedfe2-6cc1-4d81-8782-9f4722c77594)
![4](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/fb43933a-9f5c-4eed-975a-eeb58f18214b)
![5](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/e2d977d0-a4f1-4291-a13e-05487daee038)
![6](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/0b89e2a4-db5a-4ffa-8659-e5a8c3e47706)
![7](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/3898386f-ff81-4b92-ab98-43ac43453ff3)

Contributing
Contributions are welcome! Please feel free to open a pull request or report any issues you encounter.

License
This project is licensed under the MIT License.

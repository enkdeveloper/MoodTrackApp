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
![1](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/4db77608-bed9-49d7-bc64-7fc08c4aa734)
![2](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/faaa71a1-cbd6-4191-923e-5e06fddb3096)
![3](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/43bed195-8fb6-4577-be42-89971b48b4cd)
![4](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/8b0c5ed4-34e6-4e7e-a375-abb1456c6d22)
![5](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/936d9c2c-ffed-4828-bf29-11945cb998a6)
![6](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/fc64bb31-1be8-48ef-970e-91ab40cc0c47)
![7](https://github.com/enkdeveloper/MoodTrackApp/assets/119349974/da726866-7ea4-4021-9861-023c7438003b)


Contributing
Contributions are welcome! Please feel free to open a pull request or report any issues you encounter.

License
This project is licensed under the MIT License.

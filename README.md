Booking Meeting Room based on Availability and QR Code Booking.
===

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Main technologies used

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Redux](http://redux.js.org/)

> Redux is a predictable state container for JavaScript apps.

- [React Native Elements](https://github.com/react-native-community/react-native-elements)

> React Native Router based on new React Native Navigation API

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
npx react-native run-android or react-native run-android
```

## Troubleshooting

**Note:** Each time you pull commits from others, run the **yarn** command to install dependencies that may have been introduced.

### react-native is not recognized as an internal or external command
- If your terminal is telling you react-native is not known, try to install it globally with npm: ```npm install -g react-native-cli``` and re-run the above command.

### 'adb' is not recognized as an internal or external command

If you have a build error with this message on Windows, it means that you must add the Android sdk platform tools to your environment PATH.

[How to add an environment variable on your computer.](https://www.java.com/en/download/help/path.xml)

My value on windows: *```C:\Users\Manuel\AppData\Local\Android\sdk\platform-tools```*

### failed to find target with hash string 'android-23'

React Native needs this to be installed in order to work, and the default target installed by *Android Studio* is the 24th. To solve this issue, open android studio and click on SDK Manager Icon:

![SDK Manager](https://i.snag.gy/bxQd0z.jpg)

Then click on the line with API Level of value 23 and apply.

![Install API 23 Instructions](https://i.snag.gy/LtYAR7.jpg)

### failed to find Build Tools revision *XX.X.X*

It seems you are missing the build tools at specific revision *XX.X.X*, so you need to install them. Go to Android Studio SDK Settings (see images above) and click on the SDK Tools snippet.

Then, click on **Show Package Details** and look for Android SDK Build Tools *XX.X.X*. Then check if it is installed. If not, install it and this issue should be solved then.

![SDK Manager Standalone](https://i.snag.gy/Y3X58Z.jpg)

### Execution failed for task ':app:dexDebug'

Go into the **android** project's folder in your terminal and run

*Windows*
```
gradlew clean
```

*Linux & Mac*
```
./gradlew clean
```

Then delete the build folder, go back to the project's root folder and try again, this error should be solved.

> **Note:** If it doesn't work as expected, try checking you have not forgotten any of the steps above. If not, please **open an issue and describe your problem**.

## Contributing to the project

Since the linting is done through [**eslint**](http://eslint.org/), you will need to configure your text editor to use the coding rules defined in the *.eslint.js* project file.

> A code that contains unjustified errors won't be merged to the master branch.

### Atom

- [Install Atom](https://atom.io/) if it's not done yet.

- [Open the Atom settings](http://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences) (*"Ctrl + ,"* shortcut) and go to *Install* section

![install-section](http://www.codeblocq.com/img/atom-prefs-install-tab.png)

- Then look for the linter package and install it

![linter-package](http://www.codeblocq.com/img/atom-linter-package.png)

- Then look for the linter-eslint package and install it

![linter-eslint-package](http://www.codeblocq.com/img/atom-linter-eslint-package.png)

- Open a javascript file (ending with *.js*) and paste

```js
console.log('raises two errors')
```
As you can guess, your editor should raise two errors because console.log is forbidden and there is a semi-column missing. Congrats !

> **Note:** If it doesn't work as expected, try checking you have not forgotten any of the steps above. If not, please open an issue and describe your problem.

## Testing

We will use [Jest](https://facebook.github.io/jest/) testing library because it allows us to test both components and functions in an easy and efficient way.

To run the tests, execute ```yarn test``` in a terminal opened in the project folder.
If you want to re-test each time you modify a test file, run ```yarn run test:watch```. Jest will watch for file changes and relaunch the tests for you.

### Files location

All tests are written in a \_\_tests\_\_ folder, alongside to what you want to test. For instance, there is a \_\_test\_\_ folder in the components folder, one other in actions, reducers and so on.

Jest will look for tests into those \_\_tests\_\_ folders, so you can't name it another way.

> **Note:** \_\_snapshots\_\_ folders are automatically generated, don't create them on your own.

### Unit testing redux (actions, reducers)

Dan Abramov, one of the main creator of Redux, [has written a very nice documentation](http://redux.js.org/docs/recipes/WritingTests.html#action-creators) that cover how to test actions and reducers with Jest.


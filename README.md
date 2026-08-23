# React Native Learning Workspace

This repository contains React Native practice projects and experiments built with TypeScript.

## Projects

- [Exp2](Exp2/README.md) - React Native practice app with examples for components, state, layouts, forms, validation, and lists.

## Requirements

- Node.js `22.11.0` or newer
- Android Studio with an emulator or connected Android device
- Xcode and CocoaPods for iOS development on macOS
- A completed [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment)

## Run Exp2

Open a terminal at the workspace root and install the project dependencies:

```sh
cd Exp2
npm install
```

Start the Metro development server:

```sh
npm start
```

In a second terminal, from the `Exp2` directory, run the Android app:

```sh
npm run android
```

On macOS, run the iOS app with:

```sh
npm run ios
```

For iOS native dependencies, run `bundle install` and `bundle exec pod install` inside `Exp2` before building.

## Development checks

From the `Exp2` directory:

```sh
npm test
npm run lint
```

## Workspace structure

```text
Exp2/
  App.tsx                  App entry point
  Component/Exp2/          Introductory React Native examples
  Component/Exp3/          Form, layout, and list examples
  __tests__/               Jest tests
  android/                 Android native project
  ios/                     iOS native project
```

## Learn more

- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment)
- [Fast Refresh](https://reactnative.dev/docs/fast-refresh)

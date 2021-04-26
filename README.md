## ABB FRONTEND

## Application structure

* Interface Folder: Here all the interfaces which represent the main models of the applications are defined.

* Components Folder: Here all the components which can be reused in the application are created.

* Pages Folder: Here a folder per page of the application will be created, it can include a custom hook to separate the logic a bit.

* Service Folder: This folder will be used to create validation functions, calculations functions, etc. They can be shared.

* Repository Folder: Here the functions that will make requests to the backend are created.

* __test__ folder: Here the application tests will be created.


## Technical implementation

	- I used the React library.
	- I used styled-components because I can create custom components with css, it has sass suport, I dont have to worry about the classes and I can use a ThemeProvider.
	- The components are very generic, so you can easily reuse them to create show a new part.
	- I Used Grid to accommodate the features because I think it is more scalable.
	- I Created a 5-column table following the layout that appeared in the .pdf, but we can change this property to "auto-fill" to make it more responsive, it just one line we need to update (\src\components\featureComponent\components.tsx - line 14).
	- I Created some Custom Hooks as controllers to separate them from the views.
	- The backend is mocked using a timeout to simulate a request.
	- In the file "\src\repository\part.repository.ts" there are features commented with different numbers of controls to see how the screen adapts. They can be uncommented, do not forget to refresh the application.

## TODO

- Implement a backend. An option could be webSockets to not consult the backend so much but to wait for the backend to notify when something changed.
- Avoid unnecessary renders. Implement React.memo, React.useMemo, React.UseCallback to not render all controls, features, parts that do not change. It doesn't seem to be 			something that changes very often.
- Implement React-router-dom to handle different pages/routes.
- Make components smaller and more reusable.
- Move all colors, sizes, etc to a Theme Provider.
- Improve styling.
- Add more test.

## Before run the application

- check that you are using the correct node version (v14.15.4). Also you can check in the .nvmrc file.

- run "npm install" to download all the required dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

**1.What is 'NPM'?**

When creating a react app we need to use many packages in the app. NPM(Node Package Manager) is used to manage these packages. There is no official fullform for npm.

**2. What is 'Parcel/Webpack'? Why do we need it?**

Parcel is a zero configuration build tool. It is web application bundler. while building the application parcel minifies, bundles and cleans the code. Parcel will also host our app on a server. It will automatically reload the pages when the changes are saved.

**3. What is '.parcel-cache'?**

.parcel-cache folder is created when we build the application. Parcel does the caching while development. Initially, the time taken by parcel to build the application is more. As we build the application again and again this time is reduced as it is caching things. This cache is stored in the .parcel-cache folder. It is like a space created by parcel which is needed while building the app.

**4. What is 'npx' ?**

npx stands for execute using npm. It runs the packages installed through npm.

**5. What is difference between `dependencies` vs `devDependencies`?**

Packages required by our application in production are knowns as dependencies. Packages required on in development environment and testing are known as devDependencies. We use --save-dev or -D while installing devDependency.

**6. What is Tree Shaking?**

In production builds, parcel analyzes the import and export of each module. It removes all the code which is not used. This is called tree shaking or dead code elimination.

**7. What is Hot Module Replacement?**

Parcel automatically rebuilds the changes in the app and updates the app in the browser. It updates the modules at the runtime without needing the whole page refresh. It maintains the app state when small changes are being made. CSS changes are automatically applied via HMR with no page reload necessary.

**8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.**

i. Hot Module Replacement - It updates the app in browser without full page reload when small changes are done.
ii. Caching while Development - Time taken to build the app is reduced everytime we build the app as parcel caches things each time. This cache is stored in .parcel-cache folder.
iii. Image optimization - In production mode, parcel reduces the size of images without affecting their quality.
iv. Development using https - Parcel allows us the build app on local/dev machine on https.
v. File Watcher - This is an algorithm written in C++ which watches every file in the project. Based on the events and metadata in these files, parcel decided which files needs to be rebuilt.
vi. Zero-Config - Just install parcela and give it the entry point to app, it will manage everything else.

**9. What is `.gitignore`? What should we add and not add into it?**

.gitignore is the auto-generated file inside the project folder which ignores the specified files while changes are committed to local or remote repositories.

Anythin which is auto-generated should be put in .gitignore.

**10. What is the difference between `package.json` and `package-lock.json`?**

When we initialize npm, package.json is created. It contains details of the NodeJS application we're using and versions details of all the packages we have installed.

Package-lock.json contains the details of the exact version of the packages needed in production mode. It locks the exact versions of any dependency required by the application.

we should never keep the package-lock.json file in .gitignore.

**11. Why should I not modify `package-lock.json`?**

As package-lock.json contains the exact version of the dependency required we should not modify the files. It may cause mismatch of the version in production environment and app will not work in production env.

**12. What is `node_modules` ? Is it a good idea to push that on git?**

Node modules folder appears whenever we install any package. It contains folders for all packages and takes up lot of space.
Package-lock.json file has sufficient information to recreate node modules on server, hence there is no need to push it on git repo.

**13.- What is the `dist` folder?**

Whenever we make a production build using parcel, dist folder is created. It contains 3 files which are bundled/minified version of our whole code.

**14.What is `browserlists`?**

If we want to make our app compatible with older browsers, we can list these older browsers in package.json.
browerslist.dev will give us the details of how to list these browsers.

**15. ^Carat vs ~ Tilde**

^ specifies to include the packages greater than a paticular version in the same major range. ex- “^3.0.1” would mean to inlcude everything from 3.0.1 (including) up to its next major version 4.0.0 (excluding).
~ specifies to include packages greater than a particular version in the same minor range. ex- '~3.9.0'would mean to inlcude everything from 3.9.0 (including) up to its next minor version 3.10.0 (excluding).

**16. Script types**

type not set - Indicates that the script is a "classic script", containing JavaScript code.

module - This value causes the code to be treated as a JavaScript module.

importmap - This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

any other value - The embedded content is treated as a data block, and won't be processed by the browser.

blocking - This attribute explicitly indicates that certain operations should be blocked on the fetching of the script.

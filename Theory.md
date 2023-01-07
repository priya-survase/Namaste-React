**1. What is Emmett?**
Emmett is a plugin which can be used in text editors to improve HTML/CSS workflow. It provides with code snippets which helps us to write code fast. You can get the preview of code snippets by typing the short forms (like element name).

**2. Difference between a library and a framework**

Both Library and Framework are codes written by someone else which we can use while appliaction development.

The difference lies in where the control of code lies. In technical terms this difference lies in the term INVERSION OF CONTROL.

When using a library, it is our code which calls the library code, whereas in frameworks, our code is called by the framework.

When we call a method from library, we are in control, whereas framework provides us with place to add code, and calls the added code when needed.

Libraries are easier to integrate in code and can be easily replace with another library. This is not easy in the case of frameworks.

**3.What is CDN? Why do we use it?**
CDN stand for Content Delivery Network or Content Distribution netwrok.

It is a network of interconnected servers which helps in faster data loading in webapplications.
If the user is located far away from server, it will take a long ime to load website content, therefore the website content is stored on CDN servers which are geographicallly closer to users and reaches their computer faster.

CDN improves the efficiency by introducing intermediate servers between client and the website server.They decrease the traffic to the web server and improves the user experience of your applications. It reduces page load time. It improves web security by reducing the threats of Distributed denial-of-service (DDoS) attacks which are attempts to take application down by increasing fake traffic to web server.

**4. Why is React known as React?**
The name React was chosen as it is meant to make user interfaces more responsive or 'reactive'. The library was designed to react to the changes in data. When the data in React application changes, the components which depend on that data are automatically updated. The name 'React' reflects this reactive nature of the library.

**5.What is crossorigin in script tag?**

The crossorigin attribute specifies that the script element suppports CORS mechanism. CORS stands for Cross Origin Resource Sharing. It is a mechanism used for retrieving files from third party servers.

Syntax : <script crossorigin="anonymous | use-credentials">

anonymous or "" or blank : A cross origin request will be sent without any credentials and basic http authentication is performed.

use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.

**6. What is diference between React and ReactDOM?**

The React Package holds the source for components, props and all the code that is react. ReactDOM is the middleman which renders the react element in browser. It is like a glue which helps us to connect our react application to index.html with the help of ReactDOM.render() method.

**7. What is difference between react.development.js and react.production.js files via CDN?**
The production version of React CDN is minimized and more optimized.

**8. What is async and defer?**

Async and defer are boolean attributes which are used along with script tag to load external scripts efficiently in our wepage.

When async & defer is not used: As soon as the script tag is encountered while html parsing, parsing is paused, script is fetched and executed and then the html parsing is resumed. Here script blocks the rendering of html for some time in between hence it is not a good practice.

Async: Scripts are fetched in parallel when html parsing is going on. As soon as the script is fetched, the html pasrsing is paused and script is executed. Parsing is resumed when the script execution is completed.
When using multiple scripts which might be dependent on each other, async should not be used as it does not guarantee the order of execution of scripts. It can be used when using scripts which are independent.

defer: Script fetching and html parsing is done in parallel. But the scripts are executed only when the html parsing is completed. It maintains the order of execution when multiple scripts are used.

**1. What is JSX?**

JSX is HTML like syntax used to create React Elements. It is not HTML inside JavaScript. It has no official full form but is mostly known as Javascript XML.

`const heading = (<h1 id="title" key="h2">Namaste React</h1>)`

Every attribute in JSX is written in Camelcase notation.

Babel takes piece of JSX code and converts it into React.createElement.

**2. Superpowers of JSX**

It improves readability of code. Code becomes easy to maintain.

**3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}**

{`TitleComponent`} --> It means that TitleComponent is a variable for JSX expression used in a component.

{`<TitleComponent/>`} --> It means that TitleComponent is a functional component added in another component.

{`<TitleComponent></TitleComponent>`} --> TitleComponent is a functional Component.

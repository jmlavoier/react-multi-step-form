# Multi Step Form
It's a simple step-by-step form using React/Redux.

## The project
This project is using the `create-react-app` to start quickly. The root directory is inside of `my-app/src/`.

### The structure

 ```
|- my-app 
    |- src/
        |- components
        |- containers
        |- recucers
        |- css
```

### Presentational components

First of all I created the `components` module containing all presentational components. Only these components can be styled. These components are leaned on their `css` and `test` files.
  
```
|- components
    |- Step
        |- index.js
        |- Step.js
        |- Step.css.js
        |- Step.test.js
```

### Containers components
The `containers` folder has to organize only the containers components to map the redux states and dispatch to props.

### Reducers
The `reducers` folder was created to combine the "thousands and thousands" reducers of the applications. 

And finally `css` is where the general styles are introduced.

## Layout 
I think that one of the things most dificult to define is the style(colors and the ux desing), so I've considered figure it out searching some designs to get inspired.

- The style was inspired by the [Asana Login](https://app.asana.com/-/login). I liked it :smile:, didn't you?

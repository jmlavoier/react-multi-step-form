# Multi Step Form
It's a simple step-by-step form using React/Redux.

## The project

### The structure

 ```
|- my-app 
    |- src/
        |- components
        |- containers
        |- store
        |- saga
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

## Technologies

- **JavaScript** - *ES6+ (Babel)*; 
- **UI Components** - *React*; 
- **State management** - *Redux, React Redux, Redux Saga*;
- **Preprocessor** - *Sass*;
- **Modules** - *Webpack, CSS Modules*;
- **Unit tests**: *Jest, Enzyme*;
- **Clean code** - *Lint*;

## Getting started
I encourage you to use the `yarn` to install the packages, you'll enjoy the yarn.lock to a faster installation, and the scripts will be fast too.

### Install
```
  yarn
```

### Start app
```
  yarn start
```

### Running tests
```
  yarn test
```

### Watching the tests
```
  yarn test:watch
```

### Running coverage
```
  yarn test:cov
```

### Start Coverage Server
```
  yarn server:cov
```

### Running ESLint
```
  yarn lint
```

### Troubleshoot Lint issues
```
  yarn lint:fix
```

###  Production build
```
  yarn build
```

### Production build watch
```
  yarn watch
```

## Credits
Created by [jmlavoier](https://github.com/jmlavoier)

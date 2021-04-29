## Refactor to Context API

1) Create contexts subfolder in src

2) Create context object JS file in the contexts subfolder

  - eg. ProductContext.js (must be capitalized because it is an object)

3) In the context JS object...

  - import createContext from react library

  [] import { createContext } from 'react';

  [] create the context object

    export const ProductContext = createContext();

    NOTE:  We initialize later, when providing the context to a component tree.



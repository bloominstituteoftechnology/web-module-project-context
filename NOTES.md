## Refactor to Context API

## 1) Create contexts subfolder in src

## 2) Create context object JS file in the contexts subfolder

  - eg. ProductContext.js (must be capitalized because it is an object)

## 3) In the context JS object...

  - import createContext from react library

  [] import { createContext } from 'react';

  [] create the context object

    export const ProductContext = createContext();

    NOTE:  We initialize later, when providing the context to a component tree.

## 4) Import ProductContext into App.

## 5) Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component.

  - Next pass a value prop to your `Provider`.

  - eg. 		
  <ProductContext.Provider value={{products, addItem}}>
    <Route exact path="/">
      <Products />
    </Route>
  </ProductContext.Provider>

## 6)  Now that we're providing our products state and addItem function we can simplify our products route a bit.  Remove the passing of props to the component.  

**Before**

```js
<Route exact path="/">
  <Products products={products} addItem={addItem} />
</Route>
```

**After**

```js
<Route exact path="/">
  <Products />
</Route>
```

## 7) Import { useContext } in the component you wish to access the context.

  [] import React, { useContext } from 'react';

## 8) import your context in the component you wish to access the context.

  [] import { ProductContext } from '../contexts/ProductContext'; 

## 9) In the component, call the `useContext` hook and pass in the context object we want to use into it.

  - eg. 

  const { products, addItem } = useContext(ProductContext);


  NOTE: When we do this, `useContext` is going to return value passed by our `ProductContext` Provider `value` prop. In our case we're getting back an object with two properties. A `products` property and a `addItem` property. We can go ahead and destructure those.

## 10) Do the refactor in the component:

  - To do so we just need to remove every instance of `props`.

  - Remove it from the function parameters
  - Remove it from the products map
  - Remove it from addItem prop

  NOTE: Now our `Products` component is getting it's data solely from `Context API` 😃.









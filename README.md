# Redux-training

# Index
  - Redux with React Native (this branch)
  - [Redux with Vanilla JavaScript](https://github.com/yanggak12/Redux-training/tree/vanilla-redux)
  - [Redux with React](https://github.com/yanggak12/Redux-training/tree/react-redux)

# Redux with React Native
Redux training with React Native\
Reference [jeffgukang's react-native tutorial](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/redux-tutorial/index-kr.html)

### Redux
- Redux makes global Store that is located at the top of application and supplies State to all other components.
- Store is the place where data is managed all over the country and Reducer, which is a pure function that changes data values according to Action, is defined.

```
npm install --save redux react-redux
```
### redux
Status container for Javascript apps.

### react-redux
It provides Provider component and connect method to make it easier to develop React + Redux.

```
ㄴ /app
  ㄴ /actions
     ActionTypes.js
     index.js
  ㄴ /components
     App.js 
     Counter.js
     CounterList.js
  ㄴ /containers
     CounterListContainer.js
  ㄴ /reducers
     index.js
  App.js
index.js
````

<h2><a href="https://github.com/yanggak12/Redux-training/tree/main/app/components">1. Presentational Component</a></h2>
<ul>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/components/App.js">App.js</a></li><li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/components/Counter.js">Counter.js</a></li><li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/components/CounterList.js">CounterList.js</a></li>
</ul>

<h2><a href="https://github.com/yanggak12/Redux-training/tree/main/app/containers">2. Container Component</a></h2>
<ul>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/containers/CounterListContainer.js">CounterListContainer.js</a></li>
</ul>

<h2><a href="https://github.com/yanggak12/Redux-training/tree/main/app/actions">3. Action</a></h2>
<ul>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/actions/ActionTypes.js">ActionTypes.js</a></li>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/actions/index.js">index.js</a></li>
</ul>

<h2><a href="https://github.com/yanggak12/Redux-training/tree/main/app/actions">4. Reducer</a></h2>
<ul>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/reducers/index.js">index.js</a></li>
</ul>

<h2><a href="https://github.com/yanggak12/Redux-training/blob/main/app">5. Provider</a></h2>
<ul>
  <li><a href="https://github.com/yanggak12/Redux-training/blob/main/app/App.js">App.js</a></li>
</ul>

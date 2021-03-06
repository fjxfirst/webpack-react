import React from 'react';
import ReactDom from 'react-dom';
import TodoList from 'components/TodoList'
import store from 'store'
import {Provider} from 'react-redux'
const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
)
function render(){
  ReactDom.render(App, document.getElementById('app'))
}
render()
store.subscribe(render)
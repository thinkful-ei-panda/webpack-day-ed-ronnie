import $ from 'jquery';
import shoppingList from './shopping-list.js';
import './index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

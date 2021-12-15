import Component from './core/Component.js';
import Form from './components/Form.js';
import { newElement } from './utils/dom.js';

export default class App extends Component {
  initChildren() {
    this.children = [new Form(newElement('<form/>'))];
  }
}

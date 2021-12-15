import Component from './core/Component.js';
import Form from './components/Form.js';
import Result from './components/Result.js';
import { ERROR_MESSAGE, ERROR_TYPE } from './utils/constants.js';
import { newElement } from './utils/dom.js';
import {
  calculateShortestPath,
  calculateTotalDistanceAndTime,
} from './utils/calculate.js';

export default class App extends Component {
  initState() {
    this.state = {
      path: [],
      totalDistance: 0,
      totalTime: 0,
    };
  }

  handleSubmitForm(departure, arrival, option) {
    const path = calculateShortestPath(departure, arrival, option);
    if (!path) return alert(ERROR_MESSAGE[ERROR_TYPE.NOT_CONNECTED]);
    const { totalDistance, totalTime } = calculateTotalDistanceAndTime(path);
    this.setState({ path, totalDistance, totalTime });
  }

  initChildren() {
    this.children = [
      new Form(newElement('<form id="form"/>'), {
        handleSubmit: (departure, arrival, option) =>
          this.handleSubmitForm(departure, arrival, option),
      }),
      new Result(newElement('<div id="result"/>'), { ...this.state }),
    ];
  }
}

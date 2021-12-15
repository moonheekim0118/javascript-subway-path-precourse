import Component from '../core/Component.js';
import { $ } from '../utils/dom.js';
import {
  ERROR_MESSAGE,
  EVENT_TYPE,
  ELEMENT,
  SELECTOR,
  SEARCH_OPTION,
} from '../utils/constants.js';
import { parseStringInput } from '../utils/input.js';
import { checkValidStations } from '../utils/validations.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmit());
  }

  onSubmit() {
    const departureName = parseStringInput(
      $(SELECTOR.DEPARTURE_INPUT, this.$container)
    );
    const arrivalName = parseStringInput(
      $(SELECTOR.ARRIVAL_INPUT),
      this.$container
    );
    const option = $(SELECTOR.SEARCH_RADIO, this.$container).value;
    const { SUCCESS, ERROR } = checkValidStations(departureName, arrivalName);
    if (!SUCCESS) return alert(ERROR_MESSAGE[ERROR]);
    this.props.handleSubmit(departureName, arrivalName, option);
  }

  render() {
    this.$container.innerHTML = `
        <label for=${ELEMENT.DEPARTURE_INPUT}>출발역</label>    
        <input id=${ELEMENT.DEPARTURE_INPUT} required/>
        <label for=${ELEMENT.ARRIVAL_INPUT}>도착역</label>   
        <input id=${ELEMENT.ARRIVAL_INPUT} required/>
        <input type="radio" name=${ELEMENT.SEARCH_RADIO} id="path" value=${SEARCH_OPTION.PATH} checked/>
        <label for="path">최단경로</label>
        <input type="radio" name=${ELEMENT.SEARCH_RADIO} id="time" value=${SEARCH_OPTION.TIME} />
        <label for="time">최소시간</label>
        <button id=${ELEMENT.SEARCH_BUTTON}>검색하기</button>
      `;
  }
}

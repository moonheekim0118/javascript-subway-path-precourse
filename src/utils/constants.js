export const EVENT_TYPE = {
  SUBMIT: 'submit',
  CLICK: 'click',
};

export const ELEMENT = {
  DEPARTURE_INPUT: 'departure-station-name-input',
  ARRIVAL_INPUT: 'arrival-station-name-input',
  SEARCH_RADIO: 'search-type',
  SEARCH_BUTTON: 'search-button',
};

export const SELECTOR = {
  DEPARTURE_INPUT: `#${ELEMENT.DEPARTURE_INPUT}`,
  ARRIVAL_INPUT: `#${ELEMENT.ARRIVAL_INPUT}`,
  SEARCH_RADIO: `input[name=${ELEMENT.SEARCH_RADIO}]:checked`,
};

export const ERROR_TYPE = {
  NOT_VALID_STATION: 'NOT_VALID_STATION',
  SAME_STATIONS: 'SAME_STATIONS',
  NOT_CONNECTED: 'NOT_CONNECTED',
};

export const ERROR_MESSAGE = {
  [ERROR_TYPE.NOT_VALID_STATION]: '존재하지 않는 역입니다.',
  [ERROR_TYPE.SAME_STATIONS]: '같은 역 사이의 경로를 검색할 수 없습니다.',
  [ERROR_TYPE.NOT_CONNECTED]: '경로가 존재하지 않는 역입니다.',
};

export const SEARCH_OPTION = {
  PATH: 'path',
  TIME: 'time',
};

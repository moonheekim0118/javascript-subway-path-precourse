import { stations } from './initialDatas.js';
import { ERROR_TYPE } from './constants.js';

const VALIDATION_RESULT = (SUCCESS, ERROR = '') => {
  return { SUCCESS, ERROR };
};

const isValidStation = station => stations.has(station);

export const checkValidStations = (departureName, arrivalName) => {
  if (!isValidStation(departureName) || !isValidStation(arrivalName))
    return VALIDATION_RESULT(false, ERROR_TYPE.NOT_VALID_STATION);
  if (departureName === arrivalName)
    return VALIDATION_RESULT(false, ERROR_TYPE.SAME_STATIONS);
  return VALIDATION_RESULT(true);
};

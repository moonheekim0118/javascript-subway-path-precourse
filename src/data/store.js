import { sections } from './index.js';
import { SEARCH_OPTION } from '../utils/constants.js';
import Dijkstra from '../utils/Dijkstra.js';

const minDistanceStore = new Dijkstra();
const minTimeStore = new Dijkstra();

sections.forEach(({ departure, arrival, distance, time }) => {
  minDistanceStore.addEdge(departure, arrival, distance);
  minTimeStore.addEdge(departure, arrival, time);
});

export default {
  [SEARCH_OPTION.PATH]: minDistanceStore,
  [SEARCH_OPTION.TIME]: minTimeStore,
};

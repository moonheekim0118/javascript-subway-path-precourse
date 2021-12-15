import DijkstraStore from '../data/store.js';
import { sections } from '../data/index.js';

export const calculateShortestPath = (departure, arrival, option) =>
  DijkstraStore[option].findShortestPath(departure, arrival) || [];

export const findSection = (inputDeparture, inputArrival) =>
  sections.find(({ departure, arrival }) => {
    return (
      (inputDeparture === departure && inputArrival === arrival) ||
      (inputDeparture === arrival && inputArrival === departure)
    );
  });

export const calculateTotalDistanceAndTime = path => {
  let totalDistance = 0;
  let totalTime = 0;

  path.forEach((station, index) => {
    if (index < path.length - 1) {
      const { distance, time } = findSection(station, path[index + 1]);
      totalDistance += distance;
      totalTime += time;
    }
  });
  return { totalDistance, totalTime };
};

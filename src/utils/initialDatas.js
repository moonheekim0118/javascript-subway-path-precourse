const initialStation = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];

export const stations = new Set(initialStation);

const arrivalInformationGenerator = (to, distance, time) => {
  return { to, distance, time };
};

export const lineConnections = {
  교대: [
    arrivalInformationGenerator('강남', 2, 3),
    arrivalInformationGenerator('남부터미널', 3, 3),
  ],
  강남: [
    arrivalInformationGenerator('역삼', 2, 3),
    arrivalInformationGenerator('양재', 10, 3),
  ],
  역삼: [],
  남부터미널: [arrivalInformationGenerator('양재', 6, 5)],
  양재: [
    arrivalInformationGenerator('매봉', 1, 1),
    arrivalInformationGenerator('양재시민의숲', 10, 3),
  ],
  양재시민의숲: [],
  매봉: [],
};

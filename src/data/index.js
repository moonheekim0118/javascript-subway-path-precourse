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

const connectionGenerator = (departure, arrival, distance, time) => {
  return { departure, arrival, distance, time };
};

export const sections = [
  connectionGenerator('교대', '강남', 2, 3),
  connectionGenerator('교대', '남부터미널', 3, 2),
  connectionGenerator('강남', '역삼', 2, 3),
  connectionGenerator('강남', '양재', 2, 8),
  connectionGenerator('남부터미널', '양재', 6, 5),
  connectionGenerator('양재', '매봉', 1, 1),
  connectionGenerator('양재', '양재시민의숲', 10, 3),
];

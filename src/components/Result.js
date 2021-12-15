import Component from '../core/Component.js';

export default class Result extends Component {
  render() {
    const { path, totalDistance, totalTime } = this.props;
    if (path.length === 0) return;
    this.$container.innerHTML = `
      <table>
        <tr>
            <th>총 거리</th>
            <th>총 소요 시간</th>
        </tr>
        <tr>
            <td>${totalDistance}km</td>
            <td>${totalTime}분</td>
        <tr>
        <tr>
            <td>${path.map(station => station).join('->')}</td>
        </tr>
      <table/>
      `;
  }
}

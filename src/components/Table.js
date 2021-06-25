import React from 'react';
import './Table.css'

export default class Table extends React.Component {
  render() {
    const { data, columns } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((column, idx) => {
                return <th key={idx}>{column}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item._id}</td>
                  <td>{item.content}</td>
                  <td>{item.nickName}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.__v}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

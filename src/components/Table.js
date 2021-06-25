import React from 'react';
import './Table.css'

export default class Table extends React.Component {
  pageSize = 5;

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    }
  }

  onChangePage = (event) => {
    const pageNum = event.target.textContent;
    this.setState({
      page: pageNum
    });
  }

  getCurrentPageData = () => {
    const { page } = this.state;
    const { pageSize } = this;
    const { data } = this.props; 
    const startIdx = pageSize * (page - 1);
    const endIdx = pageSize * page;
    return data.slice(startIdx, endIdx);
  }

  buttonList = () => {
    const { data } = this.props;
    const { pageSize } = this;
    const limitPage = Math.ceil(data.length / pageSize)
    const buttonList = [];
    for(let i = 1; i < limitPage +1; i++) {
      buttonList.push(i);
    }
    return buttonList;
  }

  render() {
    const { columns } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((column, idx) => (
                <th key={idx}>{column}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {this.getCurrentPageData().map((item, idx) => (
              <tr key={idx}>
                <td>{item._id}</td>
                <td>{item.content}</td>
                <td>{item.nickName}</td>
                <td>{item.createdAt}</td>
                <td>{item.__v}</td>
              </tr>
              )
            )}
          </tbody>
        </table>
        {this.buttonList().map((pageNum, idx) => (
          <button key={idx} onClick={this.onChangePage}>{pageNum}</button>
          )
        )}
      </div>
    );
  }
}

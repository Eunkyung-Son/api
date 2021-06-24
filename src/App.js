import axios from 'axios';
import React from 'react';
export default class App extends React.Component {

  HEADERS = {
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ0NzQ5MmQ3YzUzMzAwNTEzZjk4YmMiLCJpYXQiOjE2MjQ1MzYyMTAsImV4cCI6MTYyNDYyMjYxMH0.v6lYQz3KESMQE43uA71_2IaQk63dK2e9smsR5SYmij4',
    'Content-Type': 'application/json',
  };

  constructor(props) {
    super(props);
    this.state = {
      nickName: '',
      content: '',
    }
  }

  onChangeNickName = (event) => {
    if(!event.target.value) return;
    this.setState({ nickName: event.target.value })
  }

  onChangeContent = (event) => {
    if(!event.target.value) return;
    this.setState({ content: event.target.value })
  }

  savePost = async (event) => {
    event.preventDefault()
    const URL = 'http://dauth.daios.net/v1/boards';
    const { content, nickName } = this.state;
    if (!content || !nickName) {
      alert('닉네임과 내용을 모두 입력해주세요');
      return;
    }
    await axios
      .post(URL, { content, nickName }, {
        headers: {
          ...this.HEADERS,
        },
      })
      .then((response) => {
        alert('게시물이 등록되었습니다.');
      }).catch((error) => {
        alert('게시물 등록중 오류가 발생했습니다.');
      })
  };
  
  render() {
    const { nickName, content } = this.state;

    return (
      <div>
        <form onSubmit={this.savePost}>
          <label for="nickname">
            Nickname: 
            <input 
              type="text" 
              name="nickName" 
              value={nickName}
              placeholder={"닉네임을 입력해주세요."}
              onChange={this.onChangeNickName}
            />
          </label>
          <label for="content">
            Content: 
            <input 
              type="text" 
              name="content" 
              value={content}
              placeholder={"내용을 입력해주세요."}
              onChange={this.onChangeContent}
            />
          </label>
          <input type="submit" value="submit" /> 
        </form>
      </div>
    )
  }
}

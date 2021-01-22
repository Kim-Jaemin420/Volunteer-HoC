import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import { Link, withRouter } from 'react-router-dom';
import AskRemoveModal from './AskRemoveModal';
import {MdAssignment} from 'react-icons/md'
import {FaEnvelopeOpenText} from 'react-icons/fa'
const GlobalList = styled.div`
  position:relative;
  width: 100%;
  min-height: 700px;
  .selectRemoveButton{
    position:absolute;
    right:20px;
    margin:20px 0;
  }
  .postListIcon{
  text-align:center;
  font-size:2rem;
  padding:20px 0;
  }
  .a11y {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0);
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
  }
  .title{
  font-size: 1.7rem;
  text-align:center;
  font-size:2.2rem;
  font-weight:700;
  }
  .titleSub{
  width:300px;
  font-size:1.1rem;
  height:140px;
  text-align:center;
  position:relative;
  line-height:100px;
  margin:0 auto;
  color:#03c75a;
    ::before{
    content:'';
    position:absolute;
    top:20px;
    left:50%;
    transform:translateX(-50%);
    width:25px;
    height:2px;
    background:#03c75a;
    }
}  
  
  button{
    margin-right:30px;
    // background-color:yellow;
    // color:black;

  }
  ul{
    margin-top:100px;
  }
  li{
    border-bottom:1px solid black;
    padding:10px 0;
    text-align:center;
  }
  span{
    display:inline-block;
    padding:0 5px
  }

  .ListCheckbox, li input[type='checkbox']{
    width:10%;
  }
  .ListDate{
    width:15%;
  }
  .link span:nth-child(1){
    width:15%
  }
  .ListTitle{
    width:30%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
  }
  .link span:nth-child(2){
    width:30%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    text-align:left;
    margin-left : 20px;
  }
  .ListPeriod, .link span:nth-child(3){
    width:25%;
  }
  .ListRemove{
    width:10%;
  }
  li button{
    position: relative;
    right: -15px;
  }
  li span.ListTitle{
    text-align:center
  }

  
`;

const MyPost = ({ AuthState, ListName, onChecking, modal, onConfirm, onCancel, onRemoveClick, onAllClick }) => {
  return (
    <div>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <GlobalList>
          <div className="postListIcon"><FaEnvelopeOpenText /></div>
          <h1 className="title">{AuthState.login.username}(이/가)작성한 공고</h1>
        <p className="titleSub">내가 쓴글 보기</p>
          <ul>
            <li>
              <span className="ListCheckbox">체크박스</span>
              <span className="ListDate">작성날짜</span>
              <span className="ListTitle">제목</span>
              <span className="ListPeriod">모집기간</span>
              <span className="ListRemove">삭제</span>
            </li>
            {ListName.map(list=>(
              <li key = {list._id} id={list._id}>
                <input type="checkbox" onChange={onChecking}></input>
                <Link to ={`/${list._id}`} className="link">
                  <span>{list.publishedDate.slice(0,10)}</span>
                  <span >{list.title}</span>
                  <span>{list.periodStart}~{list.periodEnd}</span>
                </Link>
                <button>삭제</button>
              </li>
            ))}
          </ul>
          {/* <Button onClick={onAllClick}>전체선택</Button> */}

          <Button className="selectRemoveButton" style={{marginTop: 20}} onClick={onRemoveClick}>전체삭제</Button>

          <AskRemoveModal 
            visible ={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </GlobalList>
      </StyledContainer>
    </div>
  );
};

export default withRouter(MyPost);
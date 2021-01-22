import React,{useState,useEffect } from 'react';
import styled from 'styled-components';
import MapContainer from '../../lib/api/MapContainer';
import StyledContainer from '../common/Container';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';
import Button from '../common/Button';
import { Prompt, withRouter } from 'react-router-dom';
import Modal from '../common/Modal';
import AskModal from '../common/AskModal';
import AskPostModal from './AskPostModal';
import {CgNotes} from 'react-icons/cg'
// import Select from 'react-select';
export const WritePageContainer = styled.div`
  position:relative;
  text-align:center;
  // font-family: 'MapoFlowerIsland';
  width: 100%;
  min-height: 700px;
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
  // font-family: 'Cafe24Oneprettynight';
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

#post-title {
  font-size: 1.2rem;
  padding:10px;
}
.post-content-wrap {
  display:flex;
  justify-content:center;
  text-align:center;
  background-color: #fff;
}
.post-content-left,
.post-content-right {
  width:50%;
}
.post-content-right {
  display:flex;
  flex-flow: row wrap;
}
.post-content-right label {
  display:flex;
  align-items:center;
  justify-content:center;
  width:20%;
  color: ${palette.gray[6]};
}
.post-content-right input,
.post-content-right select {
  width: 80%;
}
#post-people,
#post-gender {
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  color: rgb(118,118,118);
  width:80%;
}
.period-wrap {
  width:100%;
  display: flex;
  text-align:center;
  justify-content:center;
  align-items:center;
}
.period-wrap label:first-child {
  width:50%;
}
.period-wrap input {
  /* width:70%; */
}
.btn-cancel,
.btn-add {
}
.btn-cancel{
  float:right;
}
.btn-add{
  float:right;
  margin-left:5px;
}
`
export const StyledSelect = styled.select`
  /* font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  color: rgb(118,118,118); */
  /* width: 100%; */
  /* &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  } */
`;
export const StyledTextarea = styled.textarea`
  // font-family: 'MapoFlowerIsland';
  font-size: 1.5rem;
  width:100%;
  min-height: 500px;
  resize:none;
  outline:none;
  /* border:1px solid #eee; */
  border:none;
  margin-top:10px;
  padding: 10px;
`;
export const StyledInput = styled.input`
  // font-family: 'MapoFlowerIsland';
  font-size: 1rem;
  border: none;
  background: #f8f8f8;
  /* padding-bottom: 0.5rem; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    /* border-bottom: 1px solid ${palette.gray[7]}; */
  }
  & + & {
    /* margin-top: 1rem; */
  }
`;
export const Write = ({ PostState, AuthState, onChange, onSubmit, modalOpen, closeModal,history, handlePrompt, isLeave }) => {
  console.log("AuthState", AuthState);
  console.log(1);
  return (
    <>
    <Header AuthState={AuthState} />
    <StyledContainer>
    <WritePageContainer>
    <div>
        <div className="postListIcon"><CgNotes /></div>
        <h1 className="title">모집 공고 등록</h1>
        <p className="titleSub">봉사지원자 모집 공고 등록 하기</p>
        <form onSubmit={onSubmit}>
          <legend>
            <fieldset>
              <p>
                <label className="a11y" htmlFor="post-title">공고 제목</label>
                <StyledInput 
                  id="post-title" 
                  name="title"
                  type="text" 
                  placeholder="모집 공고의 제목을 입력해 주세요"
                  defaultValue={PostState.posts.title}
                  onChange={onChange} />
              </p>
              <div className="post-content-wrap">
                <div className="post-content-left">
                <MapContainer
                    {...PostState.posts}
                  />
                </div>
                <div className="post-content-right">
                  <label htmlFor="post-name">업체명</label>
                  <StyledInput 
                  id="post-name" 
                  name="companyName"
                  type="text" 
                  placeholder="업체명을 입력해주세요." 
                  defaultValue={AuthState.company.companyName}
                  onChange={onChange}
                  />
                  <label htmlFor="post-phone">전화번호</label>
                  <StyledInput 
                  id="post-phone" 
                  name="phoneNumber"
                  type="text" 
                  placeholder="전화번호를 입력해주세요."
                  defaultValue={AuthState.company.phoneNumber}
                  onChange={onChange}
                  />
                  <label htmlFor="post-address">주소</label>
                  <StyledInput 
                  id="post-address" 
                  name="address"
                  type="text" 
                  placeholder="주소를 입력해주세요." 
                  defaultValue={AuthState.company.address}
                  onChange={onChange}
                  />
                  <div className="period-wrap">
                  <label htmlFor="post-period-start">기간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="periodStart"
                  type="date" 
                  defaultValue={PostState.posts.periodStart}
                  onChange={onChange}
                  />
                  <label htmlFor="post-period-end"> ~ </label>
                  <StyledInput 
                  id="post-period-end" 
                  name="periodEnd"
                  type="date"
                  defaultValue={PostState.posts.periodEnd} 
                  onChange={onChange}
                        />
                </div>
                <div className="period-wrap">
                  <label htmlFor="post-period-start">시간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeStart"
                  type="time" 
                  defaultValue={PostState.posts.timeStart} 
                  onChange={onChange}
                        />
                  <label htmlFor="post-period-start"> ~ </label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeEnd"
                  type="time" 
                  defaultValue={PostState.posts.timeEnd}
                  onChange={onChange}
                  />
                  </div>
                  <label 
                  htmlFor="post-people">인원수</label>
                  <StyledSelect 
                  id="post-people"
                  name="number"
                  defaultValue={PostState.posts.number}
                  onChange={onChange}
                  >
                    <option value="">원하는 인원수를 입력해주세요</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </StyledSelect>
                  <label htmlFor="post-gender">성별</label>
                  <StyledSelect 
                  id="post-gender"
                  name="gender"
                  
                  defaultValue={PostState.posts.gender}
                  onChange={onChange}>
                    <option value="">원하는 봉사자의 성별을 골라주세요</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                    <option value="성별무관">성별무관</option>
                  </StyledSelect>
                </div>
              </div>
                <StyledTextarea
                placeholder="봉사 활동 관련한 상세한 내용을 적어주세요."
                name="body"
                defaultValue={PostState.posts.body}
                onChange={onChange}
                ></StyledTextarea>
              <Button className="btn-add">등록</Button>
              <Button className="btn-cancel">취소</Button>
            </fieldset>
          </legend>
        </form>
    </div>
  </WritePageContainer>
      </StyledContainer>
      {/* {history.location.pathname === '/write' && (<Prompt when={modalOpen} message={handlePrompt} />)} */}
    </>
  );
};
export default withRouter(Write);
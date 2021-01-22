import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import Button from '../components/common/Button';
import styled from 'styled-components';
import Header from '../components/common/Header';
import {MdAccountCircle,MdBusiness,MdPlayCircleFilled, MdAccountBalance} from 'react-icons/md'
import Responsive from '../components/common/Responsive';
const DivisionBlock = styled.div`
  width:100%;
  height:100vh;
  text-align:center;
    & > div{
      display:inline-block;
      >p{
        margin-top:30px;
        color:#03c75a;
        font-size:1.4rem;
      }  
    }
    button{
      display:none;
    }
    .headerButton{
      display:none;
    }
    
    h1{
    
      font-size:1rem;
      line-height:80px;
      border-radius:60px;
      width:100px;
      margin:30px auto;
      font-size:1.4rem;
      height:80px;
      font-weight:700;
      background:transparent;
      color: #03c75a;
      position:relative;
      
      &::before {
        background: linear-gradient(170deg, rgb(3, 199, 90), rgb(2, 180, 81));
        content:'';
        width:150px;
        height:1.5px;
        position:absolute;
        left:-200px;
        top:40px;
      }
      ::after{
        background: linear-gradient(170deg, rgb(3, 199, 90), rgb(2, 180, 81));
        content:'';
        width:150px;
        height:1.5px;
        position:absolute;
        top:40px;
        right:-200px;
      }
    }

  .loginCompany,.loginPerson{
    display:inline-block;
    width:260px;
    height:300px;
    overflow:hidden;
    border-radius:10px;
    margin:0 40px;
    background:#fff;
    color:#03c75a;
    text-align:center;
    padding:0;
    position:relative;
    border-bottom:15px solid #03c75a;
    box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.08);
    
    span:nth-child(1){
      display:block;
      border-radius:200px;
      width:300px;
      height:250px;
      position:relative;
      transform:translateX(-20px) translateY(-150px);
      background: #eee;
      .Mdicon{
        background: linear-gradient(170deg, rgb(3, 199, 90), rgb(2, 180, 81));
        position:absolute;
        bottom:-50px;
        left:90px;
        width:120px;
        height:120px;
        padding:30px;
        color:#fff;
        opacity:0.8;
        border-radius:80px;
      }
    }
    span:nth-child(3){
      transform:translateY(-40px);
      display:inline-block;
      color:#03c75a;
      padding-bottom:10px;
      font-weight:400;
      font-size:0.8rem;
      *{
        vertical-align:middle;
      }
    }
    p{
      transform:translateY(-60px);
      font-weight:700;
      font-size:1.3rem;
      color:#666;
    }
    :hover{
      border-bottom:15px solid #fff;
      background: linear-gradient(170deg, rgba(3, 199, 90,0.8), rgba(2, 180, 81,0.8));
      span:nth-child(1){
        background: transparent;
        .Mdicon{
          // background: #fff;
          background: transparent;
          color:#fff;
          padding:25px;
          transition:all 0.5s;
          opacity:1;
        }
      }

      span:nth-child(3){
      color:#fff;
      }
      p{
        color:#fff;
      }
    }
  }
  

`

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  background:#03c75a;
  box-shadow: 8px 2px 4px rgba(0, 0, 0, 0.08);
  `;
  
  const Wrapper = styled(Responsive)`
  @font-face {
    font-family: 'BinggraeSamanco-Bold';
    src: url('https://github.com/projectnoonnu/noonfonts_20-10/blob/main/BinggraeSamanco-Bold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    letter-spacing: 2px;
    color:#fff;
    line-height:80px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .headerButton{
    padding:7px 25px;
    border:none;
    outline:none;
    background:transparent;
    border:3px solid #fff;
    color:#fff;
    border-radius:20px;
    font-weight:700;
    :hover{
      background:#fff;
      color:#03c75a;
      border:3px solid #fff;
    }
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Division = () => {
  const url = window.location.href;
  const parse = url.split('/');
  return (
    <>
      <DivisionBlock>
      <HeaderBlock>
      <Wrapper>
        <div className="logo">심봉사</div>
        <div className="right">
            <Button className="headerButton" as="a" href="/login">
              로그인
            </Button>
        </div>
      </Wrapper>
      <Spacer />
    </HeaderBlock>
        <div>
          <h1>{parse[parse.length - 1] === 'login' ? '로그인' : '회원가입'}</h1>
          <Button className="loginCompany" as={Link} to={`/${parse[parse.length - 1]}/company`}>
            <span>
              <MdBusiness className="Mdicon"/>
              {/* <MdGroupAdd className="Mdicon"/> */}
              {/* <MdSupervisorAccount className="Mdicon"/> */}
            </span>
            <p>봉사기관이신가요?</p>
            <span>기업으로 {parse[parse.length - 1] === 'login' ? '로그인' : '회원가입'}하기<MdPlayCircleFilled/></span>
          </Button>
          <Button className="loginPerson"as={Link} to={`/${parse[parse.length - 1]}/person`}>
            <span>
              <MdAccountCircle className="Mdicon"/>
            </span>
            <p>봉사지원자이신가요?</p>
            <span>개인으로 {parse[parse.length - 1] === 'login' ? '로그인' : '회원가입'}하기<MdPlayCircleFilled/></span>
          </Button>
        </div>
      </DivisionBlock>
    </>
  );
};

export default Division;

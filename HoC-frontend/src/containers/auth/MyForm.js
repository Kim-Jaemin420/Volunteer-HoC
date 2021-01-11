import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import StyledContainer from '../../components/common/Container';

const GlobalList = styled.div`
  width: 100%;
  background-color: #aaa;
`
const HeaderName = styled.div`
  background : black;
  text-decoration : underline;
  color : white;
  margin-bottom: 10px;
  padding: 20px 0;

  h1{
    font-size : 24px;
    text-align : center;
  }
`;

const BodyList = styled.div`
  width : 100%;
  height : 500px;
  border: 1px solid red;
  padding: 4px;

  .ListWrap{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .Left, .Right{
    width: 50%;
    height: 100%;
    background-color:white;
    margin: 5px;
  }

  .Left{
    width: 80%;
    list-style: none;
    display:inline-block;
  }
  
  .Right{
    width: 20%;
  }

  li{
    padding-bottom: 10px;
    padding:0px;
    margin:0px;
    background-color: #eee;
  }

`;

const Footer = styled.div`
  width : 100%

`;

const MyForm = () => {
  return (
    <>
    <Header />
      <StyledContainer>
      <GlobalList>
        <HeaderName>
          <div>
            <h1>나의 모집 공고</h1>
          </div>
        </HeaderName>
        <BodyList>
          <div>
            <div className="ListWrap">
              <ul className='Left'>
                모집공고
                <li>
                  목록 : 내용ahdfafdvfrva
                </li>
                <li>
                  목록 : 내용
                </li>
              </ul>
              <ul className='Right'>
                지원현황
                <li>
                  목록 : 인원dddddddd
                </li>
              </ul>
            </div>
          </div>
        </BodyList>
        <Footer>
          心봉사
        </Footer>
      </GlobalList>
      </StyledContainer>
    </>
  );
};

export default MyForm;

import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import palette from '../styles/palette';
export default function ContactUs({ post, closeModal, AuthState }) {
  // console.log(post);
  console.log(AuthState);
  const EmailModalContainer = styled.div`
    .contact-form {
      position: relative;
    }
    .contact-form label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      color: ${palette.gray[6]};
    }
    #user-email {
      font-size: 1rem;
      border: none;
      background: #f8f8f8;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      outline: none;
      /* width: 100%; */
    }
    #user-message {
      font-size: 1rem;
      position: relative;
      resize: none;
      outline: none;
      border: none;
      /* box-shadow:10px 5px 5px #f8f8f8; */
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      height: 30vh;
    }
    .user-submit {
      /* float:right; */
      position: absolute;
      bottom: -55px;
      right: 0;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      padding: 0.25rem 1rem;
      color: white;
      outline: none;
      cursor: pointer;
      background: ${palette.green[4]};
      &:hover {
        background: ${palette.green[6]};
      }
    }
  `;
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wr56dhm',
        'template_leue11p',
        e.target,
        'user_U6YlJAbSPEgLJAhGqtc8I'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    closeModal();
  }
  return (
    <EmailModalContainer>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="hidden"
          name="contact_number"
          defaultValue={post.user.username}
        />{' '}
        {/* <label>Name</label>{' '} */}
        {/* <input type="text" name="user_name" defaultValue={post.user.username} /> */}
        {/* <h1>{AuthState.login.username} 님의 지원서입니다.</h1> */}
        <h1 className="a11y">{AuthState.login.username} 님의 지원서입니다.</h1>
        <label className="a11y" htmlFor="user-email">
          {post.companyName}의 Email
        </label>{' '}
        <input
          id="user-email"
          type="hidden"
          defaultValue={post.email}
          name="user_email"
        />{' '}
        {/* <label htmlFor="user-message">지원 내용을 적어주세요</label> */}
        <textarea
          id="user-message"
          name="message"
          placeholder={`${post.companyName}님의 이메일로 지원서가 전송됩니다. 이름, 나이, 연락처를 남겨주세요`}
        />{' '}
        <input className="user-submit" type="submit" defaultValue="Send" />{' '}
      </form>
    </EmailModalContainer>
  );
}

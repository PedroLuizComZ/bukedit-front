import styled from "styled-components";

export const HomeContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    position: relative;
    height: 0;
    top: 40px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 39.81px;
      line-height: 110%;
      color: #3870be;
    }

    ul {
      list-style: none;
      display: flex;
      li {
        cursor: pointer;
        font-style: normal;
        font-weight: 500;
        font-size: 23.04px;
        line-height: 100%;
        color: #000000;
        margin: 0 12px;

        button {
          border: 1.5px solid #000000;
          padding: 5px 10px;
          border-radius: 4px;
          font-weight: 500;
          color: #000000;
          background: transparent;
          font-size: 13px;
        }
      }
    }
  }
`;

export const HomeCTAContainer = styled.div`
  background: rgba(56, 137, 200, 0.19);
  padding: 0 10%;
  padding-top: 100px;
  display: flex;
  align-items: center;

  .input-box {
    display: flex;

    input {
      padding: 12px;
      border: 0;
      border-radius: 4px 0px 0px 4px;
      width: 100%;
    }

    button {
      height: 39px;
      padding: 0 14px;
      color: white;
      background: #3870be;
      border: 0;
      border-radius: 0px 4px 4px 0px;
    }
  }

  .image-box {
    width: 70%;
    height: 400px;
  }
`;

export const EventsCarousel = styled.div`
  padding: 0 10%;
  margin-top: 40px;

  .carousel-item {
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .image-iten-list {
      height: 200px;
      width: 200px;
      background: red;
    }
  }
`;

export const SigninContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: solid 1px #c1c1c1;
    margin-bottom: 22px;
    padding: 0 8px;
  }

  button {
    color: #ffffff;
    background: #2626f1;
    border: 0;
    box-shadow: 8px 8px 19px 1px rgb(0 0 0 / 15%);
    border-radius: 9px;
    width: 200px;
    font-size: 24px;
    padding: 4px;
    margin-bottom: 20px;
  }

  .forgot-password {
    color: #c1c1c1;
    font-size: 13px;
    cursor: pointer;
  }

  hr {
    height: 1px;
    margin: 0;
  }

  .new-account {
    font-weight: 600;
    font-size: 14px;
    margin-top: 14px;

    span {
      color: #2626f1;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`
  background-color: #3870be;
  min-height: 300px;
  padding: 100px 10%;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    width: 49%;
  }

  p.main {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 50px;
  }

  p.secondary {
    font-family: Kohinoor Telugu;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 140%;
    color: #ffffff;
  }
`;

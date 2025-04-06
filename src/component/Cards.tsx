import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  width: 290px;
  height: 300px;
  perspective: 1000px;
`;

const Card = styled.div`
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(
    135deg,
    rgb(0, 255, 214) 0%,
    rgb(8, 226, 96) 100%
  );
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  box-shadow:
    rgba(5, 71, 17, 0) 40px 50px 25px -40px,
    rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  position: relative;
`;

const Glass = styled.div`
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.349) 0%,
    rgba(255, 255, 255, 0.815) 100%
  );
  transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.5s ease-in-out;
`;

const Content = styled.div`
  padding: 100px 60px 0px 30px;
  transform: translate3d(0, 0, 26px);
`;

const Title = styled.span`
  display: block;
  color: #00894d;
  font-weight: 900;
  font-size: 20px;
`;

const Text = styled.span`
  display: block;
  color: rgba(0, 137, 78, 0.7647058824);
  font-size: 15px;
  margin-top: 20px;
`;

const Bottom = styled.div`
  padding: 10px 12px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
`;

const ViewMore = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, 0, 10px);
  }
`;

const ViewMoreButton = styled.button`
  background: none;
  border: none;
  color: #00c37b;
  font-weight: bolder;
  font-size: 12px;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  transform-style: preserve-3d;
`;

const SocialButton = styled.button`
  width: 30px;
  aspect-ratio: 1;
  padding: 5px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;

  &:hover {
    background: black;
  }

  &:hover svg {
    fill: white;
  }

  &:active {
    background: rgb(255, 234, 0);
  }

  &:active svg {
    fill: black;
  }
`;

const Cards = () => {
  return (
    <Parent>
      <Card>
        <Glass />
        <Content>
          <Title>UIVERSE (3D UI)</Title>
          <Text>
            Create, share, and use beautiful custom elements made with CSS
          </Text>
        </Content>
        <Bottom>
          <SocialButtonsContainer>
            <SocialButton>
              <svg viewBox="0 0 30 30">
                <path d="M9.9980469 3 C6.1390469 3 3 6.1419531 3 10.001953 L3 20.001953 C3 23.860953 6.1419531 27 10.001953 27 L20.001953 27 C23.860953 27 27 23.858047 27 19.998047 L27 9.9980469 C27 6.1390469 23.858047 3 19.998047 3 L9.9980469 3 z" />
              </svg>
            </SocialButton>
          </SocialButtonsContainer>
          <ViewMore>
            <ViewMoreButton>View more</ViewMoreButton>
          </ViewMore>
        </Bottom>
      </Card>
    </Parent>
  );
};

export default Cards;

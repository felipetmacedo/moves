import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('/img/sobre-bg.svg');
  background-size: cover;
  background-position: center;
  width: 100%; /* Ensure minimum width is 100% of the viewport */
  min-height: 113vh; /* Set minimum height to 100% of the viewport height */
  margin-top: -200px;
  padding: 30px;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: -200px;
    padding-top: 140px;
    padding-bottom: 40px;
  }
`;



export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  @media (max-width: 1000px) {
    margin-bottom: 30px;
    margin-right: 0px;
    margin-top: 20px;
  }
`;

export const SobreImage = styled(Image)`
  width: 558px;
  height: 372px;

    @media (max-width: 1100px) {
        width: 320px; /* Make the image take up the whole width on smaller screens */
        height: 200px;
    }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;


  @media (max-width: 1100px) {
    width: 100%; /* Make the text container take up the whole width on smaller screens */
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #004a8c;
  margin-bottom: 20px;
`;

export const ParagraphContainer = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #004a8c;
  margin-bottom: 20px;
`;

import React from "react";
import {
  Footer,
  IconImage,
  Text,
  IconContainer,
  TextContainer,
  Title,
} from "./style";
import { FacebookIcon, InstagramIcon, LinkedinIcon, PlayStoreIcon } from "assets"; // Assuming you have these icons imported
import Link from "next/link";

interface UserCardProps {
  facebook: string;
  linkedin: string;
  instagram: string;
  playStore: string;
}

export default function FooterSection({
  facebook,
  linkedin,
  instagram,
  playStore,
}: UserCardProps) {
  return (
    <Footer>
      <IconContainer>
        <Link href={instagram}>
          <IconImage src={InstagramIcon} alt="Instagram" />
        </Link>
        <Link href={linkedin}>
          <IconImage src={LinkedinIcon} alt="LinkedIn" />
        </Link>
        <Link href={facebook}>
          <IconImage src={FacebookIcon} alt="Facebook" />
        </Link>
      </IconContainer>
      <TextContainer>
        <Title>MOVE'S BRASIL - TODOS OS DIREITOS RESERVADOS.</Title>
        <Text>
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
          <strong>&hearts;</strong> by{" "}
          <Link
            href="https://www.linkedin.com/in/felipe-torres-334642236/"
            style={{ color: "white" }}
          >
            Felipe Torres
          </Link>
        </Text>
      </TextContainer>
      <Link href={playStore}>
        <IconImage src={PlayStoreIcon} alt="Play Store" />
      </Link>
    </Footer>
  );
}

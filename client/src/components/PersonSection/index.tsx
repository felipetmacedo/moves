import { PersonSectionContainer, PersonContainer, Title, Text } from "./style";
import PersonComponent from "../PersonComponent/index";
import { PammelaAvatar, MatheusAvatar } from "assets"; // Assuming you have these images imported;

type PersonSectionProps = {
  id?: string;
};

export default function PersonSection({ id }: PersonSectionProps) {
  const peopleData = [
    {
      image: PammelaAvatar,
      name: "Pâmmela Santos",
      role: "Fundadora e Gerente de Projeto",
      text: "“A Move's é a solução para trazer inclusão através da informação. Me tornei uma pessoa com mobilidade reduzida temporária, o que me abriu os olhos para a importância da acessibilidade. Apaixonada por viagens, acredito que o turismo inclusivo pode mitigar as dores das PMR.”",
    },
    {
      image: MatheusAvatar,
      name: "Matheus Antunes",
      role: "Desenvolvedor",
      text: "“A Move's trará um grande impacto positivo na experiências turísticas, principalmente para PMR.”",
    },
  ];

  return (
    <PersonSectionContainer id={id}>
      <Title>TIME</Title>
      <Text>
        O que mais nos impulsiona e inspira é a inclusão. Buscamos propagar o
        turismo acessível para pessoas com mobilidade reduzida nas atividades
        turísticas e de lazer, através da informação sobre acessibilidade. Nós
        somos a Move’s.
      </Text>
      <PersonContainer>
        {peopleData.map((person, index) => (
          <PersonComponent
            key={index}
            image={person.image}
            name={person.name}
            role={person.role}
            text={person.text}
          />
        ))}
      </PersonContainer>
    </PersonSectionContainer>
  );
}

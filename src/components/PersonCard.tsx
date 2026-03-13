import React from "react";
import { styles } from "./TeamStructure.styles";

export type Person = {
  name: string;
  img: string;
  role?: string;
};

type Props = {
  person: Person;
  large?: boolean;
};

const PersonCard: React.FC<Props> = ({ person, large = false }) => {
  return (
    <div
      style={{
        ...styles.personCard,
        transform: large ? "scale(1.08)" : "scale(1)"
      }}
    >
      <img src={person.img} alt={person.name} style={styles.avatar} />

      <div style={styles.name}>{person.name}</div>

      {person.role && (
        <div style={styles.role}>{person.role}</div>
      )}
    </div>
  );
};

export default PersonCard;

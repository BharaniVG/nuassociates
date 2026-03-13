import React from "react";
import PersonCard from "./PersonCard";
import DepartmentColumn from "./DepartmentColumn";
import { leadership, departments } from "./teamData";
import { styles } from "./TeamStructure.styles";

export default function TeamStructure() {
  return (
    <section style={styles.wrapper} id="team">

      {/* Leadership */}
      <div style={styles.leadershipRow}>
        {leadership.map((person, i) => (
          <PersonCard key={i} person={person} large />
        ))}
      </div>

      {/* Departments */}
      <div style={styles.departmentGrid}>
        {departments.map((dept, i) => (
          <DepartmentColumn key={i} dept={dept} />
        ))}
      </div>

      {/* Drafting */}
      <div style={styles.draftingCard}>
        Drafting Support Team
      </div>

    </section>
  );
}

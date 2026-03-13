import React from "react";
import PersonCard from "./PersonCard";
import { Department } from "./teamData";
import { styles } from "./TeamStructure.styles";

type Props = {
  dept: Department;
};

const DepartmentColumn: React.FC<Props> = ({ dept }) => {
  return (
    <div style={styles.department}>
      <div style={styles.departmentTitle}>{dept.title}</div>

      <div style={styles.memberGrid}>
        {dept.members.map((member, i) => (
          <PersonCard key={i} person={member} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentColumn;

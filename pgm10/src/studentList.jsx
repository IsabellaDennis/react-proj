import React from "react";

const StudentList = () => {
  const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li key={student.id}>
            {student.id}. {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
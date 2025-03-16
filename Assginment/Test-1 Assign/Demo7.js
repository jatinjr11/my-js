const students = [
      { name: "Alice", scores: [90, 85, 92] },
      { name: "Bob", scores: [75, 80, 85] },
      { name: "Charlie", scores: [90, 95, 85] },
      { name: "David", scores: [100, 100, 100] }
    ];
    const result = students.map(student => {
      const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
      return { name: student.name, average: avg };
    }).filter(student => student.average > 90);

    console.log(JSON.stringify(result));

  
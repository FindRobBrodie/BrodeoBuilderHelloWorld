[
  { group: "school", entity: "students", fields: [
      {name: "studentId", type: "csharp:int"},
      {name: "firstName", type: "csharp:string", width: 50},
      {name: "lastName", type: "csharp:string", width: 50}
    ]
  },
  { group: "school", entity: "teachers", fields: [
      {name: "teacherId", type: "csharp:int"},
      {name: "firstName", type: "csharp:string", width: 50},
      {name: "lastName", type: "csharp:string", width: 50},
      {name: "yearsExperience", type: "csharp:int"}
    ]
  },
  { group: "school", entity: "classes", fields: [
      {name: "classId", type: "csharp:int"},
      {name: "className", type: "csharp:string", width: 100},
      {name: "daysPerWeek", type: "csharp:int"}
    ]
  }
]

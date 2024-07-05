// const explorer = {
//     id:"1",
//     name: "project",
//     isFolder: true,
//     items: [
//       {
//         id:"2",
//         name: "src",
//         isFolder: true,
//         items: [
//           {
//             id:"3",
//             name: "src nested 1",
//             isFolder: true,
//             items: [
//               {
//                 id:"4",
//                 name: "index.html",
//                 isFolder: false,
//                 items: []
//               },
//               {
//                 id:"5",
//                 name: "hello.html",
//                 isFolder: false,
//                 items: []
//               }
//             ]
//           },
//           {
//             id:"6",
//             name: "src_nested_file",
//             isFolder: false,
//             items: []
//           }
//         ]
//       },
//       {
//         id:"7",
//         name: "doc",
//         isFolder: true,
//         items: [
//           {
//             id:"8",
//             name: "App.js",
//             isFolder: false,
//             items: []
//           },
//           {
//             id:"9",
//             name: "Index.js",
//             isFolder: false,
//             items: []
//           },
//           {
//             id:"10",
//             name: "styles.css",
//             isFolder: false,
//             items: []
//           }
//         ]
//       },
//       {
//         id:"11",
//         name: "package.json",
//         isFolder: false,
//         items: []
//       }
//     ]
//   };
  
//   export default explorer;



const explorer = {
    id: "1",
    name: "project",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "src",
        isFolder: true,
        items: [
          {
            id: "3",
            name: "src nested 1",
            isFolder: true,
            items: [
              {
                id: "4",
                name: "index.html",
                isFolder: false,
                items: [],
                content: "This is the content of index.html"
              },
              {
                id: "5",
                name: "hello.html",
                isFolder: false,
                items: [],
                content: "This is the content of hello.html"
              }
            ]
          },
          {
            id: "6",
            name: "src_nested_file",
            isFolder: false,
            items: [],
            content: "This is the content of src_nested_file"
          }
        ]
      },
      {
        id: "7",
        name: "doc",
        isFolder: true,
        items: [
          {
            id: "8",
            name: "App.js",
            isFolder: false,
            items: [],
            content: "This is the content of App.js"
          },
          {
            id: "9",
            name: "Index.js",
            isFolder: false,
            items: [],
            content: "This is the content of Index.js"
          },
          {
            id: "10",
            name: "styles.css",
            isFolder: false,
            items: [],
            content: "This is the content of styles.css"
          }
        ]
      },
      {
        id: "11",
        name: "package.json",
        isFolder: false,
        items: [],
        content: "This is the content of package.json"
      }
    ]
  };
  
  export default explorer;
  
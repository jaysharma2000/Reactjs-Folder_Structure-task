// import { useState } from "react";

// function Folder(props) {
//   const explorer = props.explorer;

//   const [expand, setExpand] = useState(false);

//   if (explorer.isFolder) {
//     return (
//       <>
//         <div onClick={() => setExpand(!expand)} className="folder">
//           <span>📁 {explorer.name}</span>
//         </div>

//         <div style={{display: expand ? "block" : "none", paddingLeft:25}}> 
//           {explorer.items.map((exp) => {
//             return (
//               <Folder
//                 key={exp.id}
//                 explorer={exp}
//               />
//             );
//           })}
//         </div>
//       </>
//     );
//   } else {
//     return <span className="file">📄 {explorer.name}</span>;
//   }
// }

// export default Folder;


import { useState } from "react";

function Folder(props) {
  const { explorer, onFileClick } = props;
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => (
            <Folder
              key={exp.id}
              explorer={exp}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div onClick={() => onFileClick(explorer)} className="file">
        📄 {explorer.name}
      </div>
    );
  }
}

export default Folder;

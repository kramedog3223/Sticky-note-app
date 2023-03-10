import React from "react";

const Note = (props) => (
  <li className="note ">
    {console.log(props.note)}
    <input
      className="note__title"
      type="text"
      placeholder="Title"
      value={props.note.title}
    />
    <textarea
      className="note__description"
      placeholder="Description..."
      value={props.note.description}
    />
    <span className="note__delete">X</span>
  </li>
);

export default Note;

import React from "react";

import Delete from "./Delete";

const Edit = ({ name, count, onDelete, onEdit, onCount }) => (
  <>
    <ul id={name}>
      <input onChange={onEdit} type="text" value={name} />
      <input onChange={onCount} type="number" value={count} />
      <Delete onDelete={onDelete} />
    </ul>
  </>
);

export default Edit;

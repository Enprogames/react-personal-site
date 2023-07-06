// components/EditableArticle/EditableItem/index.js

import React from 'react';
import { Form } from 'react-bootstrap';

export const EditableItem = ({ isEditing, item, onContentChange }) => (
  <div>
    {isEditing ? (
      <>
        <Form.Control
          type="text"
          value={item.title}
          onChange={onContentChange('title')}
        />
        <Form.Control
          as="textarea"
          value={item.description}
          onChange={onContentChange('description')}
        />
      </>
    ) : (
      <>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </>
    )}
  </div>
);
// components/EditableArticle/EditableSection/index.js

import React from 'react';
import { Form } from 'react-bootstrap';
import { EditableItem } from '../EditableItem';

export const EditableSection = ({ isEditing, section, onContentChange }) => (
    <div>
      {isEditing ? (
        <Form.Control
          type="text"
          value={section.title}
          onChange={onContentChange(null, 'title')}
        />
      ) : (
        <h2>{section.title}</h2>
      )}
      {section.items.map((item, itemIndex) => (
        <EditableItem
          key={itemIndex}
          isEditing={isEditing}
          item={item}
          onContentChange={(field) => (event) => onContentChange(itemIndex, field, event)}
        />
      ))}
    </div>
  );

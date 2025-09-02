// components/EditableArticle/EditableItem/index.tsx

import React from 'react';
import { Form } from 'react-bootstrap';

interface EditableItemProps {
  isEditing: boolean;
  item: { title: string; description: string };
  onContentChange: (
    field: string
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const EditableItem: React.FC<EditableItemProps> = ({
  isEditing,
  item,
  onContentChange,
}) => (
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


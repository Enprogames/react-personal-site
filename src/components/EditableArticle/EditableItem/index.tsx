// components/EditableArticle/EditableItem/index.tsx
import React from 'react';
import TextField from '@mui/material/TextField';

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
        <TextField
          fullWidth
          value={item.title}
          onChange={onContentChange('title')}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          value={item.description}
          onChange={onContentChange('description')}
          margin="normal"
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

export default EditableItem;

// components/EditableArticle/EditableSection/index.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import { EditableItem } from '../EditableItem';

interface EditableSectionProps {
  isEditing: boolean;
  section: { title: string; items: { title: string; description: string }[] };
  onContentChange: (
    itemIndex: number | null,
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const EditableSection: React.FC<EditableSectionProps> = ({
  isEditing,
  section,
  onContentChange,
}) => (
  <div>
    {isEditing ? (
      <TextField
        fullWidth
        value={section.title}
        onChange={(event) => onContentChange(null, 'title', event)}
        margin="normal"
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

export default EditableSection;

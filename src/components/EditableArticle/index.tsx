import React from 'react';
import { Button, Container, Alert, Box } from '@mui/material';
import { EditableSection } from './EditableSection';

interface EditableArticleProps {
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  content: { title: string; items: { title: string; description: string }[] }[];
  onContentChange: (
    sectionIndex: number,
    itemIndex: number | null,
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSave: () => void;
  addSection: () => void;
  error?: string;
}

export const EditableArticle: React.FC<EditableArticleProps> = ({
  isEditing,
  setIsEditing,
  content,
  onContentChange,
  handleSave,
  addSection,
  error,
}) => (
  <Container>
    <Box className="my-4">
      <Button variant="contained" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </Button>
      {isEditing && (
        <>
          <Button variant="contained" onClick={handleSave} className="ml-2">
            Save
          </Button>
          <Button variant="outlined" onClick={addSection} className="ml-2">
            Add Section
          </Button>
        </>
      )}
    </Box>
    {content.map((section, sectionIndex) => (
      <EditableSection
        key={sectionIndex}
        isEditing={isEditing}
        section={section}
        onContentChange={(itemIndex, field, event) =>
          onContentChange(sectionIndex, itemIndex, field, event)
        }
      />
    ))}
    {error && <Alert severity="error">{error}</Alert>}
  </Container>
);

export default EditableArticle;

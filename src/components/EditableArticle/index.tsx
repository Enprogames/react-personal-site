import React from 'react';
import { Button, Container, Alert } from 'react-bootstrap';
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
    <Button onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? 'Cancel' : 'Edit'}
    </Button>
    {isEditing && <Button onClick={handleSave}>Save</Button>}
    {isEditing && <Button onClick={addSection}>Add Section</Button>}
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
    {error && <Alert variant="danger">{error}</Alert>}
  </Container>
);


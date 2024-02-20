
Below is an example of using the `EditableArticle` component to create a resume, consisting of editable sections. The `EditableArticle` component is a wrapper around the `EditableSection` component, which is a wrapper around the `EditableItem` component.

```jsx
import React, { useState, useEffect } from 'react';
import { EditableArticle } from '../components/EditableArticle';
import { resume_content as initialContent } from '../data/resume_content';

const Resume = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // TODO: Replace with real authentication
  const [resumeContent, setResumeContent] = useState(() => {
    const localData = localStorage.getItem('resume');
    return localData ? JSON.parse(localData) : initialContent.sections;
  });
  const [error, setError] = useState('');

  const onContentChange = (sectionIndex, itemIndex, field, event) => {
    const newContent = [...resumeContent];
    if (itemIndex === null) {
      newContent[sectionIndex][field] = event.target.value;
    } else {
      newContent[sectionIndex].items[itemIndex][field] = event.target.value;
    }
    setResumeContent(newContent);
  };

  const addSection = () => {
    const newContent = [...resumeContent, { title: '', items: [{ title: '', description: '' }] }];
    setResumeContent(newContent);
  };

  useEffect(() => {
    if (isAdmin) localStorage.setItem('resume', JSON.stringify(resumeContent));
  }, [resumeContent, isAdmin]);

  const handleSave = () => {
    if (isAdmin) {
      setIsAdmin(false); // You may want to remove this line when you implement actual authentication
    } else {
      setError('You must be logged in as admin to save changes.');
    }
  };

  return (
    <>
      <EditableArticle
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        content={resumeContent}
        onContentChange={onContentChange}
        handleSave={handleSave}
        addSection={addSection}
        error={error}
      />
    </>
  );
};

export default Resume;
```

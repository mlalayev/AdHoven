import React, { useState, useEffect } from 'react';
import textDatas from '../../../TextPartData.json';

interface TextPartProps {
    currentPath: string;
    isNewsTrue: boolean;
    isTextPart: boolean;
}

interface TextData {
  [key: string]: {
    title: string;
    description: string;
  };
}

const TextPart: React.FC<TextPartProps> = ({ currentPath, isNewsTrue, isTextPart }) => {
    const [content, setContent] = useState<{ title: string; description: string }>({
        title: '',
        description: ''
    });

    useEffect(() => {
        // Set content based on the current path, or use default if not found
        setContent((textDatas as TextData)[currentPath] || (textDatas as TextData)['/default']);
    }, [currentPath]);

    return (
        <div style={{ marginBottom: "10px" }} className="faq-container margin-bottom">
            <div>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
            </div>
        </div>
    );
};

export default TextPart;

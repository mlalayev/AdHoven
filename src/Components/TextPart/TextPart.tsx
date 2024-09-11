import React, { useState, useEffect } from 'react';
import textDatas from '../../../TextPartData.json';
import './TextPart.css';

interface TextPartProps {
    currentPath: string;
    isNewsTrue: boolean;
    isTextPart: boolean;
}

interface TextData {
    [key: string]: {
        title: string;
        description: string;
        image: string;
        titlefirst?: string;
        descriptionfirst?: string;
        titlesecond?: string;
        descriptionsecond?: string;
        titlethird?: string;
        descriptionthird?: string;
        titlefourth?: string;
        descriptionfourth?: string;
        titlefifth?: string;
        descriptionfifth?: string;
    };
}

const TextPart: React.FC<TextPartProps> = ({ currentPath, isNewsTrue, isTextPart }) => {
    const [content, setContent] = useState<TextData[keyof TextData]>({
        title: '',
        description: '',
        image: '',
        titlefirst: '',
        descriptionfirst: '',
        titlesecond: '',
        descriptionsecond: '',
        titlethird: '',
        descriptionthird: '',
        titlefourth: '',
        descriptionfourth: '',
        titlefifth: '',
        descriptionfifth: ''
    });

    useEffect(() => {
        // Set content based on the current path, or use default if not found
        setContent((textDatas as TextData)[currentPath] || (textDatas as TextData)['/default']);
    }, [currentPath]);

    return (
        <div style={{ marginBottom: "10px", padding:"0 20px" }} className="faq-container margin-bottom">
            <div>
                <span> <a href="/">asas</a> </span>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <br />
                <img className="textpart-images" src={content.image} alt="" />

                {content.titlefirst && <h1>{content.titlefirst}</h1>}
                {content.descriptionfirst && (
                    <p dangerouslySetInnerHTML={{ __html: content.descriptionfirst }} />
                )}
                <br />
            </div>
        </div>
    );
};

export default TextPart;

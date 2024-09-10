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
        <div style={{ marginBottom: "10px" }} className="faq-container margin-bottom">
            <div>
                <h1>{content.title}</h1>
                <br />
                <img className="textpart-images" src={content.image} alt="" />

                {content.titlefirst && <h1>{content.titlefirst}</h1>}
                {content.descriptionfirst && <p>{content.descriptionfirst}</p>}
                <br />

                {content.titlesecond && <h1>{content.titlesecond}</h1>}
                {content.descriptionsecond && <p>{content.descriptionsecond}</p>}
                <br />

                {content.titlethird && <h1>{content.titlethird}</h1>}
                {content.descriptionthird && <p>{content.descriptionthird}</p>}
                <br />

                {content.titlefourth && <h1>{content.titlefourth}</h1>}
                {content.descriptionfourth && <p>{content.descriptionfourth}</p>}
                <br />

                {content.titlefifth && <h1>{content.titlefifth}</h1>}
                {content.descriptionfifth && <p>{content.descriptionfifth}</p>}
            </div>
        </div>
    );
};

export default TextPart;

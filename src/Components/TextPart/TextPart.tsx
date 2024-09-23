import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import textDatas from '../../../TextPartData.json';
import './TextPart.css';

interface TextPartProps {
    currentPath: string;
    isNewsTrue: boolean;
    isTextPart: boolean;
}

// Adjust the interface to match your JSON structure
interface TextData {
    [key: string]: {
        az: {
            title: string;
            description: string;
            image: string;
            titlefirst?: string;
            descriptionfirst?: string;
        };
        en: {
            title: string;
            description: string;
            image: string;
            titlefirst?: string;
            descriptionfirst?: string;
        };
        ru: {
            title: string;
            description: string;
            image: string;
            titlefirst?: string;
            descriptionfirst?: string;
        };
    };
}

const TextPart: React.FC<TextPartProps> = ({ currentPath, isNewsTrue, isTextPart }) => {
    const { i18n } = useTranslation();
    const [content, setContent] = useState({
        title: '',
        description: '',
        image: '',
        titlefirst: '',
        descriptionfirst: ''
    });

    useEffect(() => {
        const data = textDatas as TextData;

        // Get the current language
        const currentLanguage = i18n.language as 'az' | 'en' | 'ru';

        // Get content based on path and language
        const pathData = data[currentPath];
        if (pathData && pathData[currentLanguage]) {
            setContent(pathData[currentLanguage]);
        } else {
            // Fallback content in case the path or language isn't found
            setContent({
                title: 'Content not found',
                description: '',
                image: '',
                titlefirst: '',
                descriptionfirst: ''
            });
        }
    }, [currentPath, i18n.language]);

    return (
        <div style={{ padding: "0 20px" }} className="faq-container margin-bottom">
            <div>
                <span> <a href="/">link</a> </span>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <br />
                {content.image && <img className="textpart-images" src={content.image} alt="Content related" />}
                {content.titlefirst && (
                    <p dangerouslySetInnerHTML={{ __html: content.titlefirst }} />
                )}
                {content.descriptionfirst && (
                    <p dangerouslySetInnerHTML={{ __html: content.descriptionfirst }} />
                )}
                <br />
            </div>
        </div>
    );
};

export default TextPart;

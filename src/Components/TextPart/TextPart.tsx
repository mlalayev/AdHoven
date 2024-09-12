import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t, i18n } = useTranslation();
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
        const data = textDatas as TextData;

        // Get the current language
        const currentLanguage = i18n.language;

        // Get content based on path and language, or use default if not found
        const pathData = data[currentPath];
        if (pathData) {
            const languageData = pathData[currentLanguage] || data['/default']?.[currentLanguage];
            setContent(languageData || {
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
        } else {
            setContent(data['/default']?.[currentLanguage] || {
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
        }
    }, [currentPath, i18n.language]);


    return (
        <div style={{ marginBottom: "10px", padding: "0 20px" }} className="faq-container margin-bottom">
            <div>
                <span> <a href="/">link</a> </span>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <br />
                <img className="textpart-images" src={content.image} alt="" />

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

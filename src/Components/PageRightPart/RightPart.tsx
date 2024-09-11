import React from 'react';
import News from '../MainPage/MainPage-News/News';
import Faq from '../MainPage/MainPage-FAQ/FAQ';
import Profile from '../MainPage/MainPage-Profile/Profile';
import Social from '../MainPage/MainPage-Social/Social';
import MostRead from '../MainPage/MainPage-MostRead/MostRead';
import TextPart from '../TextPart/TextPart';

interface RightPartProps {
    isNewsTrue: boolean;
    isTextPart: boolean;
    isFaqsTrue: boolean;
    currentPath: string;
}

function RightPart({ isNewsTrue, isTextPart, currentPath, isFaqsTrue }: RightPartProps) {
    return (
        <div style={{
            padding:"0 20px"
        }}>
            <section className="sectionthird">
                <div 
                style={{
                    marginTop: "20px",
                }}
                className="sectionthird-leftpart">
                    {isTextPart && (
                        <TextPart 
                            currentPath={currentPath} 
                            isNewsTrue={false} 
                            isTextPart={false} 
                        />
                    )}
                    {isNewsTrue && <News />}
                    {isFaqsTrue && <Faq />}
                </div>
                <div className="sectionthird-rightpart">
                    <Profile />
                    <Social />
                    <MostRead />
                </div>
            </section>
        </div>
    );
}

export default RightPart;

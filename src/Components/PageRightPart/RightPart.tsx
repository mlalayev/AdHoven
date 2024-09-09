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
    currentPath: string;  // Add currentPath to props
}

function RightPart({ isNewsTrue, isTextPart, currentPath }: RightPartProps) {
    return (
        <div>
            <section className="sectionthird">
                <div 
                style={{
                    marginTop:"20px"
                }}
                className="sectionthird-leftpart">
                    {isTextPart && <TextPart currentPath={currentPath} />}  {/* Pass currentPath to TextPart */}
                    {isNewsTrue && <News />}
                    <Faq />
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

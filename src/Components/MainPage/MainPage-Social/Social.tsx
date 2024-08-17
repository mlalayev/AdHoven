import React from 'react';
import './Social.css';

const Social: React.FC = () => {
    return (
        <div className="social-card">
            <h3>Sosial’da İzlɛ</h3>
            <div className="icons">
                <a href="#facebook" className="icon facebook"></a>
                <a href="#linkedin" className="icon linkedin"></a>
                <a href="#youtube" className="icon youtube"></a>
                <a href="#instagram" className="icon instagram"></a>
                <a href="#telegram" className="icon telegram"></a>
            </div>
        </div>
    );
};

export default Social;

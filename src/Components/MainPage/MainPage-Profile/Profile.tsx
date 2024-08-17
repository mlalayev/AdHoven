import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
    return (
        <div className="card">
            <img 
                src="/path-to-image/image.png" 
                alt="Elvin Paşa" 
                className="avatar" 
            />
            <h2>Elvin Paşa</h2>
            <p className="title">Rəqəmsal Marketoloq</p>
            <p className="description">
                Şirkətlərin biznes məqsədlərinə çatmaları üçün rəqəmsal marketing kanalları üzrə strategiyalar hazırlayıram. 
                SEO, SEM, Sosial Media və E-mail marketing vasitələrindən istifadə edərək, potensial müştərilərinizin onlayn 
                alış davranışlarını yüksəltmək və brendinizi tanıtmaq üçün çalışıram.
            </p>
            <button className="button">Haqqımda</button>
        </div>
    );
}

export default Profile;

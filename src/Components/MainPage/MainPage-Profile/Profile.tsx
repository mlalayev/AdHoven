import React from 'react';
import './Profile.css';
import profilepicture from '../../../assets/profilepicture.jpg'
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Profile: React.FC = () => {
    return (
        <div className="card">
            <span className='spanicon'><TbRectangleVerticalFilled color='#6351CE' size={20} /><h3>Haqqimda</h3></span>

            <img
                src={profilepicture}
                alt="Yusif Muradlı"
                className="avatar"
            />
            <h2>Yusif Muradlı</h2>
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

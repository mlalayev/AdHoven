import React from 'react';
import './Profile.css';
import profilepicture from '../../../assets/profilepicture.jpg';
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <span className='spanicon'>
                <TbRectangleVerticalFilled color='#6351CE' size={20} />
                <h3>{t('profile.about')}</h3>
            </span>

            <img
                src={profilepicture}
                alt={t('profile.name')}
                className="avatar"
            />
            <h2>{t('profile.name')}</h2>
            <p className="title">{t('profile.title')}</p>
            <p className="description">
                {t('profile.description')}
            </p>
            <button className="button">{t('profile.button')}</button>
        </div>
    );
}

export default Profile;

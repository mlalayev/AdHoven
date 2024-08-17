import React from 'react';
import './MostRead.css';

const MostRead: React.FC = () => {
    return (
        <div className="posts-card">
            <h3>Ən Çox Oxunan Yazılar</h3>
            <ul className="post-list">
                <li>
                    <span>25 Dekabr 2023</span>
                    <p>Top 53 Ən Yaxşı Telegram Kanalları, Qrupları və Botları</p>
                </li>
                <li>
                    <span>17 Aprel 2024</span>
                    <p>2024-cü il üzrə SMM Təqvimi və Əlamətdar Günlər</p>
                </li>
                <li>
                    <span>23 Dekabr 2023</span>
                    <p>SWOT Analiz Haqqında Bilməli Olduğunuz Məlumatlar</p>
                </li>
                <li>
                    <span>25 Dekabr 2023</span>
                    <p>Marketinq Strategiyası: Hazırlanma Qaydası və Şablonlar</p>
                </li>
                <li>
                    <span>25 Dekabr 2023</span>
                    <p>Rəqəmsal Marketinq Nədir? A-dan Z-ə Geniş Təlimat</p>
                </li>
            </ul>
        </div>
    );
};

export default MostRead;

import React, { useState } from 'react';
import './MostRead.css';
import { FaCircle } from 'react-icons/fa';
import MostReadTopics from '../../../../MostReadTopics.json';
import { TbRectangleVerticalFilled } from "react-icons/tb";

interface Post {
    date: string;
    title: string;
}

const MostRead: React.FC = () => {
    const [posts] = useState<Post[]>(MostReadTopics);

    return (
        <div className="posts-card">
            <span className='spanicon'><TbRectangleVerticalFilled color='#6351CE' size={20} /><h3>Ən Çox Oxunan Yazılar</h3></span>
            <ul className="post-list">
                {posts.map((post, index) => (
                    <li key={index} className="post-item">
                        <div className="timeline">
                            <FaCircle className="dot-icon" />
                            {index !== posts.length && <div className="line"></div>}
                        </div>
                        <div className="post-content">
                            <span>{post.date}</span>
                            <p>{post.title}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MostRead;

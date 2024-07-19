import { useState, useEffect } from 'react';
import axios from 'axios';
import './Temprature.css';
import { useTranslation } from 'react-i18next';

function WeatherAPI() {

    const { t } = useTranslation();

    const [bakuWeather, setBakuWeather] = useState({
        celcius: '',
        icon: ''
    });


    useEffect(() => {
        const fetchBakuWeather = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=Baku`);
                const data = response.data;
                setBakuWeather({
                    celcius: data.current.temp_c,
                    icon: data.current.condition.icon
                });
            } catch (error) {
                console.error('Error fetching weather data for Baku:', error);
            }
        };

        fetchBakuWeather();
    }, []);

    return (
        <section className='weather-info-section'>
            <div className="weather-info">
                <p>{bakuWeather.celcius}°</p>
                <img src={bakuWeather.icon} className='weather-icon' />
                <p>{t('header.city')}</p>
            </div>
        </section>
    );
}

export default WeatherAPI;
import React from 'react';
import MapContainer from '../map/map';

const TabContact = () => {
  return (
    <div className="block-tabs_content contacts visually-hidden">
      <ul className="contacts__list">
        <li className="contacts__item">
          <span className="contacts__title">Адрес</span>
          <span className="contacts__text">Санкт-Петербург, набережная&#160;реки&#160;Карповки, дом 5</span>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Режим работы</span>
          <span className="contacts__text">Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Телефон</span>
          <a className="contacts__text" href="tel:88003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">E-mail</span>
          <a className="contacts__text" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <MapContainer/>
    </div>
  );
}

export default TabContact;

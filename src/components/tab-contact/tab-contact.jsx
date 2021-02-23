import React from 'react';
import {MapSetting, IconSetting} from '../../utils/const';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import location from '../../img/location.svg';

const TabContact = () => {
  return (
    <div className="block-tabs_content contacts">
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
      <YMaps>
        <Map defaultState={{center: MapSetting.COORDINATES, zoom: MapSetting.ZOOM}} className={MapSetting.CONTAINER}>
          <Placemark
            geometry={IconSetting.COORDINATES}
            options={{
              iconLayout: IconSetting.LAYOUT,
              iconImageHref: location,
              iconImageSize: IconSetting.SIZES,
              iconImageOffset: IconSetting.OFFSETS
            }}
          />
        </Map>
      </YMaps >
    </div>
  );
}

export default TabContact;

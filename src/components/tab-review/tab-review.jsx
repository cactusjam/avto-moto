import React from 'react';

const TabReview = ({isActive}) => {
  return (
    <ul className={isActive? 'block-tabs_content reviews' : 'visually-hidden'}>
      <button href='/' className='reviews__button'>Оставить отзыв</button>
        <li className='reviews__item'>
          <h4>Борис Иванов</h4>
          <div className='reviews__dignity'>
            <p>Достоинства</p>
            <span>мощность, внешний вид</span>
          </div>
          <div className='reviews__limitations'>
            <p>Недостатки</p>
            <span>Слабые тормозные колодки (пришлось заменить)</span>
          </div>
          <div>
            <p>Комментарий</p>
            <span>Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</span>
          </div>
          <div className='reviews__evaluation'>
            <img src='/img/star.png' alt='Звезды' width='85px' height='24px' />
            <span>Советует</span>
          </div>
          <div className='reviews__time'>
            <span>1 минуту назад</span>
            <button>Ответить</button>
          </div>
        </li>

        <li className='reviews__item'>
          <h4>Марсель Исмагилов</h4>
          <div className='reviews__dignity'>
            <p>Достоинства</p>
            <span>Cтиль, комфорт, управляемость</span>
          </div>
          <div className='reviews__limitations'>
            <p>Недостатки</p>
            <span>Дорогой ремонт и обслуживание</span>
          </div>
          <div>
            <p>Комментарий</p>
            <span>Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</span>
          </div>
          <div className='reviews__evaluation'>
            <img src='/img/star.png' alt='Звезды' width='85px' height='26px' />
            <span>Советует</span>
          </div>
          <div className='reviews__time'>
            <span>1 минуту назад</span>
            <button>Ответить</button>
          </div>
        </li>
      </ul>
  );
}

export default TabReview;

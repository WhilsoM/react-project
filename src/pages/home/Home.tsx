import './home.scss'
import bridgeCity from '/bridge-city.webp'
import citySea from '/city-sea.webp'

export const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1 className='main-text'>Путеводитель по городу Санкт-Петербург</h1>

          <div className='border-line'></div>
          <p className='hero__desc'>
            Санкт-Петербу́рг — второй по численности населения город России. Город федерального
            значения. Административный центр Северо-Западного федерального округа. Основан 16 мая 1703 года царём Петром
            I. В 1714—1728 и 1732—1918 годах — столица Российского государства.
          </p>
        </div>
      </section>

      {/* <div className='slide_container'>
				<div className='slides'>
					<img
						src='./assets/img/slider-img1.webp'
						alt='img-slider'
						className='active img'
						loading='lazy'
					/>
					<img
						src='./assets/img/slider-img2.webp'
						alt='img-slider'
						className='img'
						loading='lazy'
					/>
					<img
						src='./assets/img/slider-img3.webp'
						alt='img-slider'
						className='img'
						loading='lazy'
					/>
				</div>
				<div className='buttons'>
					<span className='next'>&#10095;</span>
					<span className='prev'>&#10094;</span>
				</div>

				<div className='dots_container'>
					<div
						className='dot active'
						id='active'
						attr='0'
						onclick='switchImage(this)'
					></div>
					<div className='dot' attr='1' onClick={() => switchImage(this)}></div>
					<div className='dot' attr='2' onclick={() => switchImage(this)}></div>
				</div>
			</div> */}

      <section className='info-city'>
        <div className='container'>
          <div className='info-city__info'>
            <h2 className='section-title'>Санкт-Петербург</h2>
            <p className='info-city__subtitle'>где находиться? что из себя представляет?</p>

            <div className='border-line-red'></div>
          </div>

          <div className='info-city__wrapper info-city__wrapper-mb'>
            <p>
              Санкт-Петербург находится на северо-западе Европейской части России.  Город расположен в устье реки Невы и
              узкой полосой вдоль южного и северного берегов Финского залива Балтийского моря. Протяжённость городской
              территории — более чем 90 км.  Санкт-Петербург находится в 157 км от российско-финляндской и в 160 км от
              российско-эстонской границы. Граничит с Ломоносовским, Гатчинским, Тосненским, Кировским, Всеволожским и
              Выборгским районами Ленинградской области.  Координаты исторического центра города — 59°57′ с. ш. и 30°19′
              в. д..
            </p>

            <img src={bridgeCity} alt='bridge-city' loading='lazy' />
          </div>

          <div className='info-city__wrapper'>
            <img src={citySea} alt='city sea' loading='lazy' />

            <p>
              Это важный экономический, научный и культурный центр России, крупный транспортный узел. Исторический центр
              города и связанные с ним комплексы памятников входят в список объектов всемирного наследия ЮНЕСКО. 
              Некоторые значимые культурно-туристические объекты: Эрмитаж, Кунсткамера, Мариинский театр, Российская
              национальная библиотека, Русский музей, Петропавловская крепость, Исаакиевский собор, Невский проспект.  В
              городе расположены, например, Конституционный суд РФ, Геральдический совет при Президенте России, Главный
              штаб Военно-Морского Флота России. 
            </p>
          </div>
        </div>
      </section>

      <section className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511641.7528354809!2d29.435367769975855!3d59.93876941537561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1728842194430!5m2!1sru!2sru'
          style={{ border: 0 }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </>
  )
}

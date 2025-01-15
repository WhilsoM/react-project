import { Modal } from 'components/modal/Modal'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { Link } from 'react-router'
import { darkTheme } from 'store/darkTheme.store'
import './contacts.scss'

export const Contacts = observer(() => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(darkTheme.getIcon())

  return (
    <section className='contacts'>
      <div className='container'>
        <h2 className='section-title'>Наши контакты</h2>
        <p className='phone'>
          <span>рабочий телефон:</span>
          <Link to={'tel:+79870689005'}>+79870689005</Link>
        </p>
        <p className='email'>
          <span>рабочая почта:</span>
          <Link to={'mailto:tatsveet@gmail.com'}>tatsveet@gmail.com</Link>
        </p>

        <button type='button' className='btn' onClick={() => setIsOpen(true)}>
          Связаться с нами
        </button>

        {isOpen && <Modal darkTheme={darkTheme} setIsOpen={setIsOpen} />}
      </div>
    </section>
  )
})

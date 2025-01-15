import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IModal } from 'types/modal'

export const Modal = observer(({ darkTheme, setIsOpen }: IModal) => {
  useEffect(() => {
    console.log(darkTheme.getIcon())
  }, [darkTheme])

  return (
    <div id='myModal' className={'modal'}>
      <div className={`modal-content  ${darkTheme.getIcon() === 'sun' ? 'white-theme' : 'dark-theme'}`}>
        <form action='#' id='form'>
          <label>
            <span>Ваша почта:</span>
            <input type='email' id='email' name='email' />
          </label>

          <label>
            <span>Ваш телефон:</span>
            <input type='tel' id='tel' name='phone' />
          </label>

          <button className='btn' id='send' onClick={() => setIsOpen(false)}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
})

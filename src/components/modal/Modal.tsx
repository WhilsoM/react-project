interface IModal {
  darkTheme: any
  setIsOpen: any
}

export const Modal = ({ darkTheme, setIsOpen }: IModal) => {
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
}

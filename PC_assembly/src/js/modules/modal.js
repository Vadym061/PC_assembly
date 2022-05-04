export function modalWindow() {
    const modalBtn = document.querySelector('.btn__submit');
    const modal = document.querySelector('.modal');
    const assemblyBtn = document.querySelector('.assembly__button');
    const close = document.querySelector('.modal__cross');
    
    
    assemblyBtn.addEventListener('click', ()=> {
        modal.style.display = 'flex'
    })

    modal.addEventListener('click', ()=> {
        const modalContent = event.target.closest('.modal__inner');

        if(!modalContent){
            modal.style.display = '';
        }
    })

    modalBtn.addEventListener('click', ()=>{
        modal.style.display = '';
    })
    close.addEventListener('click', ()=>{
        modal.style.display = '';
    })
}
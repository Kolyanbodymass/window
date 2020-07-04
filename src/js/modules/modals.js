const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              windowWidth = document.querySelector('#width'),
              windowHeight = document.querySelector('#height'),
              windowProfile = document.querySelectorAll('.checkbox'),
              scroll = calcScroll();

        function checkOpenModal() {
            const calcOne = document.querySelector('.popup_calc'),
                  calcTwo = document.querySelector('.popup_calc_profile');

            if (calcOne.style.display == 'block' || calcTwo.style.display == 'block') {
                console.log('true');
                return true;
            } else {
                console.log('false');
                return false;
            }
        }

        function openWindow() {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "block";
            modal.classList.add('animated');
            modal.classList.toggle('fadeIn');
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        }
         
        function validationWindows () {
            
        
            if (windowWidth.value == '' ||  windowHeight.value == ''){
                console.log('введите ширину и высоту');
            } else {
                openWindow();
            }
            // } else {
            //     windowProfile.forEach(item => {
            //         if (item.checked == true) {
            //             openWindow();
            //         } else {
            //             console.log('нет галочки');
            //         }
            //     });
            // }
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (checkOpenModal()) {
                    console.log('выполняем проверку');
                    validationWindows();                    
                } else {
                    console.log('открываем окно');
                    if (e.target) {
                        e.preventDefault();
                    }
                    openWindow();
                }
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            modal.classList.toggle('fadeIn');
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
            document.body.style.marginRight = `${0}px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                modal.classList.toggle('fadeIn');
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
                document.body.style.marginRight = `${0}px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "";
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;
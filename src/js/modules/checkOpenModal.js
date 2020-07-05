const checkOpenModal = () => {

    const calcOne = document.querySelector('.popup_calc'),
            calcTwo = document.querySelector('.popup_calc_profile');

    if (calcOne.style.display == 'block' || calcTwo.style.display == 'block') {
        return true;
    } else {
        return false;
    }
};

export default checkOpenModal;
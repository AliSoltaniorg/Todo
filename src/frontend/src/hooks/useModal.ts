import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    return {
        isShow: showModal,
        hideModal: hideModalHandler,
        showModal: showModalHandler,
    };
};

export default useModal;

import React, { FC, PropsWithChildren } from 'react';
import { Button, Modal as BaseModal } from 'react-bootstrap';

type Props = {
    title: string;
    onSaveChanges?: (data: any) => void;
    onHide: () => void;
    show: boolean;
    form?: string;
};

const Modal: FC<PropsWithChildren<Props>> = (props) => {
    return (
        <BaseModal show={props.show} onHide={props.onHide}>
            <BaseModal.Header closeButton>
                <BaseModal.Title>{props.title}</BaseModal.Title>
            </BaseModal.Header>
            <BaseModal.Body>{props.children}</BaseModal.Body>
            <BaseModal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={props.onSaveChanges}
                    form={props.form}
                    type="submit"
                >
                    Save Changes
                </Button>
            </BaseModal.Footer>
        </BaseModal>
    );
};

export default Modal;

import React, { FC } from "react";
import styles from "@/app/components/(auth)/authModal/AuthModul.module.css";

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSignIn: () => void;
};

const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, onSignIn }) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modal_overlay} onClick={handleBackgroundClick}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Log in</h2>

                <button onClick={onSignIn}>Sign in</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AuthModal;

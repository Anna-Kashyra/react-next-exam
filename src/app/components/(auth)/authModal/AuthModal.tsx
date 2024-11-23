import React, { FC } from "react";
import styles from "@/app/components/(auth)/authModal/AuthModul.module.css";

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: { avatar: string }) => void;
};

const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
    if (!isOpen) return null;

    const handleLogin = () => {
        // Імітуємо авторизацію
        const user = { avatar: "/default-avatar.png" }; // Замінити на реальний виклик API
        onLogin(user);
        onClose();
    };

    const handleBackgroundClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleBackgroundClick}>
            <div className={styles.modal}>
                <h2>Log in</h2>

                <button onClick={handleLogin}>Sign in</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AuthModal;

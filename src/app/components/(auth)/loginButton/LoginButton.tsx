"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import AuthModal from "@/app/components/(auth)/authModal/AuthModal";
import avatar from "../../../../../public/Avatar.svg";
import styles from "@/app/components/(auth)/loginButton/LoginButton.module.css";

const LoginButton = () => {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [user, setUser] = useState<{ avatar: string } | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogin = (user: { avatar: string }) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const handleSignIn = () => {
        const dummyUser = { avatar: "/default-avatar.png" };
        handleLogin(dummyUser);
        setAuthModalOpen(false);
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <>
            {user ? (
                <div className={styles.user_container}>
                    <p>User Name</p>
                    <Image
                        src={avatar}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />
                    <button className={styles.logout_button} onClick={handleLogOut}>Log Out</button>
                </div>
            ) : (
                <button className={styles.login_button} onClick={() => setAuthModalOpen(true)}>Log in</button>
            )}
            {isAuthModalOpen && (
                <AuthModal
                    isOpen={isAuthModalOpen}
                    onClose={() => setAuthModalOpen(false)}
                    onSignIn={handleSignIn}
                />
            )}
        </>
    );
};

export default LoginButton;

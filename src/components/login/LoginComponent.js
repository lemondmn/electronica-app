import React, { Component } from "react";
import styles from "./LoginStyle.module.css";

export class LoginComponent extends Component {
    render() {
        return (
            <div>
                <>
                    <div>
                        <form className={styles.login}>
                            <div className={styles.login_screen}>
                                <div className={styles.app_title}>
                                    <h1>Iniciar Sesion</h1>
                                </div>

                                <div className={styles.login_form}>
                                    <div className={styles.control_group}>
                                        <input type="text" className={styles.login_field} value="" placeholder="Usuario" id="login-name" />
                                        <label className={`${styles.login_field_icon} ${styles.fui_user}`} for="login-name"></label>
                                    </div>

                                    <div className={styles.control_group}>
                                        <input type="password" class={styles.login_field} value="" placeholder="Contraseña" id="login-pass" />
                                        <label className={`${styles.login_field_icon} ${styles.fui_lock}`} for="login-pass"></label>
                                    </div>

                                    {/* Olvidé mi contraseña 

                                    <button className={`${styles.btn} ${styles.btn_primary} ${styles.btn_large} ${styles.btn_block}`} href="#">Iniciar</button>
                                    <a class={styles.login_link} href="#">Olvide mi contraseña</a> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            </div>
        );
    }
}

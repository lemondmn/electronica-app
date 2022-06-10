import React, { Component } from "react";
import styles from "./LoginStyle.module.css";

export default class Login extends Component {
    render() {
        return (
            <div>
                <>
                <div>
                    <div className={styles.login}>
                        <div className={styles.login_screen}>
                            <div className={styles.app_title}>
                                <h1>Iniciar Sesion</h1>
                            </div>

                            <div className={styles.login_form}>
                                <div className={styles.control_group}>
                                    <input type="text" className={styles.login_field} value="" placeholder="Usuario" id="login-name" />
                                        <label className={`${styles.login_field_icon} ${styles.fui_user}`} for="login-name"></label>
                                </div>

                                <div class={styles.control_group}>
                                    <input type="password" class={styles.login_field} value="" placeholder="Contraseña" id="login-pass" />
                                        <label class={`${styles.login_field_icon} ${styles.fui_lock}`} for="login-pass"></label>
                                </div>

                                <a class={`${styles.btn} ${styles.btn_primary} ${styles.btn_large} ${styles.btn_block}`   } href="#">Iniciar</a>
                                <a class={styles.login_link} href="#">Olvide mi contraseña</a>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            </div>
        );
    }
}

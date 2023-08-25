import React from "react";
import appHeaderStyle from "./app-header-style.module.scss";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
function AppHeader() {
  return (
    <>
      <header className={appHeaderStyle.header}>
        <div className={appHeaderStyle.wrapper}>
          <section className={appHeaderStyle.navbar}>
            <div className={appHeaderStyle.div}>
              <a className={appHeaderStyle.a} href="/">
                <nav className={appHeaderStyle.nav}>
                  <BurgerIcon type="primary" />
                  <p className={appHeaderStyle.p}>Конструктор</p>
                </nav>
              </a>
              <a className={appHeaderStyle.a} href="/">
                <nav className={appHeaderStyle.nav}>
                  <ListIcon type="secondary" />
                  <p className={appHeaderStyle.p} style={{color:'#8585AD'}}>Лента заказов</p>
                </nav>
              </a>
            </div>
            <a className={appHeaderStyle.a_logo} href="/">
              <Logo />
            </a>
            <a className={appHeaderStyle.a} href="/">
              <nav className={appHeaderStyle.nav}>
                <ProfileIcon type="secondary" />
                <p className={appHeaderStyle.p} style={{color:'#8585AD'}}>Личный кабинет</p>
              </nav>
            </a>
          </section>
        </div>
      </header>
    </>
  );
}

export default AppHeader;

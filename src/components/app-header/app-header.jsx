import React from "react";
import appHeaderStyle from "./app-header-style.module.scss";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <>
      <header className={appHeaderStyle.header}>
        <div className={appHeaderStyle.wrapper}>
          <section className={appHeaderStyle.navbar}>
            <a className={appHeaderStyle.a} href="/">
            <nav className={appHeaderStyle.nav}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default">Конструктор</p>
            </nav>
            </a>
            
            <nav className={appHeaderStyle.nav}></nav>
            <nav className={appHeaderStyle.nav}>
              <Logo />
            </nav>
            <nav className={appHeaderStyle.nav}></nav>
            <section className={appHeaderStyle.section}> </section>
          </section>
        </div>
      </header>
    </>
  );
}

export default AppHeader;

import React, { useState, useEffect } from "react";
import appStyle from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgrerIngridients from "../burger-ingredients/burger-ingredients";
import BurgerConstruction from "../burgrer-construction/burger-construction";
// import OrderDetails from "../modal-window/order-details/order-details";
import Modal from "../modal-window/modal/modal";

function App() {
  const [burgerArr, setBurgerArr] = useState([]);
  const [bun, setBun] = useState([]);
  const API_URL = "https://norma.nomoreparties.space/api/ingredients";
  const [burgerData, setBurgerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Fetched data:", data.data);

        setBurgerData(data.data);

        const bunIngredient = data.data.find(
          (ingredient) => ingredient.type === "bun"
        );

        if (bunIngredient) {
          setBun([bunIngredient, bunIngredient]);
        } else {
          setBun([{}, {}]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={appStyle.wrapper}>
      <AppHeader />

      <main className={appStyle.main}>
        {loading ? (
          <p className={appStyle.loading}>Loading...</p>
        ) : (
          <>
            <BurgrerIngridients
              burgerData={burgerData}
              setBun={setBun}
              setBurgerArr={setBurgerArr}
              handleOpenModal={handleOpenModal}
              // handleCloseModal={handleCloseModal}
            />
            <BurgerConstruction
              burgerArr={burgerArr}
              bun={bun}
              handleOpenModal={handleOpenModal}
              // handleCloseModal={handleCloseModal}
            />
          </>
        )}
        {modalContent && (
          <Modal onClose={handleCloseModal}>{modalContent}</Modal>
        )}
      </main>
    </div>
  );
}

export default App;

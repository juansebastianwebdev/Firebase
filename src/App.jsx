/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { app } from "./config/firebase";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const db = getFirestore(app);
  // const [datoss, setDatoss] = useState([]);

  // useEffect(() => {
  //   const buscarDB = async () => {
  //     const response = collection(db, "productos");
  //     const data = await getDocs(response);

  //     await setDoc(doc(db, "productos", "nuevoproducto"), {
  //       nombre: "producto",
  //       id: Math.floor(Math.random() * 100),
  //       propiedades: {
  //         descripcion: "descripcion",
  //         imagen:
  //           "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dwa3760afb/images/imagenes-productos/800/MK2M/MK2M4O7VXZ-0001-001.jpg",
  //       },
  //     });

  //     const datos = data.docs.map((doc) => doc.data());
  //     setDatoss(datos);
  //   };
  //   buscarDB();
  // }, []);

  return (
    <>
      {/* {datoss.length > 0 &&
        datoss &&
        datoss.map((element) => (
          <div
            key={element.id}
            className="flex flex-col items-center bg-emerald-500"
          >
            <img src={element.propiedades.imagen} alt="" className="w-[25%]" />
            <div className="">
              <h3>{element.nombre}</h3>
              <h3>{element.propiedades.descripcion}</h3>
              <h3>{element.propiedades.precio}</h3>
            </div>
          </div>
        ))} */}
      <main className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

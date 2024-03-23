/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Navbar from "../components/Navbar";
import { app } from "../config/firebase";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [impresiones, setImpresiones] = useState([]);
  const [error, setError] = useState(null);
  const db = getFirestore(app);

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const newImpresiones = [];
      querySnapshot.forEach((doc) => {
        newImpresiones.push({ id: doc.id, data: doc.data() });
      });
      setImpresiones(newImpresiones);
    };
    obtenerDatos();
  }, []);

  const enviarDatos = async (e) => {
    e.preventDefault();
    if (!data.nombre || !data.imagen) {
      setError("complete los campos");
    } else {
      console.log("datos:", data);
      await setDoc(
        doc(db, "productos", String(Math.floor(Math.random() * 1000))),
        data
      );

      console.log("campos llenos");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center gap-2">
        <Navbar />
        <form className="gap-2">
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => {
              setData({ ...data, nombre: e.target.value });
            }}
          />
          <input
            type="url"
            placeholder="Url de la iamgen"
            onChange={(e) => {
              setData({ ...data, imagen: e.target.value });
            }}
          />
          <button onClick={enviarDatos}>enviar</button>
          {error && <p>{error}</p>}
        </form>

        {impresiones.length > 0 &&
          impresiones.map((impresion) => (
            <div
              key={impresion.id}
              className="w-[40%] bg-slate-800 flex items-center rounded-2xl gap-2"
            >
              <img
                src={impresion.data.imagen}
                alt=""
                className="w-[50%]"
              />
              <div>
                <h1 className="text-white text-3xl font-bold">
                  {impresion.data.nombre}
                </h1>
              </div>
            </div>
          ))}
      </main>
    </>
  );
};

export default Home;

import './index.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/request';
import { Sale } from './models/sales';


function App() {


  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-conteiner">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

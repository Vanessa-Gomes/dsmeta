import './index.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { useState } from 'react';


function App() {

  const min = new Date(new Date().setDate(new Date().getDate() -365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-conteiner">
            <div className="dsmeta-card">
              <h2 className="dsmeta-sales-title">Vendas</h2>
              <div>
                <div className="dsmeta-form-control-conteiner">
                  <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="dsmeta-form-control-conteiner">
                  <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              <div>
                <table className="dsmeta-sales-table">
                  <thead>
                    <tr>
                      <th className="show992">ID</th>
                      <th className="Show576">Data</th>
                      <th>Vendedor</th>
                      <th className="show992">Visitas</th>
                      <th className="show992">Vendas</th>
                      <th>Total</th>
                      <th>Notificar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="show992">#341</td>
                      <td className="Show576">07/08/2022</td>
                      <td>Anakim</td>
                      <td className="show992">15</td>
                      <td className="show992">11</td>
                      <td>R$ 55300.00</td>
                      <td>
                        <div className="dsmeta-red-btn-conteiner">
                          <NotificationButton />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="show992">#341</td>
                      <td className="Show576">07/08/2022</td>
                      <td>Anakim</td>
                      <td className="show992">15</td>
                      <td className="show992">11</td>
                      <td>R$ 55300.00</td>
                      <td>
                        <div className="dsmeta-red-btn-conteiner">
                          <NotificationButton />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="show992">#341</td>
                      <td className="Show576">07/08/2022</td>
                      <td>Anakim</td>
                      <td className="show992">15</td>
                      <td className="show992">11</td>
                      <td>R$ 55300.00</td>
                      <td>
                        <div className="dsmeta-red-btn-conteiner">
                          <NotificationButton />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

// import React from 'react';

import { Link } from "react-router-dom";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";




const PaymentPage = () => {
    return (
        <div>
          <SectionTitle heading={"Get your membership"}
          ></SectionTitle> 
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>category</th>
        <th>pay</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>membership</td>
        <td>Servey</td>
        <td><Link to='/pay'><button className="btn btn-accent">Pay</button></Link></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>        
        </div>
    );
};

export default PaymentPage;
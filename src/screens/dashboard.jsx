// Home.js
import React, { useState } from "react";
import Aside from "./component/aside.jsx";
import HomeScreen from "./home/homeScreen.jsx";
import ListOrderScreen from "./listOrder/listOrderScreen.jsx";
import HistorySoldScreen from "./historySold/historyScreen.jsx";
import ImportScreen from "./import/importScreen.jsx";
import ProductManageScreen from "./product/productManageScreen.jsx";
import EmployeeManageScreen from "./employee/employeeManageScreen.jsx";
import CustomerManageScreen from "./customer/customerManageScreen.jsx";
import TypeScreen from "./type/typeScreen.jsx";
import ProviderScreen from "./provider/providerScreen.jsx";

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState("home");
  const handleItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };
  const renderContent = () => {
    switch (selectedItem) {
      case "home":
        return <HomeScreen />;
      case "listOrder":
        return <ListOrderScreen />;
      case "historySold":
        return <HistorySoldScreen />;
      case "import":
        return <ImportScreen />;
      case "manage-product":
        return <ProductManageScreen />;
      case "manage-employee":
        return <EmployeeManageScreen />;
      case "customer-employee":
        return <CustomerManageScreen />;
      case "type":
        return <TypeScreen />;
      case "provider":
        return <ProviderScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 flex">
      {/* Side */}
      <Aside onItemSelected={handleItemSelected} />

      <div className="w-full flex flex-col overflow-y-hidden bg-bgColor">
        {/* <!-- Desktop Header --> */}
        <div className="w-full items-center bg-white py-4 px-6 hidden sm:flex shadow-lg">
          <div className="w-1/2 bg-slate-400 h-16 "> </div>
          <div className="relative w-1/2 flex justify-end "></div>
        </div>
        {/* content here */}
        <div className="overflow-y-auto flex-grow">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Dashboard;

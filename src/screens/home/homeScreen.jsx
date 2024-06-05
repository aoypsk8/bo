import React, { useState } from "react";
import ic_customer from "../../assets/icons/allCustomerD.svg";
import ic_type from "../../assets/icons/typeD.svg";
import ic_people from "../../assets/icons/peopleD.svg";
import ic_allPro from "../../assets/icons/allProD.svg";
import ic_list_Order from "../../assets/icons/listD.svg";

function HomeScreen() {
    return (
        <div className="text-5xl px-5 py-7">
          <p>Dashboard</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_customer} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ລູກຄ້າທັງຫມົດ</div>
              </div>
            </div>
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_list_Order} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ສິນຄ້າທີ່ໄດ້ ( ມື້ນີ້ ) / ລາຍການ</div>
              </div>
            </div>
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_allPro} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ສິນຄ້າທັງຫມົດ</div>
              </div>
            </div>
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_people} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ພະນັກງານທັງຫມົດ</div>
              </div>
            </div>
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_type} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ປະເພດສິນຄ້າທັງຫມົດ</div>
              </div>
            </div>
            <div className="py-5 flex shadow-md shadow-subTextColor px-4 rounded-xl">
              <img src={ic_type} className="mr-2" alt="Customer Icon" />
              <div className="ml-2">
                <div className="text-4xl">123</div>
                <div className="text-2xl text-unSelectText">ຜູ້ສະຫນອງທັງຫມົດ</div>
              </div>
            </div>

          </div>
        </div>
      );
}

export default HomeScreen;

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";

import ic_restart from "../../assets/icons/restart.svg";
import ic_save from "../../assets/icons/save.svg";
import ic_search from "../../assets/icons/search.svg";
import ic_peopleD from "../../assets/ic_fill/people.svg";
import ic_edit from "../../assets/icons/editI.svg";
import ic_delete from "../../assets/icons/deleteI.svg";
import ic_pro from "../../assets/pro.png";
import productImg from "../../assets/pro.png";
import profile from "../../assets/profileimg.png";
import EmployeeManageModal from "./modal/employeeManageModal";
import EmployeeManageEditModal from "./modal/employeeManageEditModal";
import "../../App.css";

function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function EmployeeManageScreen() {
  const fakeData = [
    {
      id: 1,
      name: "ມີໄຊ",
      surname: "ໄຊຊະນະ",
      image: profile,
      gender: "ຍິງ",
      phone: "20 78833251",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 2,
      name: "ມີໄຊ",
      surname: "ໄຊຊະນະ",
      image: profile,
      gender: "ຍິງ",
      phone: "20 78833251",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 3,
      name: "ມີໄຊ",
      surname: "ໄຊຊະນະ",
      image: profile,
      gender: "ຍິງ",
      phone: "20 78833251",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 4,
      name: "ມີໄຊ",
      surname: "ໄຊຊະນະ",
      image: profile,
      gender: "ຍິງ",
      phone: "20 78833251",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const filteredProducts = fakeData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-10 h-full">
      {isModalOpen === true && (
        <EmployeeManageModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isEditModalOpen === true && (
        <EmployeeManageEditModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
        />
      )}
      <div className="flex items-center justify-between mb-10">
        <p className="text-5xl">ຈັດການຂໍ້ມູນພະນັກງານ</p>
        <div className="flex items-center">
          <div className="border border-lineColor px-5 py-2 rounded-md flex items-center mr-5">
            <img src={ic_search} alt="" className="w-4 h-4" />
            <input
              className="w-full rounded text-start focus:outline-none ml-2"
              id="name"
              name="name"
              required=""
              placeholder="ຄົ້ນຫາ"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div
            className="border border-lineColor px-5 py-2 rounded-md flex items-center bg-secondaryColor"
            onClick={() => openModal()}
          >
            <img src={ic_peopleD} alt="" className="w-7 h-7 text-white " />
            <div className="w-full rounded text-white ml-2">ເພີ່ມພະນັກງານ</div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        {filteredProducts.map((item) => (
          <div
            className="bg-white shadow-md p-3 mx-10 rounded-lg mt-10 py-10"
            key={item.id}
          >
            <div className="rounded-full flex justify-center items-center py-2  ">
              <img src={item.image} alt="" className="rounded-full " />
            </div>
            <div className="flex justify-between items-center text-textColor mt-10">
              <div className="flex">
                <p className="text-2xl font-semibold">{item.name}</p>
                <div className="mx-1"></div>
                <p className="text-2xl font-semibold">{item.surname}</p>
                <div className="mx-1"></div>
                <p className="text-xl font-semibold">( {item.id} )</p>
              </div>
              <div className="flex items-center">
                <img
                  src={ic_edit}
                  alt=""
                  className="pr-2"
                  onClick={() => openEditModal()}
                />
                <img src={ic_delete} alt="" />
              </div>
            </div>
            <p className="text-textColor text-sm mt-2">ເພດ : {item.gender}</p>
            <p className="text-textColor text-sm mt-2">ເບີໂທ : {item.phone}</p>
            <p className="text-textColor text-sm mt-2">ບ້ານ : {item.village}</p>
            <p className="text-textColor text-sm mt-2">
              ເມືອງ : {item.distric}
            </p>
            <p className="text-textColor text-sm mt-2">
              ແຂວງ : {item.province}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeManageScreen;

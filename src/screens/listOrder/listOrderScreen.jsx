// Home.js
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";

import ic_restart from "../../assets/icons/restart.svg";
import ic_save from "../../assets/icons/save.svg";
import ic_search from "../../assets/icons/search.svg";
import ic_edit from "../../assets/icons/edit.svg";
import ic_delete from "../../assets/icons/delete.svg";
import "../../App.css";
import ListOrderModalComponent from "./modal/listOrderModal";

function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function ListOrderScreen() {
  const fakeData = [
    {
      id: 1,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
    {
      id: 2,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
    {
      id: 3,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
    {
      id: 4,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
    {
      id: 5,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
    {
      id: 6,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },

    {
      id: 7,
      time: "13:54",
      date: "3/6/2024",
      orderBy: "ເປັດ",
      amount: "100000",
      status: false,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Set number of items per page
  const totalPages = Math.ceil(fakeData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fakeData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle next and previous page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-10">
      {isModalOpen === true && (
        <ListOrderModalComponent isOpen={isModalOpen} onClose={closeModal} />
      )}
      <p className=" mb-10 text-5xl">ລາຍການສັ່ງຊື້ ( 412 )</p>
      <div className="w-full  h-[600px] border border-lineColor py-3 rounded-md flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center px-5">
            <p className="text-xl w-1/3">ລາຍການສັ່ງຊື້ທັງຫມົດ</p>
            <div className=" border w-1/5 border-lineColor px-5 py-2 rounded-md flex items-center justify-between">
              <div className=" flex items-center">
                <LuCalendarSearch size={30} color="#625F5F" />
                <div className="w-full rounded text-start ml-2 text-unSelectText">
                  19/02/2024
                </div>
              </div>
              <IoIosArrowDown size={25} color="#625F5F" />
            </div>
          </div>
          <div className="border border-lineColor w-full py-3 mt-3 bg-head flex justify-between items-center px-5 ">
            <p className="text-base font-light w-1/6">ລຳດັບ</p>
            <p className="text-base font-light w-1/4">ເວລາ</p>
            <p className="text-base font-light w-1/6">ວັນທີ</p>
            <p className="text-base font-light w-1/6">ສັ່ງຊື້ໂດຍ</p>
            <p className="text-base font-light w-1/6">ຍອດລວມ</p>
            <p className="text-base font-light w-1/6">ສະຖານະ</p>
          </div>
          {currentItems.map((item) => (
            <div
              className="w-full py-5 bg-white flex justify-between items-center px-5 border-b border-lineColor"
              onClick={() => openModal()}
            >
              <p className="text-base font-light w-1/6">{item.id}</p>
              <p className="text-base font-light w-1/4">{item.time}</p>
              <p className="text-base font-light w-1/6">{item.date}</p>
              <p className="text-base font-light w-1/6">{item.orderBy}</p>
              <p className="text-xl font-light w-1/6">
                {formatNumber(item.amount)} ກີບ
              </p>
              {item.status == false ? (
                <p className="text-base font-light w-1/6 text-primaryColor">
                  ລໍຖ້າດຳເນີນການ...
                </p>
              ) : (
                <p className="text-base font-light w-1/6 text-greenBottle">
                  ສຳເລັດ
                </p>
              )}{" "}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between px-5">
          <div
            className="w-1/12 border border-lineColor bg-white rounded-md items-center justify-center flex"
            onClick={prevPage}
          >
            <p className="text-base font-light text-center ">ກັບຄືນ</p>
          </div>
          <div className="text-base font-light">
            {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, fakeData.length)} of {fakeData.length}
          </div>
          <div
            className="w-1/12 border border-lineColor bg-white rounded-md items-center justify-center flex"
            onClick={nextPage}
          >
            <p className="text-base font-light text-center ">ຕໍ່ໄປ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOrderScreen;

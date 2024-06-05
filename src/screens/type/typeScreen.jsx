// Home.js
import React, { useState } from "react";
import "../../App.css";
import ic_save1 from "../../assets/icons/save1.svg";
import ic_close1 from "../../assets/icons/close1.svg";
import ic_edit from "../../assets/icons/editI.svg";
import ic_delete from "../../assets/icons/deleteI.svg";


function TypeScreen() {
  const fakeData = [
    {
      id: 1,
      name: "iPhone",
      time: "13:54",
      date: "3/6/2024",
    },
    {
      id: 2,
      name: "Oppo",
      time: "13:54",
      date: "3/6/2024",
    },
    {
      id: 3,
      name: "Vivo",
      time: "13:54",
      date: "3/6/2024",
    },
   
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Set number of items per page
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

  // Custom Dropdown Component
  //dropdow


  return (
    <div className="p-10 flex flex-col justify-between">
      <p className=" mb-6 text-5xl">ປະເພດສິນຄ້າ</p>
      <div className="w-full  flex justify-center   ">
        <div className="">
          {" "}
          <p className="text-xl">ຊື່ປະເພດສິນຄ້າ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ຊື່ປະເພດສິນຄ້າ"
            />
          </div>
        </div>{" "}
      </div>
      <div className="w-full flex justify-center px-5 py-6">
          <div className=" bg-redBottle flex justify-between py-1 px-5 rounded-md items-center ">
            <img src={ic_close1} alt="" className=" " />
            <div className="text-white text-2xl">ຍົກເລີກ</div>
          </div>
          <div className="mx-2"></div>
          <div className=" bg-greenBottle flex justify-between py-1 px-5 rounded-md items-center ">
            <img src={ic_save1} alt="" className=" " />
            <div className="text-white text-2xl ">ບັນທຶກ</div>
          </div>
        </div>
      <div className="w-full h-3/4  border border-lineColor py-3 rounded-md flex flex-col justify-between mt-3">
        <div className="flex justify-between items-center px-5 pb-5">
          <p className="text-xl w-1/3">ລາຍການປະເພດສິນຄ້າທັງຫມົດ</p>
          
        </div>
        <div className="border border-lineColor w-full py-3  bg-head flex justify-between items-center px-5 ">
          <p className="text-base font-light flex justify-center items-center w-1/6   ">
            ລຳດັບ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ຊື່ລາຍການ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ເວລາ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ວັນທີ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12">
          </p>
          
        </div>
        {currentItems.map((item) => (
          <div className="w-full py-5 bg-white flex justify-between items-center px-5 border-b border-lineColor">
            <p className="text-base font-light flex justify-center items-center w-1/6 " >
              {item.id}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.name}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.time}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.date}
            </p>
            <div className="flex items-center w-1/12">
                <img
                  src={ic_edit}
                  alt=""
                  className="pr-2"
                  onClick={() => openEditModal()}
                />
                <img src={ic_delete} alt="" />
              </div>
            
          </div>
        ))}
        <div className="w-full flex justify-between px-5 my-3">
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

export default TypeScreen;

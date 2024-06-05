// Home.js
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";
import "../../App.css";
import ic_save1 from "../../assets/icons/save1.svg";
import ic_close1 from "../../assets/icons/close1.svg";
import ic_edit from "../../assets/icons/editI.svg";
import ic_delete from "../../assets/icons/deleteI.svg";

function ProviderScreen() {
  const fakeData = [
    {
      id: 1,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 2,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 3,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 4,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 5,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },
    {
      id: 6,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
    },

    {
      id: 7,
      name: "ບໍລິສັດສຸດໃຈ",
      phone: "20 5212314",
      village: "ພະຂາວ",
      distric: "ຫາດຊາຍຟອງ",
      province: "ນະຄອນຫລວງວຽງຈັນ",
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
  const [selectedProvide, setSelectedProvide] = useState("ຜູ້ສະຫນອງ");
  const ProvideData = ["ຜູ້ສະຫນອງ", "option2", "option3"];
  const CustomDropdown = ({ options, selectedOption, onSelect }) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const toggleDropdown = () => {
      setIsOpenDropDown(!isOpenDropDown);
    };
    const handleSelect = (option) => {
      onSelect(option);
      toggleDropdown();
    };
    return (
      <div className="relative ">
        <div
          className="hover:cursor-pointer flex w-full border border-lineColor rounded-md my-2 px-5  justify-between items-center py-2"
          onClick={toggleDropdown}
        >
          {selectedOption}
          {isOpenDropDown ? <IoIosArrowDown /> : <IoIosArrowBack />}
        </div>
        {isOpenDropDown && (
          <ul className=" absolute border border-lineColor overflow-y-auto z-10 w-full bg-white rounded-md px-3 ">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="text-lg hover:cursor-pointer my-1 "
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="p-10 flex flex-col justify-between">
      <p className=" mb-6 text-5xl">ຜູ້ສະຫນອງ</p>
      <div className="w-full  grid grid-cols-4  ">
        <div className="  pl-10">
          {" "}
          <p className="text-xl">ຊື່ຜູ້ສະຫນອງ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ຊື່ຜູ້ສະຫນອງ"
            />
          </div>
        </div>{" "}
        <div className="px-10">
          {" "}
          <p className="text-xl">ເບີໂທ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ເບີໂທ"
            />
          </div>
        </div>{" "}
        <div className=" pr-10">
          {" "}
          <p className="text-xl">ບ້ານ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ບ້ານ"
            />
          </div>
        </div>
        <div className="pl-10">
          {" "}
          <p className="text-xl">ເມືອງ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ເມືອງ"
            />
          </div>
        </div>
        <div className="pl-10">
          {" "}
          <p className="text-xl">ແຂວງ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ແຂວງ"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-end px-5 ">
        <div className="w-1/6 bg-redBottle flex justify-between py-1 px-5 rounded-md items-center ">
          <img src={ic_close1} alt="" className=" " />
          <div className="text-white text-2xl">ຍົກເລີກ</div>
        </div>
        <div className="mx-2"></div>
        <div className="w-1/6 bg-greenBottle flex justify-between py-1 px-5 rounded-md items-center ">
          <img src={ic_save1} alt="" className=" " />
          <div className="text-white text-2xl ">ບັນທຶກ</div>
        </div>
      </div>
      <div className="w-full h-3/4  border border-lineColor py-3 rounded-md flex flex-col justify-between mt-3">
        <div className="flex justify-between items-center px-5 pb-5">
          <p className="text-xl w-1/3">ລາຍການຜູ້ສະຫນອງທັງຫມົດ</p>
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
        <div className="border border-lineColor w-full py-3  bg-head flex justify-between items-center px-5 ">
          <p className="text-base font-light flex justify-center items-center w-1/12 ">
            ລຳດັບ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ຊື່ລາຍການ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12">
            ເບີໂທ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12">
            ບ້ານ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ເມືອງ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ແຂວງ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12"></p>
        </div>
        {currentItems.map((item) => (
          <div className="w-full py-5 bg-white flex justify-between items-center px-5 border-b border-lineColor">
            <p className="text-base font-light flex justify-center items-center w-1/12">
              {item.id}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.name}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/12">
              {item.phone}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/12">
              {item.village}
            </p>

            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.distric}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.province}
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

export default ProviderScreen;

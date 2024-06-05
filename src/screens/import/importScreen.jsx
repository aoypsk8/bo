// Home.js
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";
import "../../App.css";
import ic_save1 from "../../assets/icons/save1.svg";
import ic_close1 from "../../assets/icons/close1.svg";
function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function ImportScreen() {
  const fakeData = [
    {
      id: 1,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },
    {
      id: 2,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },
    {
      id: 3,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },
    {
      id: 4,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },
    {
      id: 5,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },
    {
      id: 6,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
    },

    {
      id: 7,
      name: "ເສື້ອ",
      time: "13:54",
      date: "3/6/2024",
      amount: "100000",
      provider: "ບໍລິສັດສຸດໃຈ",
      count: "1",
      total: "1000000",
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
      <p className=" mb-6 text-5xl">ການນຳເຂົ້າສິນຄ້າ</p>
      <div className="w-full  grid grid-cols-3  ">
        <div className="  pl-10">
          {" "}
          <p className="text-xl">ຊື່ລາຍການນຳເຂົ້າ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ຊື່ລາຍການນຳເຂົ້າ"
            />
          </div>
        </div>{" "}
        <div className="px-10">
          {" "}
          <p className="text-xl">ຈຳນວນ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ຈຳນວນ"
            />
          </div>
        </div>{" "}
        <div className=" pr-10">
          {" "}
          <p className="text-xl">ລາຄາ</p>
          <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
            <input
              className="w-full py-2 px-5 rounded "
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="ລາຄາ"
            />
          </div>
        </div>
        <div className="pl-10">
          <p className="text-xl">ຜູ້ສະຫນອງ</p>
          <CustomDropdown
            options={ProvideData}
            selectedOption={selectedProvide}
            onSelect={setSelectedProvide}
          />
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
          <p className="text-xl w-1/3">ລາຍການນຳເຂົ້າສິນຄ້າທັງຫມົດ</p>
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
            ເວລາ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12">
            ວັນທີ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ລາຄາ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ຜູ້ສະຫນອງ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/12">
            ຈຳນວນ
          </p>
          <p className="text-base font-light flex justify-center items-center w-1/6">
            ຍອດລວມ
          </p>
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
              {item.time}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/12">
              {item.date}
            </p>
            <p className="text-xl font-light flex justify-center items-center w-1/6">
              {formatNumber(item.amount)} ກີບ
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/6">
              {item.provider}
            </p>
            <p className="text-base font-light flex justify-center items-center w-1/12">
              {item.count}
            </p>
            <p className="text-xl font-light flex justify-center items-center w-1/6">
              {formatNumber(item.total)} ກີບ
            </p>
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

export default ImportScreen;

import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import ic_restart from "../../../assets/icons/restart.svg";
import ic_save from "../../../assets/icons/save.svg";
import ic_search from "../../../assets/icons/search.svg";
import ic_edit from "../../../assets/icons/edit.svg";
import ic_delete from "../../../assets/icons/delete.svg";
import result from "../../../assets/result.png";
import product from "../../../assets/pro.png";
import "../../../App.css";
function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}
// Product Management Modal Component
const ListOrderModalComponent = ({ isOpen, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState("ລໍຖ້າດຳເນີນການ...");
  const StatusData = ["ລໍຖ້າດຳເນີນການ...", "ສຳເລັດ"];
  const [selectedStatusUpdate, setSelectedStatusUpdate] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        console.log("HI");
        onClose();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    if (selectedStatus == "ສຳເລັດ") {
      setSelectedStatusUpdate(true);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, selectedStatus]);
  //dropdow

  const fakeData = [
    {
      id: 1,
      namePro: "IPhone X",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 2,
      namePro: "IPhone 14Pro Max",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 3,
      namePro: "IPhone X",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 4,
      namePro: "IPhone X",
      image: "3/6/2024",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 5,
      namePro: "IPhone X",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 6,
      namePro: "IPhone X",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },

    {
      id: 7,
      namePro: "IPhone X",
      image: product,
      orderBy: "ເປັດ",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
  ];

  // Custom Dropdown Component
  const CustomDropdown = ({ options, selectedOption, onSelect }) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const toggleDropdown = () => {
      setIsOpenDropDown(!isOpenDropDown);
    };
    const handleSelect = (option) => {
      if (selectedStatusUpdate == true) {
      } else {
        onSelect(option);
        toggleDropdown();
      }
    };
    return (
      <div className="relative px-10 items-center">
        <div
          className={`hover:cursor-pointer flex w-full border border-lineColor rounded-xl my-2 px-10  justify-between items-center py-1 ${
            selectedStatusUpdate == true
              ? "text-scueecssColor"
              : "text-primaryColor"
          }`}
          onClick={selectedStatusUpdate == true ? "" : toggleDropdown}
        >
          {selectedOption}
          {selectedStatusUpdate == true ? (
            ""
          ) : isOpenDropDown ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowBack />
          )}
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
    <div className="modal-overlay ">
      <div className="modal-content">
        <div className="flex flex-col items-center justify-center">
          <div className="border-b border-lineColor w-full flex justify-center items-center">
            <p className="text-2xl font-medium my-3">ລາຍລະອຽດການສັ່ງຊື້</p>
            <CustomDropdown
              options={StatusData}
              selectedOption={selectedStatus}
              onSelect={setSelectedStatus}
            />
          </div>
          <div className="w-full my-5 flex px-10 justify-between pb-10 ">
            <div className="w-1/3 flex justify-center items-center ">
              <img
                src={result}
                alt=""
                className=" w-full h-[500px] object-contain "
              />
            </div>
            <div className="w-2/3  border border-lineColor rounded-md flex flex-col justify-between ">
              <div className="border border-lineColor w-full py-3  bg-head flex justify-between items-center px-5 ">
                <p className="text-base font-light  flex justify-center w-1/6">
                  ລຳດັບ
                </p>
                <p className="text-base font-light  flex justify-center w-2/6">
                  ຊື່ສິນຄ້າ
                </p>
                <p className="text-base font-light  flex justify-center w-1/6">
                  ຮູບພາບ
                </p>
                <p className="text-base font-light  flex justify-center w-1/6">
                  ສັ່ງຊື້ໂດຍ
                </p>
                <p className="text-base font-light  flex justify-center w-2/6">
                  ລາຄາ
                </p>
                <p className="text-base font-light  flex justify-center w-1/6">
                  ຈຳນວນ
                </p>
                <p className="text-base font-light  flex justify-center w-2/6">
                  ລວມ
                </p>
              </div>
              {fakeData.map((item) => (
                <div className="w-full py-5 bg-white flex justify-between items-center px-5 border-b border-lineColor">
                  <p className="text-base font-light  flex justify-center w-1/6">
                    {item.id}
                  </p>
                  <p className="text-base font-light  flex justify-center w-2/6">
                    {item.namePro}
                  </p>
                  <div className="flex justify-center w-1/6">
                    <img src={item.image} alt="" className=" " />
                  </div>
                  <p className="text-base font-light  flex justify-center w-1/6">
                    {item.orderBy}
                  </p>
                  <p className="text-xl font-light  flex justify-center w-2/6">
                    {formatNumber(item.amount)} ກີບ
                  </p>

                  <p className="text-base font-light  flex justify-center w-1/6">
                    {item.count}
                  </p>

                  <p className="text-xl font-light  flex justify-center w-2/6">
                    {formatNumber(item.total)} ກີບ
                  </p>
                </div>
              ))}
              <div className="w-full flex justify-between px-5 bg-bgbg h-20 items-center">
                <p className="text-2xl font-medium my-3">ຍອດລວມ</p>
                <p className="text-3xl font-medium my-3">199,999,000 ກີບ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrderModalComponent;

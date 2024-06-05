import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import ic_restart from "../../../assets/icons/restart.svg";
import ic_save from "../../../assets/icons/save.svg";
import ic_search from "../../../assets/icons/search.svg";
import ic_edit from "../../../assets/icons/edit.svg";
import ic_delete from "../../../assets/icons/delete.svg";
import ic_save1 from "../../../assets/icons/save1.svg";
import ic_close1 from "../../../assets/icons/close1.svg";
import result from "../../../assets/result.png";
import product from "../../../assets/pro.png";
import "../../../App.css";
function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}
// Product Management Modal Component
const EmployeeManageModal = ({ isOpen, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState("ປະເພດ");
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
      <div className="relative items-start">
        <div
          className={`w-full border border-lineColor rounded-md my-2 py-2 flex px-5 items-center justify-between`}
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
            <p className="text-2xl font-medium my-3">ເພີ່ມພະນັກງານ</p>
          </div>
          <div className="w-full my-5  ">
            <div className="w-full flex justify-center">
              <div className="w-2/3 px-32 justify-between grid grid-cols-2  ">
                <div className=" pr-5">
                  <p className="text-xl ">ລະຫັດພະນັກງານ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ລະຫັດພະນັກງານ"
                    />
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-xl ">ຮູບພາບ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ຮູບພາບ"
                    />
                  </div>
                </div>
                <div className=" pr-5">
                  <p className="text-xl ">ຊື່ພະນັກງານ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ຊື່ພະນັກງານ"
                    />
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-xl ">ບ້ານ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ບ້ານ"
                    />
                  </div>
                </div>
                <div className=" pr-5">
                  <p className="text-xl ">ນາມສະກຸນ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ນາມສະກຸນ"
                    />
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-xl ">ເມືອງ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ເມືອງ"
                    />
                  </div>
                </div>
                <div className=" pr-5">
                  <p className="text-xl ">ເພດ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ເພດ"
                    />
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-xl ">ແຂວງ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ແຂວງ"
                    />
                  </div>
                </div>
                <div className=" pr-5">
                  <p className="text-xl ">ເບີໂທ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ເບີໂທ"
                    />
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-xl ">ລະຫັດຜ່ານ</p>
                  <div className="w-full border border-lineColor rounded-md my-2 flex justify-center items-center">
                    <input
                      className="w-full py-2 px-5 rounded text-start"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="ລະຫັດຜ່ານ"
                    />
                  </div>
                </div>
               
              </div>
              <div className="w-1/3 flex justify-center items-center ">
                <img
                  src={product}
                  alt=""
                  className=" w-full  object-contain items-center"
                />
              </div>
            </div>
            <div className=" flex justify-end  mt-28 px-5 ">
              <div className="w-1/6 bg-redBottle flex justify-between py-1 px-5 rounded-md items-center "onClick={()=> onClose()}>
                <img src={ic_close1} alt="" className=" " />
                <div className="text-white text-2xl">ຍົກເລີກ</div>
              </div>
              <div className="mx-2"></div>
              <div className="w-1/6 bg-greenBottle flex justify-between py-1 px-5 rounded-md items-center ">
                <img src={ic_save1} alt="" className=" " />
                <div className="text-white text-2xl ">ບັນທຶກ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManageModal;

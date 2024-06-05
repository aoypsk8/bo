import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";

import ic_restart from "../../assets/icons/restart.svg";
import ic_save from "../../assets/icons/save.svg";
import ic_search from "../../assets/icons/search.svg";
import ic_cart from "../../assets/icons/addcart.svg";
import ic_edit from "../../assets/icons/editI.svg";
import ic_delete from "../../assets/icons/deleteI.svg";
import ic_pro from "../../assets/pro.png";
import productImg from "../../assets/pro.png";
import ProductManageModal from "./modal/productManageModal";
import ProductManageEditModal from "./modal/productManageEditModal";
import "../../App.css";

function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function ProductManageScreen() {
  const fakeData = [
    {
      id: 1,
      namePro: "IPhone X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 2,
      namePro: "IPhone 14Pro Max",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 3,
      namePro: "IPhone X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 4,
      namePro: "IPhone 14Pro Max X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 5,
      namePro: "IPhone 14Pro Max X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },
    {
      id: 6,
      namePro: "IPhone X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
    },

    {
      id: 7,
      namePro: "IPhone X",
      image: productImg,
      description:
        " Ram 8 ຂະຫນາດ 256 GB ກ້ອງ 35 ລ້ານພິກ ເຊວ iOS 18 ໃຫ່ມລາສຸດຂອງ Apple ຕອນນີ້ເລີຍ",
      type: "iPhone",
      amount: "1900000",
      count: "2",
      total: "3200000",
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
    item.namePro.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-10 h-full">
      {isModalOpen === true && (
        <ProductManageModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isEditModalOpen === true && (
        <ProductManageEditModal isOpen={isEditModalOpen} onClose={closeEditModal} />
      )}
      <div className="flex items-center justify-between mb-10">
        <p className="text-5xl">ຈັດການຂໍ້ມູນສິນຄ້າ</p>
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
            <img src={ic_cart} alt="" className="w-7 h-7" />
            <div className="w-full rounded text-white ml-2">ເພີ່ມສິນຄ້າ</div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        {filteredProducts.map((item) => (
          <div className="bg-white shadow-md p-3 mx-10 rounded-lg mt-10" key={item.id}>
            <div className="bg-bgPro rounded-md py-8">
              <img src={ic_pro} alt="" />
            </div>
            <div className="flex justify-between items-center text-textColor mt-10">
              <p className="text-2xl font-semibold">{item.namePro}</p>
              <p className="text-xl font-semibold">( {item.count} )</p>
            </div>
            <p className="text-textColor text-sm mt-2">{item.description}</p>
            <p className="text-textColor text-sm mt-2">ປະເພດ : {item.type}</p>
            <div className="flex items-center justify-between py-5">
              <div className="flex items-end justify-between w-full">
                <div className="flex items-end">
                  <p className="text-textColor text-3xl mt-2">
                    {formatNumber(item.amount)}
                  </p>
                  <p className="text-textColor text-lg mt-2 ml-2">ກີບ</p>
                </div>
                <div className="flex items-center">
                  <img src={ic_edit} alt="" className="pr-2" onClick={() => openEditModal()} />
                  <img src={ic_delete} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManageScreen;

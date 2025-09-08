import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero_img from "./assets/img/Rectangle 3.png"
import scikers from "./assets/img/snickers_PNG13936 1.png"
import mmm from "./assets/img/m_m_PNG33 1.png"
import dic from "./assets/img/disc 1.png"
import popka from "./assets/img/image 5.png"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden flex">
        <div className="w-1/2 bg-green-500 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">
            Всегда свежие <br /> молочные продукты
          </h2>
          <p className="text-sm mb-5">
            Только качественные товары, за которыми мы всегда следим
          </p>
          <button className="border border-white px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-green-600 transition">
            Подробнее
          </button>
        </div>

        <div className="w-1/2 flex items-center justify-center p-4">
          <img
            src={hero_img}
            alt=""
            className="h-30 object-contain"
          />
        </div>

        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full">
          <FaChevronLeft />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full">
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <div className="bg-red-500 text-white rounded-xl p-4 flex flex-col items-start">
          <img
            src={scikers}
            alt=""
            className="h-16 object-contain mb-3"
          />
          <h3 className="font-semibold">Популярные товары</h3>
          <p className="text-sm">Все самые лучшие товары</p>
        </div>

        <div className="bg-blue-400 text-white rounded-xl p-4 flex flex-col items-start">
          <img
            src={mmm}
            alt=""
            className="h-16 object-contain mb-3"
          />
          <h3 className="font-semibold">Новинки</h3>
          <p className="text-sm">Новые позиции</p>
        </div>

        <div className="bg-purple-400 text-white rounded-xl p-4 flex flex-col items-start">
          <div className="text-5xl font-bold mb-3"><img src={dic} alt="" /></div>
          <h3 className="font-semibold">Акции</h3>
          <p className="text-sm">Лучшие цены</p>
        </div>

        <div className="bg-yellow-400 text-white rounded-xl p-4 flex flex-col items-start">
          <img
            src={popka}
            alt=""
            className="h-34 object-contain mb-3"
          />
          <h3 className="font-semibold">Комплекты</h3>
          <p className="text-sm">Все в одном</p>
        </div>
      </div>
    </section>
  );
}

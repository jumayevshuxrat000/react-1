import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./assets/img/image 1.png"


export default function Header() {
  return (
    <header className="border-b border-gray-200 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="h-8"
          />
          <div className="hidden sm:block text-sm text-gray-500">
            Бесплатный звонок <br />
            <span className="text-black font-semibold">8 800 080 5011</span>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Поиск товаров"
            className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm text-gray-500">
            <span className="text-green-600">ЕЦ-166/4</span>
            <br />
            Нур-Султан
          </div>
          <button className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100">
            Войти
          </button>
        </div>
      </div>

      <nav className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between font-bold gap-6 py-2 text-sm text-gray-700">
          <div className="cursor-pointer">Продукты</div>
          <div className="cursor-pointer">Еда быстрого приготовления</div>
          <div className="cursor-pointer">Консервы</div>
          <div className="cursor-pointer">Напитки</div>
          <div className="cursor-pointer">Бытовая химия</div>
          <div className="cursor-pointer">Уход за собой</div>
          <div className="cursor-pointer text-green-600">Еще</div>
          <button className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-lg">
            <FaShoppingCart size={18} />
            <span>Корзина</span>
            <span className="bg-white text-green-600 font-bold px-2 py-0.5 rounded-full text-xs">
              12
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

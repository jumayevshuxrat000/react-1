import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <a href="#" className="hover:text-green-600">О компании</a>
            <a href="#" className="hover:text-green-600">Вопрос-Ответ</a>
            <a href="#" className="hover:text-green-600">Новости</a>
            <a href="#" className="hover:text-green-600">Контакты</a>
            <a href="#" className="hover:text-green-600">Пополнение баланса</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">Бесплатно по Казахстану</p>
            <p className="font-bold">8 800 080 50 11</p>
            <p className="font-bold">8 727 225 50 11</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-4 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <span>2019 © Convex</span>
            <a href="#" className="hover:text-green-600">Политика конфиденциальности</a>
            <a href="#" className="hover:text-green-600">Публичная оферта</a>
            <a href="#" className="hover:text-green-600">Условия возврата</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-600">
              <FaTwitter />
            </a>
            <span className="border rounded-full w-8 h-8 flex items-center justify-center text-xs">
              18+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

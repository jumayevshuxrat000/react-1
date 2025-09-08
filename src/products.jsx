import React from "react";
import card__picture from "./assets/img/image 3.png"

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Акции</h2>
        <a href="#" className="text-green-600 hover:underline">Смотреть все</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 mt-4">
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className=" rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Новинки</h2>
        <a href="#" className="text-green-600 hover:underline">Смотреть все</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className=" rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Популярные товары</h2>
        <a href="#" className="text-green-600 hover:underline">Смотреть все</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className=" rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>

        <div className="rounded-xl shadow-sm p-4 flex flex-col">
          <img
            src={card__picture}
            alt=""
            className="h-32 object-contain mx-auto mb-3"
          />
          <h3 className="text-sm font-medium mb-2">
            Конина тушеная Улан, есть возможность в 2 строки
          </h3>
          <p className="text-green-600 text-sm mb-1">В наличии: 11 шт.</p>
          <p className="text-gray-500 text-sm mb-2">Вес: 130гр</p>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm line-through">28 030 тг.</p>
            <p className="text-red-500 text-lg font-bold">24 320 тг.</p>
            <button className="w-full mt-2 bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>




      {/* Here it is the Header hearing part */}
    <div className="relative bottom-12">
      <div className="p-1  pb-1  ">
        <div className="text-orange-500 text-center text-3xl font-bold pt-8">
          Welcome To our Ecommerce Platform!
        </div>
        <p className="text-slate-600 pt-2 text-sm text-center">
          Explore a diverse selection of high-quality products and exclusive
          deals tailored to your needs. Enjoy a seamless shopping experience
          with us.
        </p>
      </div>

      <div className="flex  justify-center pt-6 space-x-16 ">
        <div className="text-slate-700 text-2xl font-bold">
          Our Special Products
        </div>
        <div>
          <Link
            to="/shop"
            className="text-white transition duration-500 ease-in-out transform hover:-translate-y-1 bg-orange-700 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="h-1 w-28 border-b-2 rounded-xl min-[200px]:relative left-16 mt-1  md:relative md:left-1/3 md:ml-28 md:mt-2  bg-orange-500"></div>
    </div>
      {/* This section end here product showcase is below this */}

<div className="grid grid-cols-3">
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/macbook pro.jpg" alt="MacBook Pro" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">MacBook Pro</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Apple</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$890.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/dell lalptop.webp" alt="Dell Inspiron touch" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">Dell Inspiron touch</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Dell</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$459.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/iphone 15.jpg" alt="IPhone 15" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">IPhone 15</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Apple</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$456.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/ipad.jpg" alt="Ipad" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">Ipad</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Apple</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$543.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/earpods.jpeg" alt="Earpods" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">Earpods</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Samsung</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$35.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center flex-warp mt-[2rem]">
    <div>
      <div className="w-[30rem] mx-4 my-2 p-3 bg-white rounded-lg transition-shodow hover:shadow-x1 border border-gray">
        <div className="relative">
          <img src="./images/drones.jpg" alt="Drones" className="w-full rounded-lg object-cover h-[15rem]" />
          <div className="absolute top-2 right-4 cursor-pointer transition-transform duration-300 ease-in-out">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon-heart text-gray-400 hover:text-pink-300 hover:scale-125" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <a href="">
            <h2 className="text-lg font-bold text-blue-500 text-center mb-2">Drones</h2>
          </a>
          <div className="flex justify-between items-center mb-2">
            <p className="text-md text-black">Drone</p>
            <span className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2 text-center">$23.00</span>
          </div>
          <div className="flex mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      

    </>
  );
};

export default Home;

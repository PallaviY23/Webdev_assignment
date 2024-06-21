import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Product = ({items}) => {
  return (
    <>
      

      <div className="container  my-5">
        <div className="row ">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-4  text-center">
                  <div
                    className="card  shadow-xs shadow-slate-500 p-4  rounded-xl  text-gray-600 body-font inline-block sm:-m-4 -mx-4  -mt-4 transition duration-500 ease-in-out transform hover:-translate-y-2 md:w-1/3 sm:mb-0 mb-6"
                    style={{ height: "26rem", width: "24rem" }}>
                        <Link to={`/product/${product.id}`}
                         className="rounded-lg flex  h-56 overflow-hidden">
                        <img
                            alt="content"
                            className="object-cover  object-center h-full w-full"
                            src={product.img}
                        />
                        </Link>

                        <h2 className="text-xl text-orange-600 text-center font-medium title-font  mt-3.5">
                        {product.title}
                        </h2>

                        <div className="flex justify-between">
                            <p className="text-base pb-4 px-8 leading-relaxed mt-2">
                                {product.description}
                            </p>
                            <div className="text-sm text-white bg-slate-500 h-7 w-20 rounded-xl px-1 py-1 mt-2">
                                {product.price}
                            </div>
                        </div>
                        <div className="flex relative bottom-4 left-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" >
                            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                clipRule="evenodd" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" >
                            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                clipRule="evenodd" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" >
                            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                clipRule="evenodd" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" >
                            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                clipRule="evenodd" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </div>

                        <Link
                        to="/"
                        className="text-white w-99  relative right-20  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                        Add to Cart
                        </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

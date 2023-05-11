import React from "react";
import { Link } from "react-router-dom";
import {
  iPhone_13_Pro,
  earth,
  iPhone13,
  bitcion,
  upwork,
  freelancer,
} from "../assests";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple, FaBitcoin, FaChevronCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero section*/}
      <section className="py-10  justify-between items-center relative">
        <div className="max-h-screen bg-bg-white relative px-4 pt-6">
          <div className="flex-row-reverse ">
            <div className="relative top-40">
              <div className="absolute w-[420px] right-4 bg-[#885DF5] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] -right-0 top-4 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>

            <div>
              <div className="text-left w-[509px] lg:w-[609] pt-4">
                <h1 className="text-5xl font-bold">
                  Do more send, spend, bank, and trade gift cards or crypto
                </h1>
                <p className="py-4 font-semibold">
                  Neo banking built for you -USD Account, Virtual cards, Virtual
                  account, gift cards and crypto trading...
                </p>
              </div>
              <div className="relative">
                <div className="absolute w-[360px] p-0 bg-[#D9D9D9] z-10 h-[320px] border border-bg-black text-center items-center justify-center font-semibold">
                  <p className="p-2 bg-[#219DFC] font-bold">EXCHANGE RATE</p>
                  <div className="py-8">
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div>NGN</div>
                      <p>74,000</p>
                    </div>
                    Rate {"740"}/$
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div>USD</div>
                      <p>100.43</p>
                    </div>
                    <button className="border p-2 border-bg-black bg-[#47A348] mt-2">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="absolute w-[360px] left-4 top-4 bg-[#000] h-[320px] border border-bg-black"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-6 mt-96 pb-4">
            <div className="flex gap-36 justify-between">
              <div className="relative">
                <button className="absolute text-center border w-[6pc] border-bg-black h-[3pc] z-10 bg-[#767DFF]">
                  <div></div> 730/$
                </button>
                <div className="absolute w-[6pc] bg-[#000] h-[3pc] top-1 left-1 border border-bg-black"></div>
              </div>
              <div className="relative">
                <button className="absolute text-center border w-[6pc] border-bg-black h-[3pc] z-10 bg-[#767DFF]">
                  <div></div> 728/$
                </button>
                <div className="absolute w-[6pc] bg-[#000] h-[3pc] top-1 left-1 border border-bg-black"></div>
              </div>
            </div>

            <div className="text-bg-white flex gap-4 ">
              <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                <IoLogoGooglePlaystore />
                Google play
              </Link>
              <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                <FaApple />
                App store
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-bg-black p-2 font-semibold flex justify-around mt-6">
          <div className="bg-bg-white p-2">blackthron</div>
          <div className="bg-bg-white p-2">master card</div>
          <div className="bg-bg-white p-2">bitnob</div>
        </div>
      </section>

      {/* Global account section*/}
      <section className="py-10">
        <p className="text-center pt-6 pb-2 text-[50px]">
          One platform <span className="font-bold">for all transaction</span>
        </p>

        <div className="bg-[#D1D0D0] px-12">
          <div className="flex flex-row h-[540px] justify-between items-center">
            <div className="relative">
              <div className="absolute w-[420px] -top-40 bg-[#FF6E91] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Open global accounts <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Open a US Dollar, Nigerian Naira, Canadian Dollar, UK Pounds
                account in less than 5 minutes.
              </p>
              <div className="relative">
                <Link
                  to="/product/global-account"
                  className="absolute text-center border p-2 w-[11pc] border-bg-black h-[3pc] z-10 bg-[#767dff] mt-2"
                >
                  Open a free account
                </Link>
                <div className="absolute w-[11pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create virtual card section*/}
      <section className="py-2">
        <div className=" px-12">
          <div className="flex flex-row-reverse h-[540px] justify-between items-center">
            <div className="relative -left-[28rem]">
              <div className="absolute w-[420px] -top-40 bg-[#FF6464] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Virtual master card <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Open Create a virtual master card for free today and shop online
                without limit. Find new ways to spend & save.
              </p>
              <div className="relative">
                <Link
                  to="/product/virtual-account"
                  className="absolute text-center border p-2 w-[10pc] border-bg-black h-[3pc] z-10 bg-[#F7931A]  mt-2"
                >
                  Create virtual card
                </Link>
                <div className="absolute w-[10pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading section*/}
      <section className="py-2">
        <div className="bg-[#D1D0D0] px-12">
          <div className="flex flex-row h-[540px] justify-between items-center">
            <div className="relative">
              <div className="absolute w-[420px] -top-40 bg-[#767dff] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Trade crypto<div></div>
              </h1>
              <p className="py-2 font-semibold">
                Buy, sell, send and receive crypto , you can also buy or sell
                your favorite gift card with us today
              </p>
              <div className="relative">
                <Link
                  to="/product/gift-card"
                  className="absolute text-center border p-2 w-[8pc] border-bg-black h-[3pc] z-10 bg-[#47A348] mt-2"
                >
                  Start trading
                </Link>
                <div className="absolute w-[8pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create bitcoin card section*/}
      <section className="py-2 relative h-screen mt-12">
        <div className=" px-12">
          <div className="flex flex-row-reverse h-[540px] justify-between">
            <div className="flex flex-col gap-8 items-center">
              <div className="text-bg-white flex gap-4 ">
                <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                  <IoLogoGooglePlaystore />
                  Google play
                </Link>
                <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                  <FaApple />
                  App store
                </Link>
              </div>

              <div className="relative -left-[15rem]">
                <div className="absolute w-[360px] p-0 bg-[#D9D9D9] z-10 h-[520px] border border-bg-black text-center items-center justify-center font-semibold">
                  <div className="flex w-full">
                    <p className="p-2 bg-[#F7931A] w-full border border-bg-black py-4 font-bold">
                      EXCHANGE RATE
                    </p>
                    <p className="p-2 bg-[#767DFF] w-full border border-bg-black py-4 font-bold">
                      CRYPTO RATE
                    </p>
                  </div>
                  <div className="flex w-full py-2 justify-around">
                    <p className="p-2 bg-[#EB6A98] px-8 border border-bg-black py-2 font-bold">
                      BUY
                    </p>
                    <p className="p-2 bg-[#18BBFE] px-8 border border-bg-black py-2 font-bold">
                      SELL
                    </p>
                  </div>
                  <div className="py-8">
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div className="flex gap-2 items-center">
                        <FaBitcoin className="text-[#F7931A] text-2xl" />
                        <p>BTC</p>
                        <FaChevronCircleDown className="text-[#F7931A] cursor-pointer" />
                      </div>
                      <p>100.43</p>
                    </div>
                    Rate {"740"}/$
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div className="flex gap-2 items-center">
                        <FaBitcoin className="text-[#F7931A] text-2xl" />
                        <p>NGN</p>
                        <FaChevronCircleDown className="text-[#F7931A] cursor-pointer" />
                      </div>
                      <p>{"NGN 63,433.43"}</p>
                    </div>
                    <p className="p-2 items-center text-justify border mx-2 my-4 border-bg-black">
                      Exchange rates are volatile right now, so we can't
                      guarantee this rate. We'll use the rate that's live when
                      we receive your money.
                    </p>
                    <button className="border p-2 border-bg-black bg-[#47A348] mt-2">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="absolute w-[360px] left-4 top-4 bg-[#000] h-[520px] border border-bg-black"></div>
              </div>
            </div>

            <div className="text-left w-[409px] lg:w-[609] flex flex-col gap-8">
              <div className="relative border border-bg-black p-2 pl-4 pt-14 mt-8 bg-[#5FC88F]">
                <img
                  src={bitcion}
                  alt="coin"
                  className="absolute -top-16 right-8 w-32"
                />
                <h5 className="text-2xl font-bold pt-4">
                  Virtual card funding
                </h5>
                <p className="font-semibold text-left my-2">
                  You can now create and fund your virtual mastercard with
                  crypto at zero cost.
                </p>
              </div>
              <div>
                <div className="relative border border-bg-black p-2 pl-4 pt-14 mt-8 bg-[#F7931A]">
                  <img
                    src={upwork}
                    alt="coin"
                    className="absolute -top-10 left-8 w-32"
                  />
                  <img
                    src={freelancer}
                    alt="coin"
                    className="absolute -top-0 right-8 w-40"
                  />
                  <h5 className="text-2xl font-bold">
                    Receive payment from foreign employers
                  </h5>
                  <p className="font-semibold text-left my-2">
                    Freelancer, remote worker or corporate employee? Get paid
                    fast and securely!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* three phone section*/}
      <section className="py-2 pb-20">
        <div className=" px-12">
          <div className=""></div>
          
          <div className="flex flex-row gap-10">
            <div className="font-semibold text-justify">
              <h2 className="text-2xl text-center">Spend</h2>
              With our virtual master card you have no spend limit.
            </div>
            <div className="font-semibold text-justify">
              <h2 className="text-2xl text-center">Bank</h2>
              Send and receive payment anywhere in the world with your USD, GBP & EURO account.
            </div>
            <div className="font-semibold text-justify">
              <h2 className="text-2xl text-center">Trade</h2>
              Buy, sell and receive crypto also buy and sell your giftcards.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

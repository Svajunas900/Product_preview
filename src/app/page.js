import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#f2ebe3ff] flex justify-center items-center p-4">
        <section className="max-w-[38rem] h-[29rem] bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full">
            <Image
              src="/images/image-product-desktop.jpg"
              alt="product_image"
              fill
              className="object-cover hidden sm:block"
            ></Image>
            <Image
              src="/images/image-product-mobile.jpg"
              alt="product_image"
              fill
              className="object-cover block sm:hidden"
            ></Image>
          </div>
          <div className="p-8 w-full lg:w-1/2 h-1/2 lg:h-full">
            <h2
              className={`${montserrat.className} text-[1rem] pb-4 tracking-[0.2rem] uppercase`}
            >
              Perfume
            </h2>
            <h1
              className={`${fraunces.className} text-[2rem] font-bold leading-none pb-6`}
            >
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className={`${montserrat.className} text-[1rem] pb-4`}>
              {" "}
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>{" "}
            <div className="flex items-center pb-6">
              <h1
                className={`${fraunces.className} text-[2rem] text-[#3c8067ff] font-semibold pr-6`}
              >
                $149.99
              </h1>
              <h3 className={`${fraunces.className} text-[1rem]`}>$169.99</h3>
            </div>
            <a
              className={`${montserrat.className} block w-full h-[2.5rem] bg-[#3c8067ff] flex justify-center items-center rounded-lg text-white text-[12px] hover:bg-[#1b4133ff] cursor-pointer`}
            >
              <Image
                src="/images/icon-cart.svg"
                alt="cart"
                width={14}
                height={14}
                className="mr-2"
              ></Image>
              Add to Cart
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

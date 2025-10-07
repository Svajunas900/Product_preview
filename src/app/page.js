import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#f2ebe3ff] flex justify-center items-center p-4">
        <section className="max-w-[38rem] bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 h-128 lg:h-auto">
            <Image
              src="/images/image-product-desktop.jpg"
              alt="product_image"
              fill
              className="object-cover hidden lg:block"
            />
            <Image
              src="/images/image-product-mobile.jpg"
              alt="product_image"
              fill
              className="object-cover block lg:hidden"
            />
          </div>
          <div className="p-8 w-full lg:w-1/2 flex flex-col justify-center">
            <h2
              className={`${montserrat.className} text-[14px] pb-4 tracking-[0.2rem] uppercase`}
            >
              Perfume
            </h2>
            <h1
              className={`${fraunces.className} text-[32px] font-bold leading-none pb-6`}
            >
              Gabrielle Essence Eau De Parfum
            </h1>
            <p
              className={`${montserrat.className} text-[14px] pb-4 leading-relaxed`}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center pb-6">
              <h1
                className={`${fraunces.className} text-[32px] text-[#3c8067ff] font-semibold pr-6`}
              >
                $149.99
              </h1>
              <h2 className={`${fraunces.className} text-[14px] line-through`}>
                $169.99
              </h2>
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
              />
              Add to Cart
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

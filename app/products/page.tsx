"use client";

import ProductBanner from "@/public/product-banner.png";
import Image3 from "@/public/image-3.png";
import Icon1 from "@/public/icon-1.png";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  type ProductCardProps = {
    number: string;
    icon: JSX.Element;
    title: string;
  };
  const productCards: ProductCardProps[] = [
    {
      number: "01",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "02",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "03",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "04",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "05",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "06",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "07",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "08",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
    {
      number: "09",
      icon: <Image src={Icon1} alt="icon-1" width={74} height={52} />,
      title: " Investment Advantage",
    },
  ];
  return (
    <>
      <main className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 p-5 px-10">
        <div className="flex flex-col justify-start items-center">
          <h1>
            <p className="text-7xl font-bold">Way Point </p>
            <span className="text-5xl font-bold">Warranty </span>
            <span className="text-5xl font-bold text-blue">Products</span>
          </h1>
          <div className="bg-lightBlue items-end lg:w-[500px] p-6 rounded-xl my-8 flex justify-start lg:items-start flex-col">
            <p className="pr-20">
              Total Warranty Services specializes in customized service
              contracts, protection and maintenance plans, and a wide range of
              ancillary products to meet your customers’ needs. We can provide
              almost any variation of these products, which are tried-and-true
              marketing tools that can help boost your bottom line.Our goal was
              to transform the automotive consumer experience by enhancing
              products and creating a roadmap for what's next.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="bg-blue text-primaryText text-sm px-5 py-4 rounded-full mt-4"
            >
              View Products
            </button>
          </div>
        </div>
        <div className="relative w-[90vw] lg:w-[50vw] h-[60vh] p-10 ">
          <div>
            <Image
              src={Image3}
              alt="Car Image"
              className="object-cover h-[50vh]"
            />
          </div>
          <svg
            width="29"
            height="45"
            viewBox="0 0 29 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <path
              d="M0.000125885 16.2792L28.1965 6.41938e-05L16.2793 44.4756L0.000125885 16.2792Z"
              fill="#4D9CFF"
            />
          </svg>
          <svg
            width="30"
            height="38"
            viewBox="0 0 30 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0"
          >
            <path
              d="M29.371 29.6067L0.393245 37.3713L21.6064 0.628906L29.371 29.6067Z"
              fill="#4D9CFF"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0"
          >
            <path d="M0 40H40L0 0V40Z" fill="#4D9CFF" />
          </svg>
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0"
          >
            <path d="M72 72H0L72 0V72Z" fill="#4D9CFF" />
          </svg>
        </div>
      </main>
      <section className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={ProductBanner}
          alt="Product Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] opacity-35"></div>
        <div className="container z-[3] flex h-full items-center text-center flex-col text-primaryText px-4 pt-11">
          <h1 className="md:text-5xl text-4xl lg:text-7xl font-semibold">
            Products
          </h1>
        </div>
      </section>
      <section className="bg-secondaryBg flex justify-center items-center py-5 px-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:col-span-1 md:gap-x-16 lg:gap-x-10 lg:gap-y-10 md:gap-y-6 gap-y-5 lg:col-span-1 my-12">
          {productCards.map((product: ProductCardProps, index: number) => (
            <ProductCard
              key={index}
              number={product.number}
              icon={product.icon}
              title={product.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

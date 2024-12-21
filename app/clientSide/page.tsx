"use client"

import NavBar from "../component/NavBar";
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { IoIosStar } from "react-icons/io";

type Data = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}
const Page = () => {
    const [data, setData] = useState<Data[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        const fetchData = async () => {
            const url = await fetch("https://fakestoreapi.com/products")
            const parsedData: Data[] = await url.json()
            setData(parsedData)
        }
        fetchData()
    }, [])

    return (
        <div>
            <NavBar />
            {loading ? (
                <div className="h-screen flex flex-col items-center justify-center px-[20px] sm:px-[0px]">
                    <div className="w-[80px] h-[80px] border-t-[10px] border-t-[gray] border-[10px] border-[lightgray] mt-[15px] animate-spin rounded-[50%]"></div>
                    <h1 className="text-[25px] mt-[15px]">Loading...</h1>
                </div>
            ) : (
                <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
                    <h1 className="mb-[40px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-[700] text-[#1e3a8a]">CLIENT SIDE DATA FETCHING</h1>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((products, index) => (
                            <div key={index} className="w-full bg-[white] shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition-all">
                                <div className="h-[180px]">
                                    <Image src={products.image} alt={products.title} width={100} height={100} className="size-[180px] mx-auto"></Image>
                                </div>
                                <p className="mt-[50px] mb-[8px] text-[gray] capitalize">{products.category}</p>
                                <p className="font-bold text-[20px] mb-[8px]">{products.title}</p>
                                <p className="line-clamp-2 text-[gray] mb-[8px]">{products.description}</p>
                                <p className="text-[20px] font-semibold mb-[8px]">${products.price}</p>
                                <p className="text-[orange] text-[18px] flex items-center mb-[10px]"><IoIosStar className="text-[23px] mr-[5px]" /><span className="mr-[5px]">{products.rating.rate}</span>({products.rating.count} reviews)</p>
                                <div className="flex items-center justify-end">
                                    <button className="py-[7px] px-[12px] bg-[#0056b3] text-[white] rounded-[30px] hover:bg-[darkgreen] text-[17px]">Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page
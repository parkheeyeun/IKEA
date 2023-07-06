import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    useEffect(() => {
        document.title = "메뉴"
    }, [])

    return (
        <>
        <h1 className="text-center text-4xl font-semibold">카테고리</h1>
            <div className="grid gap-4 m-4 grid-cols-2 lg:grid-cols-3 md:grid-cols-6">
                <Link to="/st1">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/images/platsa-ae04386d8804870b67b5c0eea71f0768.jpg?f=m" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">수납/정리</p>
                </div>
                </Link>
                <Link to="/st2">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/ext/ingkadam/m/365b7033ded6e3fd/original/PE842159-crop001.jpg?f=l" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">침대/매트릭스</p>
                </div>
                </Link>
                <Link to="/st3">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/ext/ingkadam/m/3f0c3505388a117f/original/PH193342-crop001.jpg?f=xs" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">주방가구</p>
                </div>
                </Link>
                <Link to="/st4">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/ext/ingkadam/m/420032c86818ef16/original/PH172449.jpg?f=xs" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">욕실</p>
                </div>
                </Link>
                <Link to="/st5">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/images/-05a29f3344522a1008e5ea9f1330e05a.jpg?f=xs" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">세탁/청소</p>
                </div>
                </Link>
                <Link to="/st6">
                <div className="">
                    <img
                        className="object-fit h-[280px] w-full rounded-t"
                        src="https://www.ikea.com/images/bekant-jaervfjaellet-lack-7922294a1df4c37894da8cdac5a1b4ee.jpg?f=xs" />
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">홈오피스</p>
                </div>
                </Link>
                <div className="h-20"></div>
            </div>
        </>
    )

}
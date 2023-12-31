import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarCount from "./Star";

const Item = [
    { id: 1, title: "KLEPPSTAD 클렙스타드", price: "￦189000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s5.jpg?f=s" },
    { id: 2, title: "LINNMON 린몬 / ADILS 아딜스", price: "￦45000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs" },
    { id: 3, title: "RÅSKOG 로스코그", price: "￦39900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/utespelare-gaming-desk-black__0985179_pe816538_s5.jpg?f=s" },
    { id: 4, title: "UTESPELARE 우테스펠라레", price: "￦169000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/raskog-trolley-white__0503386_pe632627_s5.jpg?f=s" },
    { id: 5, title: "DJUNGELSKOG 융엘스코그", price: "￦12900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/djungelskog-soft-toy-orangutan__0710167_pe727369_s5.jpg?f=s" }
]

export default function Menu() {

    const { id } = useParams()
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))
    const product = Item.find(product => product.id == id)

    function addCart(id, title, price, count, src) {
        const updateCart = [...cart, { id, title, price, count, src }]
        localStorage.setItem("cart", JSON.stringify(updateCart))
        setCart(updateCart)
        setIncart(true)
        alert('장바구니에 추가되었습니다!')
    }

    const [active, setActive] = useState(false)

    function close(e) {
        if (e.target === e.currentTarget) {
            setActive(false)
        }
    }

    const modal = (
        <div
            className="inset-0 z-10 bg-black/[0.5] fixed"
            onClick={close}>
            <div className="bg-white w-1/3 h-full right-0 rounded absolute">
                <button
                    className="flex justify-end mr-4 w-full px-4 py-2 text-4xl font-semibold"
                    onClick={() => setActive(false)}>
                    &times;
                </button>
                <div className="flex flex-col m-4 p-4">
                    <h1 className="font-semibold text-2xl">제품 설명</h1>
                    <p className="mt-2">집은 가족을 보호하는 안전한 장소여야 합니다. 그래서 본 옷장 제품에는 벽 고정장치가 동봉되어 있습니다.</p>
                    <p className="mt-2">자신만의 KLEPPSTAD/클렙스타드 옷장 콤비네이션을 구성해 수납공간을 극대화하고 조화로운 외관을 만듭니다.</p>
                    <strong className="mt-2 block">디자이너
                        <span className="block text-sm mt-1">IKEA of Sweden</span></strong>
                </div>
            </div>
        </div>
    )

    const [incart, setIncart] = useState(false)

    useEffect(() =>{
        cart.forEach(item => {
            if(item.id == id){
                setIncart(true)
            }
        })
    },[])

    return (
        <>
            <div className="m-4 mt-8 w-2/3 m-auto flex">
                <img src={product.src} />
                <div className="flex flex-col ml-4">
                    <h1 className="text-2xl font-semibold">{product.title}</h1>
                    <p className="text-lg mt-2">{product.price}</p>
                    <p className="mt-2">상품평</p>
                    <StarCount />
                    <button
                        className="disabled:opacity-20 bg-[#2360a5] w-24 h-10 py-2 px-4 text-white rounded-full mt-2"
                        onClick={() => addCart(product.id, product.title, product.price, product.count, product.src)}
                        disabled={incart}
                    >구매하기</button>

                    <p className="mt-4">간편하고 스마트하죠! 기본 기능에 충실한 옷장이 필요할 때 사용하기 좋아요. 수납이 여전히 부족하다면 KLEPPSTAD 클렙스타드 시리즈의 다른 옷장을 추가해보세요.</p>
                    {active && modal}
                    <button
                        className="py-2 px-4 border-2 border-black w-28 mt-2"
                        onClick={() => setActive(true)}><span>제품 설명</span></button>
                </div>
            </div>
            <div className="h-20" />
        </>
    )
}

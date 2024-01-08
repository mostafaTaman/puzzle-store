"use client";

import { Button } from "../ui/button";
import Currency from "./Currency";
import { Product } from "@/types/store";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
    const onAddToCart = () => { };

    return (
        <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Size:</h3>
                    <div>
                        {data?.size?.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
};

export default ProductInfo;
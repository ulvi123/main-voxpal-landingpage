import { Metadata } from "next"
import { Inter } from "next/font/google"
import ProductList from "@/components/store/ProductList"



export default function Store() {
  return (
    <div className="pt-32">
      <h1 className="text-3xl font-bold font-sans text-center" >Voxpal Merch store</h1>
      <ProductList/>
    </div>
  )
}
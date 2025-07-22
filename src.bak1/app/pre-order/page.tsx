
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function PreOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/sparrow.png"
              alt="Sparrow Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">Sparrow</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Secure Your Sparrow Controller
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-12 bg-white p-8 rounded-lg shadow-lg">
          {/* Product Image and Info */}
          <div className="md:w-1/2">
            <Image
              src="/placeholder-product.png" // Use the same product image as on the main page
              alt="Sparrow Irrigation Controller"
              width={600}
              height={400}
              className="rounded-lg shadow-md mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sparrow Irrigation Controller
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              The ultimate smart irrigation solution for a greener, more efficient landscape.
            </p>
            {/* Detailed Tier Features/Comparison can go here if needed */}
          </div>

          {/* Pre-order Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Select Your Tier
                </label>
                <div className="flex flex-col space-y-3">
                  <label className="inline-flex items-center">
                    <input type="radio" name="tier" value="basic" className="form-radio h-5 w-5 text-blue-600" defaultChecked />
                    <span className="ml-2 text-gray-700 text-lg">Basic Tier ($199)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="tier" value="pro" className="form-radio h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700 text-lg">Pro Tier ($349)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="tier" value="elite" className="form-radio h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700 text-lg">Elite Tier ($599)</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-lg font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <Input type="number" id="quantity" defaultValue={1} min={1} className="w-24 p-3 border border-gray-300 rounded-md" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Shipping Information</h3>
              <div>
                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input type="text" id="fullName" placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="address1" className="block text-lg font-medium text-gray-700 mb-2">
                  Address Line 1
                </label>
                <Input type="text" id="address1" placeholder="123 Main St" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="address2" className="block text-lg font-medium text-gray-700 mb-2">
                  Address Line 2 (Optional)
                </label>
                <Input type="text" id="address2" placeholder="Apartment, Suite, etc." className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-lg font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <Input type="text" id="city" placeholder="Cairo" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-lg font-medium text-gray-700 mb-2">
                    State/Province
                  </label>
                  <Input type="text" id="state" placeholder="Giza" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-lg font-medium text-gray-700 mb-2">
                    Zip/Postal Code
                  </label>
                  <Input type="text" id="zip" placeholder="12345" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-lg font-medium text-gray-700 mb-2">
                  Country
                </label>
                <Input type="text" id="country" defaultValue="Egypt" readOnly className="w-full p-3 border border-gray-300 rounded-md bg-gray-100" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Payment Information</h3>
              <div>
                <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <Input type="text" id="cardNumber" placeholder="**** **** **** ****" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-lg font-medium text-gray-700 mb-2">
                    Expiry (MM/YY)
                  </label>
                  <Input type="text" id="expiry" placeholder="12/25" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-lg font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <Input type="text" id="cvv" placeholder="123" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="form-checkbox h-5 w-5 text-blue-600" />
                <label htmlFor="terms" className="ml-2 text-gray-700 text-base">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">pre-order terms and conditions</a>.
                </label>
              </div>

              <Button type="submit" className="w-full px-8 py-4 text-xl mt-6">
                Complete Pre-order
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

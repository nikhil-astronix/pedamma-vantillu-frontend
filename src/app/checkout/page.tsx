"use client";
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { FiChevronDown, FiLock, FiInfo } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

export default function CheckoutPage() {
    const { cart, subtotal, totalItems } = useCart();
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        country: 'India',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: 'Telangana',
        pincode: '',
        phone: '',
    });
    const [billingAddress, setBillingAddress] = useState('same');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (totalItems === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/shop">
                    <a className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors">
                        Continue Shopping
                    </a>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50">
             <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href="/">
                        <a>
                           <Image src="/images/logo2.png" alt="Peddamma Pickles" width={150} height={40} objectFit="contain" />
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a className="text-gray-600 hover:text-gray-800 flex items-center">
                            <FaShoppingCart size={20} />
                            <span className="ml-2 text-sm">Return to cart</span>
                        </a>
                    </Link>
                </div>
            </header>
            <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                <div className="lg:col-span-1">
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-medium text-gray-900">Contact</h2>
                                <p className="text-sm">
                                    Already have an account?{' '}
                                    <a href="#" className="text-yellow-600 hover:text-yellow-500">Log in</a>
                                </p>
                            </div>
                            <div className="mt-4">
                                <input 
                                    type="email" 
                                    placeholder="Email or mobile phone number" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="flex items-center mt-2">
                                    <input type="checkbox" id="whatsapp" className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" />
                                    <label htmlFor="whatsapp" className="ml-2 text-sm text-gray-700">Get order updates on WhatsApp</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Delivery</h2>
                            <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                                <div className="sm:col-span-2">
                                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-yellow-500 focus:border-yellow-500">
                                        <option>India</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" name="firstName" placeholder="First name (optional)" value={formData.firstName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div>
                                    <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div className="sm:col-span-2">
                                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div className="sm:col-span-2">
                                    <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div>
                                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div>
                                    <select name="state" value={formData.state} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-yellow-500 focus:border-yellow-500">
                                        <option>Telangana</option>
                                        {/* Add other states */}
                                    </select>
                                </div>
                                <div>
                                     <input type="text" name="pincode" placeholder="PIN code" value={formData.pincode} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div className="sm:col-span-2">
                                    <input type="text" name="phone" placeholder="Phone number for order updates" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                                </div>
                                <div className="sm:col-span-2 flex items-center">
                                    <input type="checkbox" id="save-info" className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" />
                                    <label htmlFor="save-info" className="ml-2 text-sm text-gray-700">Save this information for next time</label>
                                </div>
                            </div>
                        </div>

                         <div>
                            <h2 className="text-lg font-medium text-gray-900">Shipping method</h2>
                             <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-600">
                                Enter your shipping address to view available shipping methods.
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lg:col-span-1 pt-10 lg:pt-0">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Order summary</h3>
                        <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                            {cart.map(item => (
                                <div key={`${item.id}-${item.weight}`} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="relative">
                                            <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover border" />
                                            <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">{item.quantity}</span>
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.weight} gms</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-sm text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 my-4 pt-4">
                            <div className="flex items-center space-x-2">
                                <input type="text" placeholder="Discount code" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-sm" />
                                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 text-sm font-medium">Apply</button>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 my-4 pt-4 space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-gray-500">Enter shipping address</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 my-4 pt-4 flex justify-between font-bold text-lg">
                            <span className="text-gray-900">Total</span>
                            <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-start-1 lg:col-span-1 mt-10">
                    <div className="space-y-8">
                         <div>
                            <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                             <p className="text-sm text-gray-500 mt-1">All transactions are secure and encrypted.</p>
                            <div className="mt-4 border border-gray-200 rounded-lg">
                                <div className="p-4 bg-white rounded-t-lg border-b border-gray-200 flex justify-between items-center">
                                    <span className="font-semibold text-sm">PhonePe Payment Gateway (UPI, Cards & NetBanking)</span>
                                    {/* Add payment method logos here */}
                                </div>
                                <div className="p-8 bg-gray-50 text-center space-y-4 rounded-b-lg">
                                    <Image src="/window.svg" alt="Redirect" width={100} height={50} />
                                    <p className="text-sm text-gray-600">After clicking "Pay now", you will be redirected to PhonePe Payment Gateway (UPI, Cards & NetBanking) to complete your purchase securely.</p>
                                </div>
                            </div>
                        </div>

                         <div>
                            <h2 className="text-lg font-medium text-gray-900">Billing address</h2>
                             <p className="text-sm text-gray-500 mt-1">Select the address that matches your card or payment method.</p>
                             <div className="mt-4 border border-gray-200 rounded-lg bg-white">
                                 <div className={`p-4 border-b border-gray-200 flex items-center ${billingAddress === 'same' ? 'bg-yellow-50 border-yellow-200' : ''}`}>
                                     <input type="radio" id="same-address" name="billing" value="same" checked={billingAddress === 'same'} onChange={e => setBillingAddress(e.target.value)} className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300" />
                                     <label htmlFor="same-address" className="ml-3 block text-sm font-medium text-gray-800">Same as shipping address</label>
                                 </div>
                                 <div className={`p-4 flex items-center ${billingAddress === 'different' ? 'bg-yellow-50 border-yellow-200' : ''}`}>
                                     <input type="radio" id="different-address" name="billing" value="different" checked={billingAddress === 'different'} onChange={e => setBillingAddress(e.target.value)} className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300" />
                                     <label htmlFor="different-address" className="ml-3 block text-sm font-medium text-gray-800">Use a different billing address</label>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
                 <div className="lg:col-start-1 lg:col-span-1 mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                    <Link href="/shop">
                        <a className="text-yellow-600 hover:text-yellow-500 text-sm font-medium">&lt; Return to shop</a>
                    </Link>
                    <button className="bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors">
                        Pay now
                    </button>
                </div>
            </main>
             <footer className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 border-t border-gray-200 flex space-x-4">
                 <a href="#" className="hover:underline">Refund policy</a>
                 <a href="#" className="hover:underline">Shipping policy</a>
                 <a href="#" className="hover:underline">Privacy policy</a>
                 <a href="#" className="hover:underline">Terms of service</a>
             </footer>
        </div>
    );
} 
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ready to Upgrade Your Garden?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Pre-order your Sparrow controller today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+20 100 123 4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">hello@sparrow-eg.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">
                  123 Smart City Road<br />
                  6th of October City, Giza<br />
                  Egypt
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
                <p className="text-gray-600">
                  Sunday - Thursday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                required
                placeholder="+20 100 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Controller Model *
              </label>
              <Select
                value={formData.model}
                onValueChange={(value) => setFormData({...formData, model: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Sparrow Basic - 2 Stations</SelectItem>
                  <SelectItem value="pro">Sparrow Pro - 4 Stations</SelectItem>
                  <SelectItem value="elite">Sparrow Elite - 8 Stations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <Textarea
                placeholder="Tell us about your garden or any special requirements"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Pre-Order Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
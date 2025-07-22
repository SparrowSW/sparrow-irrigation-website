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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Upgrade Your Garden?
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Pre-order your Sparrow controller today
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+20 100 123 4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@sparrow-eg.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">
                    123 Smart City Road<br />
                    6th of October City, Giza<br />
                    Egypt
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Sunday - Thursday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="glass-card rounded-2xl p-8 h-96 w-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/50 rounded-lg mx-auto mb-4"></div>
                <p className="text-muted-foreground">Map/Location Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
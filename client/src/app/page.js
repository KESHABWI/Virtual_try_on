"use client";

import { useState, useRef } from "react";
import { Upload, Crop, Link2, ImageIcon, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Shirt,
  Camera,
  History,
  Zap,

} from "lucide-react";

export default function VirtualTryOn() {
    const [activeTab, setActiveTab] = useState("try-on");

  const [autoMask, setAutoMask] = useState(false);
  const [autoCrop, setAutoCrop] = useState(false);
  const [humanImage, setHumanImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [garmentDescription, setGarmentDescription] = useState("");
  const humanInputRef = useRef(null);
  const garmentInputRef = useRef(null);
  const [result, setResult] = useState(null);
  // Separate indices for human and garment examples
  const [humanExampleIndex, setHumanExampleIndex] = useState(0);
  const [garmentExampleIndex, setGarmentExampleIndex] = useState(0);

  const humanExamples = [
    "/00013_00.jpg?height=150&width=120",
    "/00008_00.jpg?height=150&width=120",
    "/00057_00.jpg?height=150&width=120",
    "/00055_00.jpg?height=150&width=120",
    "/00064_00.jpg?height=150&width=120",
    "/00035_00.jpg?height=150&width=120",
    "/00013_00.jpg?height=150&width=120",
    "/00008_00.jpg?height=150&width=120",
    "/00057_00.jpg?height=150&width=120",
    "/00055_00.jpg?height=150&width=120",
    "/00064_00.jpg?height=150&width=120",
    "/00035_00.jpg?height=150&width=120",
  ];

  const garmentExamples = [
    "/00067_00.jpg?height=150&width=120",
    "/00069_00.jpg?height=150&width=120",
    "/00071_00.jpg?height=150&width=120",
    "/00074_00.jpg?height=150&width=120",
    "/00067_00.jpg?height=150&width=120",
    "/00069_00.jpg?height=150&width=120",
    "/00071_00.jpg?height=150&width=120",
    "/00074_00.jpg?height=150&width=120",
  ];

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event, setImage) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = () => {
    // Simulating the try-on process
    setResult(garmentImage);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      {/* Navbar */}

      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shirt className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold tracking-tight">
              VIRTUAL FIT
            </span>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-white/90 transition hover:text-indigo-400"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/70 transition hover:text-indigo-400"
            >
              My Wardrobe
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/70 transition hover:text-indigo-400"
            >
              History
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/70 transition hover:text-indigo-400"
            >
              About
            </a>
          </nav>
          <Button
            variant="outline"
            className="hidden border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 md:flex"
          >
            Sign In
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Cool Virtual Try On title */}

          <section className="container mx-auto px-4 text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-indigo-400">Virtual</span> Fitting Room
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Experience the future of fashion with AI-powered virtual try-on
              technology
            </p>
            <Tabs
              defaultValue="try-on"
              className="mx-auto max-w-5xl"
              onValueChange={setActiveTab}
            >
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-slate-800/50">
                <TabsTrigger
                  value="try-on"
                  className="data-[state=active]:bg-slate-700"
                >
                  Try On
                </TabsTrigger>
                <TabsTrigger
                  value="wardrobe"
                  className="data-[state=active]:bg-slate-700"
                >
                  My Wardrobe
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-slate-700"
                >
                  History
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </section>


          {/* Rest of your component code goes here */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Human Upload Section */}
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-medium text-slate-400 ">
                    Human Images
                  </h2>
                </div>

                <div
                  className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center"
                  onDrop={(e) => handleDrop(e, setHumanImage)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {humanImage ? (
                    <img
                      src={humanImage || "/placeholder.svg"}
                      alt="Uploaded human"
                      className="max-w-full h-auto"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-slate-400" />
                      <p className="text-sm text-slate-400">Upload an image</p>
                      <p className="text-sm text-slate-400">or</p>
                      <p className="text-sm text-slate-400">
                        select the draw tool to start
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setHumanImage)}
                        className="hidden"
                        ref={humanInputRef}
                      />
                      <Button
                        variant="outline"
                        onClick={() => humanInputRef.current.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <Tabs defaultValue="examples">
                    <TabsList className="bg-slate-700">
                      <TabsTrigger value="examples">Examples</TabsTrigger>
                    </TabsList>
                    <TabsContent value="examples">
                      <div className="mt-2">
                        <Slider
                          min={0}
                          max={humanExamples.length - 4}
                          step={1}
                          value={[humanExampleIndex]}
                          onValueChange={(value) =>
                            setHumanExampleIndex(value[0])
                          }
                        />
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {humanExamples
                            .slice(humanExampleIndex, humanExampleIndex + 4)
                            .map((src, i) => (
                              <img
                                key={i}
                                src={src || "/placeholder.svg"}
                                alt={`Human example ${i + 1}`}
                                className="w-full aspect-[3/4] object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"
                                onClick={() => setHumanImage(src)}
                              />
                            ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </Card>

            {/* Garment Upload Section */}
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-4">
                <h2 className="text-sm font-medium mb-4 text-slate-400 ">
                  Garment
                </h2>
                <div
                  className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center"
                  onDrop={(e) => handleDrop(e, setGarmentImage)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {garmentImage ? (
                    <img
                      src={garmentImage || "/placeholder.svg"}
                      alt="Uploaded garment"
                      className="max-w-full h-auto"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-slate-400" />
                      <p className="text-sm text-slate-400">Drop Image Here</p>
                      <p className="text-sm text-slate-400">- or -</p>
                      <p className="text-sm text-slate-400">Click to Upload</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setGarmentImage)}
                        className="hidden"
                        ref={garmentInputRef}
                      />
                      <Button
                        variant="outline"
                        onClick={() => garmentInputRef.current.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>

                <Tabs defaultValue="examples" className="mt-4">
                  <TabsList className="bg-slate-700">
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent value="examples">
                    <div className="mt-2">
                      <Slider
                        min={0}
                        max={garmentExamples.length - 4}
                        step={1}
                        value={[garmentExampleIndex]}
                        onValueChange={(value) =>
                          setGarmentExampleIndex(value[0])
                        }
                      />
                      <div className="grid grid-cols-4 gap-2 mt-2">
                        {garmentExamples
                          .slice(garmentExampleIndex, garmentExampleIndex + 4)
                          .map((src, i) => (
                            <img
                              key={i}
                              src={src || "/placeholder.svg"}
                              alt={`Garment example ${i + 1}`}
                              className="w-full aspect-[3/4] object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"
                              onClick={() => setGarmentImage(src)}
                            />
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-4">
                <div className="relative">
                  <textarea
                    value={garmentDescription}
                    onChange={(e) => setGarmentDescription(e.target.value)}
                    placeholder="Description of garment ex) Short Sleeve Round Neck T-shirts"
                    className="w-full min-h-[60px] bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/20 transition-all duration-200 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.05)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-b from-purple-500/5 to-transparent" />
                </div>
              </div>
            </Card>

            {/* Output Section */}
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-4">
                <h2 className="text-sm font-medium mb-4 text-slate-400 ">
                  Masked Image output
                </h2>
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center min-h-[300px] flex flex-col items-center justify-center">
                  {result ? (
                    <img
                      src={result || "/placeholder.svg"}
                      alt="Masked output"
                      className="max-w-full h-auto mb-4"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-slate-400 mb-4" />
                  )}
                  <Button
                    onClick={handleTryOn}
                    disabled={!humanImage || !garmentImage}
                    className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
                      !humanImage || !garmentImage
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:scale-105"
                    }`}
                  >
                    Try On
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-800 bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Shirt className="h-6 w-6 text-indigo-400" />
              <span className="text-lg font-bold">VIRTUAL FIT</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-indigo-400">
                Terms
              </a>
              <a href="#" className="hover:text-indigo-400">
                Privacy
              </a>
              <a href="#" className="hover:text-indigo-400">
                Contact
              </a>
            </div>
            <div className="text-sm text-slate-500">
              © 2025 Virtual Fit. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { Upload, Crop, Link2, ImageIcon, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

export default function VirtualTryOn() {
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
      <nav className="bg-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-all">
            👗🤖 VIRTUAL TRY ON ༄*
            <span className="text-purple-300 animate-pulse">⤷</span>
          </div>{" "}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-300">
              Home
            </a>
            <a href="#" className="hover:text-slate-300">
              About
            </a>
            <a href="#" className="hover:text-slate-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Cool Virtual Try On title */}
          <div className="text-center mb-8">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-all">
              TRY YOUR CLOTHES
              <span className="text-purple-300 animate-pulse">⤷</span>
            </div>{" "}
            <p className="text-slate-400 flex items-center justify-center">
              Experience the future of fashion{" "}
              <Sparkles className="ml-2 h-5 w-5" />
            </p>
          </div>

          <div className="text-sm breadcrumbs">
            <span>Transform your look with AI-powered virtual fitting.</span>
          </div>

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

      {/* Footer */}
      <footer className="bg-slate-800 p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          © 2023 FashionAI. All rights reserved. | Powered by AI magic ✨
        </div>
      </footer>
    </div>
  );
}

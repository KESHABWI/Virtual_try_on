"use client";

import { useState, useRef } from "react";
import { Upload, Crop, Link2, ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VirtualTryOn() {
  const [autoMask, setAutoMask] = useState(false);
  const [autoCrop, setAutoCrop] = useState(false);
  const [humanImage, setHumanImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [garmentDescription, setGarmentDescription] = useState("");
  const humanInputRef = useRef(null);
  const garmentInputRef = useRef(null);

  const humanExamples = [
    "/nab.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
  ];

  const garmentExamples = [
    "/00017_00.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
    "/nab.jpg?height=150&width=120",
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

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-sm breadcrumbs">
          <span>Virtual Try-on with your image and garment image.</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Human Upload Section */}
          <Card className="bg-slate-800 border-slate-700">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium">
                  Human. Mask with pen or use auto-masking
                </h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Crop className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
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
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="auto-mask"
                    checked={autoMask}
                    onCheckedChange={(checked) => setAutoMask(Boolean(checked))}
                  />
                  <label htmlFor="auto-mask" className="text-sm">
                    Use auto-generated mask (Takes 5 seconds)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="auto-crop"
                    checked={autoCrop}
                    onCheckedChange={(checked) => setAutoCrop(Boolean(checked))}
                  />
                  <label htmlFor="auto-crop" className="text-sm">
                    Use auto-crop & resizing
                  </label>
                </div>

                <Tabs defaultValue="examples">
                  <TabsList className="bg-slate-700">
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent value="examples">
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {humanExamples.map((src, i) => (
                        <img
                          key={i}
                          src={src || "/placeholder.svg"}
                          alt={`Human example ${i + 1}`}
                          className="w-full aspect-[3/4] object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"
                          onClick={() => setHumanImage(src)}
                        />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Card>

          {/* Garment Upload Section */}
          <Card className="bg-slate-800 border-slate-700">
            <div className="p-4">
              <h2 className="text-sm font-medium mb-4">Garment</h2>
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

              {/* <Textarea
                placeholder="Description of garment ex) Short Sleeve Round Neck T-shirts"
                className="mt-4 bg-slate-700 border-slate-600"
                value={garmentDescription}
                onChange={(e) => setGarmentDescription(e.target.value)}
              /> */}

              <Tabs defaultValue="examples" className="mt-4">
                <TabsList className="bg-slate-700">
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                <TabsContent value="examples">
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {garmentExamples.map((src, i) => (
                      <img
                        key={i}
                        src={src || "/placeholder.svg"}
                        alt={`Garment example ${i + 1}`}
                        className="w-full aspect-[3/4] object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"
                        onClick={() => setGarmentImage(src)}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="bg-slate-800 border-slate-700">
            <div className="p-4">
              <h2 className="text-sm font-medium mb-4">Masked Image output</h2>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center min-h-[300px] flex items-center justify-center">
                {humanImage && garmentImage ? (
                  <img
                    src={garmentImage || "/placeholder.svg"}
                    alt="Masked output"
                    className="max-w-full h-auto"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

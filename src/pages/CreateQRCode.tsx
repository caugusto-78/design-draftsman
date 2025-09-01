import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeft, FileText, Camera, Utensils, Gamepad2, Play, Smartphone, DollarSign, Share2, Zap, Facebook, Instagram, Linkedin, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const CreateQRCode = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [selectedSubtype, setSelectedSubtype] = useState("");
  const [selectedSubSubtype, setSelectedSubSubtype] = useState("");
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // Animation states
  const [subtypeVisible, setSubtypeVisible] = useState(false);
  const [subtypeAnimating, setSubtypeAnimating] = useState(false);
  const [subSubtypeVisible, setSubSubtypeVisible] = useState(false);
  const [subSubtypeAnimating, setSubSubtypeAnimating] = useState(false);
  const [formFieldsVisible, setFormFieldsVisible] = useState(false);
  const [formFieldsAnimating, setFormFieldsAnimating] = useState(false);

  const contentTypes = [
    {
      id: "augment-reality",
      name: "Augment Reality", 
      icon: Zap,
      subtypes: null
    },
    {
      id: "document",
      name: "Document",
      icon: FileText,
      subtypes: ["Any File", "Article Post", "Microsite", "PDF"]
    },
    {
      id: "restaurant-menu",
      name: "Restaurant Menu",
      icon: Utensils,
      subtypes: null
    },
    {
      id: "game", 
      name: "Game",
      icon: Gamepad2,
      subtypes: null
    },
    {
      id: "media",
      name: "Media",
      icon: Camera,
      subtypes: ["Host", "Link"]
    },
    {
      id: "mobile-experience",
      name: "Mobile Experience",
      icon: Smartphone,
      subtypes: ["Business card", "Channel"]
    },
    {
      id: "other",
      name: "Other",
      icon: Play,
      subtypes: ["Data collector", "Point System", "Web Based", "Website URL"]
    },
    {
      id: "pay",
      name: "Pay", 
      icon: DollarSign,
      subtypes: ["Payment machine", "Voucher Check"]
    },
    {
      id: "social-networks",
      name: "Social Networks",
      icon: Share2,
      subtypes: ["Facebook", "Instagram", "LinkedIn", "Pinterest", "TikTok", "X", "WhatsApp", "YouTube"]
    }
  ];

  const mediaSubSubtypes = {
    "Host": ["MP3", "Video"],
    "Link": ["MP3", "Video", "Podcast"]
  };

  const socialNetworkIcons: Record<string, any> = {
    "Facebook": Facebook,
    "Instagram": Instagram,
    "LinkedIn": Linkedin,
    "Pinterest": Share2,
    "TikTok": Share2,
    "X": Share2,
    "WhatsApp": Share2,
    "YouTube": Play
  };

  const handleTypeChange = (typeId: string) => {
    // Force animation reset for all subsequent sections with delay to ensure visibility
    setSubtypeAnimating(true);
    setSubSubtypeAnimating(true);
    setFormFieldsAnimating(true);
    
    setTimeout(() => {
      setSubtypeVisible(false);
      setSubSubtypeVisible(false);
      setFormFieldsVisible(false);
      
      setSelectedType(typeId);
      setSelectedSubtype("");
      setSelectedSubSubtype("");
      setFormData({});
      
      setTimeout(() => {
        setSubtypeAnimating(false);
        setSubSubtypeAnimating(false);
        setFormFieldsAnimating(false);
      }, 100);
    }, 50);
  };

  const handleSubtypeChange = (subtype: string) => {
    // Force animation reset for subsequent sections with delay to ensure visibility
    setSubSubtypeAnimating(true);
    setFormFieldsAnimating(true);
    
    setTimeout(() => {
      setSubSubtypeVisible(false);
      setFormFieldsVisible(false);
      
      setSelectedSubtype(subtype);
      setSelectedSubSubtype("");
      setFormData({});
      
      setTimeout(() => {
        setSubSubtypeAnimating(false);
        setFormFieldsAnimating(false);
      }, 100);
    }, 50);
  };

  const handleSubSubtypeChange = (subSubtype: string) => {
    // Force animation reset for form fields with delay to ensure visibility
    setFormFieldsAnimating(true);
    
    setTimeout(() => {
      setFormFieldsVisible(false);
      
      setSelectedSubSubtype(subSubtype);
      setFormData({});
      
      setTimeout(() => {
        setFormFieldsAnimating(false);
      }, 100);
    }, 50);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Variables for conditions
  const currentType = contentTypes.find(t => t.id === selectedType);
  const showSubtypeSelector = currentType?.subtypes && selectedType;
  const showSubSubtypeSelector = selectedType === "media" && selectedSubtype && mediaSubSubtypes[selectedSubtype as keyof typeof mediaSubSubtypes];
  const showFormFields = selectedType && (!currentType?.subtypes || selectedSubtype) && (!showSubSubtypeSelector || selectedSubSubtype);

  // Animation functions
  const animateSection = (
    setVisible: (value: boolean) => void,
    setAnimating: (value: boolean) => void,
    shouldShow: boolean
  ) => {
    if (shouldShow) {
      setAnimating(true);
      setTimeout(() => {
        setVisible(true);
        setTimeout(() => setAnimating(false), 600);
      }, 100);
    } else {
      if (setVisible === setSubtypeVisible && subtypeVisible) {
        setAnimating(true);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => setAnimating(false), 600);
        }, 100);
      } else if (setVisible === setSubSubtypeVisible && subSubtypeVisible) {
        setAnimating(true);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => setAnimating(false), 600);
        }, 100);
      } else if (setVisible === setFormFieldsVisible && formFieldsVisible) {
        setAnimating(true);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => setAnimating(false), 600);
        }, 100);
      }
    }
  };

  // Effect for subtype section animation
  useEffect(() => {
    const shouldShowSubtype = !!(currentType?.subtypes && selectedType);
    
    if (shouldShowSubtype && !subtypeVisible) {
      // Show with slide down
      animateSection(setSubtypeVisible, setSubtypeAnimating, true);
    } else if (!shouldShowSubtype && subtypeVisible) {
      // Hide with slide up
      animateSection(setSubtypeVisible, setSubtypeAnimating, false);
    }
  }, [selectedType, currentType?.subtypes, subtypeVisible]);

  // Effect for sub-subtype section animation
  useEffect(() => {
    const shouldShowSubSubtype = !!(selectedType === "media" && selectedSubtype && mediaSubSubtypes[selectedSubtype as keyof typeof mediaSubSubtypes]);
    
    if (shouldShowSubSubtype && !subSubtypeVisible) {
      // Show with slide down
      animateSection(setSubSubtypeVisible, setSubSubtypeAnimating, true);
    } else if (!shouldShowSubSubtype && subSubtypeVisible) {
      // Hide with slide up  
      animateSection(setSubSubtypeVisible, setSubSubtypeAnimating, false);
    }
  }, [selectedType, selectedSubtype, subSubtypeVisible]);

  // Effect for form fields section animation
  useEffect(() => {
    const shouldShowFormFields = !!(selectedType && (!currentType?.subtypes || selectedSubtype) && (!showSubSubtypeSelector || selectedSubSubtype));
    
    if (shouldShowFormFields && !formFieldsVisible) {
      // Show with slide down
      animateSection(setFormFieldsVisible, setFormFieldsAnimating, true);
    } else if (!shouldShowFormFields && formFieldsVisible) {
      // Hide with slide up
      animateSection(setFormFieldsVisible, setFormFieldsAnimating, false);
    }
  }, [selectedType, selectedSubtype, selectedSubSubtype, currentType?.subtypes, showSubSubtypeSelector, formFieldsVisible]);

  const renderFormFields = () => {
    if (!selectedType) return null;

    const type = contentTypes.find(t => t.id === selectedType);
    if (!type) return null;

    // Augment Reality
    if (selectedType === "augment-reality") {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="deeplink">Deeplink</Label>
            <Input
              id="deeplink"
              placeholder="Deeplink"
              value={formData.deeplink || ""}
              onChange={(e) => handleInputChange("deeplink", e.target.value)}
            />
          </div>
        </div>
      );
    }

    // Restaurant Menu
    if (selectedType === "restaurant-menu") {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="menu-content">Menu Content</Label>
            <Textarea
              id="menu-content"
              placeholder="Menu Content"
              value={formData.menuContent || ""}
              onChange={(e) => handleInputChange("menuContent", e.target.value)}
              className="min-h-[120px]"
            />
          </div>
        </div>
      );
    }

    // Game
    if (selectedType === "game") {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="game-pin">Sepo.io game PIN</Label>
            <Input
              id="game-pin"
              placeholder="Sepo.io game PIN"
              value={formData.gamePin || ""}
              onChange={(e) => handleInputChange("gamePin", e.target.value)}
            />
          </div>
        </div>
      );
    }

    // Document subtypes
    if (selectedType === "document" && selectedSubtype) {
      if (selectedSubtype === "PDF") {
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="pdf-file">File</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="pdf-file"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleInputChange("pdfFile", e.target.files?.[0]?.name || "")}
                />
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Content"
                value={formData.content || ""}
                onChange={(e) => handleInputChange("content", e.target.value)}
                className="min-h-[120px]"
              />
            </div>
          </div>
        );
      }
    }

    // Media subtypes
    if (selectedType === "media" && selectedSubtype && selectedSubSubtype) {
      if (selectedSubtype === "Host") {
        if (selectedSubSubtype === "MP3") {
          return (
            <div className="space-y-4">
              <div>
                <Label htmlFor="audio-file">Audio file</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="audio-file"
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleInputChange("audioFile", e.target.files?.[0]?.name || "")}
                  />
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        } else if (selectedSubSubtype === "Video") {
          return (
            <div className="space-y-4">
              <div>
                <Label htmlFor="video-file">Video file</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="video-file"
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleInputChange("videoFile", e.target.files?.[0]?.name || "")}
                  />
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        }
      } else if (selectedSubtype === "Link") {
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">Insert URL</Label>
              <Input
                id="url"
                placeholder="Insert URL"
                value={formData.url || ""}
                onChange={(e) => handleInputChange("url", e.target.value)}
              />
            </div>
          </div>
        );
      }
    }

    // Other subtypes
    if (selectedType === "other" && selectedSubtype) {
      if (selectedSubtype === "Web Based" || selectedSubtype === "Website URL") {
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">Insert URL</Label>
              <Input
                id="url"
                placeholder="Insert URL"
                value={formData.url || ""}
                onChange={(e) => handleInputChange("url", e.target.value)}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Content"
                value={formData.content || ""}
                onChange={(e) => handleInputChange("content", e.target.value)}
                className="min-h-[120px]"
              />
            </div>
          </div>
        );
      }
    }

    // Social Networks
    if (selectedType === "social-networks" && selectedSubtype) {
      const IconComponent = socialNetworkIcons[selectedSubtype] || Share2;
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="social-url" className="flex items-center gap-2">
              <IconComponent className="w-4 h-4" />
              Insert URL
            </Label>
            <Input
              id="social-url"
              placeholder="Insert URL"
              value={formData.socialUrl || ""}
              onChange={(e) => handleInputChange("socialUrl", e.target.value)}
            />
          </div>
        </div>
      );
    }

    // Default case for other types with subtypes
    if (selectedSubtype) {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Content"
              value={formData.content || ""}
              onChange={(e) => handleInputChange("content", e.target.value)}
              className="min-h-[120px]"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Create New Content
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Build dynamic content with our intelligent form builder
            </p>
          </div>

          {/* Content Configuration Card */}
          <Card className="w-full border border-black">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Content Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Content Type */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Step 1: Content Type</h3>
                  <Badge variant="secondary" className="text-xs">Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Choose the primary type of content you want to create
                </p>

                {/* Content Type Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contentTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <Button
                        key={type.id}
                        variant="outline"
                        className={`h-auto p-4 justify-start text-left space-y-2 border-black ${
                          selectedType === type.id 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "hover:bg-primary/5"
                        }`}
                        onClick={() => handleTypeChange(type.id)}
                      >
                        <div className="w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <IconComponent className="w-4 h-4" />
                            <span className="font-medium text-sm">{type.name}</span>
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Subtype Selection */}
              {showSubtypeSelector && (
                <div className={`space-y-4 transition-all duration-600 ${
                  subtypeVisible 
                    ? 'animate-fade-in translate-y-0 opacity-100' 
                    : subtypeAnimating 
                      ? 'animate-fade-out -translate-y-2 opacity-0' 
                      : 'translate-y-2 opacity-0'
                }`}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Step 2: Subtype</h3>
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                  </div>
                  <Select value={selectedSubtype} onValueChange={handleSubtypeChange}>
                    <SelectTrigger className="border-black">
                      <SelectValue placeholder="Select subtype" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentType?.subtypes?.map((subtype) => (
                        <SelectItem key={subtype} value={subtype}>
                          {selectedType === "social-networks" ? (
                            <div className="flex items-center gap-2">
                              {React.createElement(socialNetworkIcons[subtype] || Share2, { className: "w-4 h-4" })}
                              {subtype}
                            </div>
                          ) : (
                            subtype
                          )}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Step 3: Sub-subtype Selection (for Media) */}
              {showSubSubtypeSelector && (
                <div className={`space-y-4 transition-all duration-600 ${
                  subSubtypeVisible 
                    ? 'animate-fade-in translate-y-0 opacity-100' 
                    : subSubtypeAnimating 
                      ? 'animate-fade-out -translate-y-2 opacity-0' 
                      : 'translate-y-2 opacity-0'
                }`}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Step 3: Media Type</h3>
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                  </div>
                  <Select value={selectedSubSubtype} onValueChange={handleSubSubtypeChange}>
                    <SelectTrigger className="border-black">
                      <SelectValue placeholder="Select media type" />
                    </SelectTrigger>
                    <SelectContent>
                      {mediaSubSubtypes[selectedSubtype as keyof typeof mediaSubSubtypes]?.map((subSubtype) => (
                        <SelectItem key={subSubtype} value={subSubtype}>
                          {subSubtype}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Form Fields */}
              {showFormFields && (
                <div className={`space-y-4 transition-all duration-600 ${
                  formFieldsVisible 
                    ? 'animate-fade-in translate-y-0 opacity-100' 
                    : formFieldsAnimating 
                      ? 'animate-fade-out -translate-y-2 opacity-0' 
                      : 'translate-y-2 opacity-0'
                }`}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      Step {showSubtypeSelector ? (showSubSubtypeSelector ? "4" : "3") : "2"}: Content Details
                    </h3>
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                  </div>
                  {renderFormFields()}
                </div>
              )}

              {/* Submit Button */}
              {showFormFields && (
                <div className={`pt-4 transition-all duration-600 ${
                  formFieldsVisible 
                    ? 'animate-fade-in translate-y-0 opacity-100' 
                    : formFieldsAnimating 
                      ? 'animate-fade-out -translate-y-2 opacity-0' 
                      : 'translate-y-2 opacity-0'
                }`}>
                  <Button size="lg" className="w-full md:w-auto">
                    Generate QR Code
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CreateQRCode;

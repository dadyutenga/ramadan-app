"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Clock,
  Book,
  Target,
  ChevronDown,
  ChevronUp,
  Utensils,
  Home,
  Settings,
  Heart,
  Calendar,
  Bookmark,
  MapPin,
  Search,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RamadanDaily() {
  const [showSalahTimes, setShowSalahTimes] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 16, seconds: 45 })
  const [activeTab, setActiveTab] = useState("home")
  const [quranProgress, setQuranProgress] = useState(27)
  const [fastingDays, setFastingDays] = useState(12)
  const [taraweehProgress, setTaraweehProgress] = useState(75)
  const [location, setLocation] = useState("New York, USA")
  const [expandedSections, setExpandedSections] = useState({
    dailyVerse: false,
    challenges: false,
    recipes: false,
  })

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, "0")

  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate)

  const islamicDate = "15 Ramadan 1445"

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen max-w-md mx-auto flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-black/30 p-4 sm:p-6 pb-4 backdrop-blur-sm border-b border-white/10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ramadan Daily</h1>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                variant="outline"
                className="bg-amber-500/10 text-amber-300 border-amber-500/20 px-2 py-1 text-xs sm:text-sm"
              >
                {islamicDate}
              </Badge>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white/60 text-xs sm:text-sm hover:text-white">
                    <MapPin size={12} className="mr-1" />
                    {location}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#1E293B] border-white/10 text-white">
                  <DialogHeader>
                    <DialogTitle>Change Location</DialogTitle>
                    <DialogDescription>Select your current location for accurate prayer times.</DialogDescription>
                  </DialogHeader>
                  <Select onValueChange={setLocation}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1E293B] border-white/10 text-white">
                      <SelectItem value="New York, USA">New York, USA</SelectItem>
                      <SelectItem value="London, UK">London, UK</SelectItem>
                      <SelectItem value="Dubai, UAE">Dubai, UAE</SelectItem>
                      <SelectItem value="Tokyo, Japan">Tokyo, Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-amber-400/30 rounded-full blur-md"></div>
            <Moon className="text-amber-400 relative" size={40} fill="#FFC107" />
          </div>
        </div>
      </header>

      <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <ScrollArea className="flex-1">
          <TabsContent value="home" className="p-4 space-y-4 m-0">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">Assalamu Alaikum!</h2>
                    <p className="text-white/70 text-sm">{formattedDate}</p>
                  </div>
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-amber-500/20 text-amber-300">MK</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Iftar Countdown */}
            <Card className="bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-500/20 p-2 sm:p-3 rounded-full">
                    <Clock className="text-amber-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Iftar Countdown</h2>
                    <div className="flex space-x-2 mt-2">
                      <div className="bg-black/40 rounded-lg p-2 w-14 sm:w-16 text-center">
                        <span className="text-xl sm:text-2xl font-mono text-amber-300">
                          {formatTime(countdown.hours)}
                        </span>
                        <p className="text-xs text-white/70">hours</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-2 w-14 sm:w-16 text-center">
                        <span className="text-xl sm:text-2xl font-mono text-amber-300">
                          {formatTime(countdown.minutes)}
                        </span>
                        <p className="text-xs text-white/70">minutes</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-2 w-14 sm:w-16 text-center">
                        <span className="text-xl sm:text-2xl font-mono text-amber-300">
                          {formatTime(countdown.seconds)}
                        </span>
                        <p className="text-xs text-white/70">seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Trackers */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader className="p-3 sm:p-4 pb-2">
                  <CardTitle className="text-sm sm:text-md text-white flex items-center">
                    <Book className="mr-2 h-4 w-4 text-emerald-400" />
                    Quran Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-white/70">8 juz completed</span>
                      <span className="text-emerald-400">{quranProgress}%</span>
                    </div>
                    <Progress value={quranProgress} className="h-2 bg-white/10" indicatorClassName="bg-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader className="p-3 sm:p-4 pb-2">
                  <CardTitle className="text-sm sm:text-md text-white flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                    Fasting Days
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-white/70">{fastingDays} days completed</span>
                      <span className="text-blue-400">{Math.round((fastingDays / 30) * 100)}%</span>
                    </div>
                    <Progress
                      value={(fastingDays / 30) * 100}
                      className="h-2 bg-white/10"
                      indicatorClassName="bg-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salah Times */}
            <Card className="bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardHeader className="p-4 sm:p-5 pb-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-full">
                      <Book className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl text-white">Today's Salah Times</CardTitle>
                      <CardDescription className="text-emerald-300/80 text-xs sm:text-sm">
                        Prayer schedule
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSalahTimes(!showSalahTimes)}
                    className="bg-emerald-500/10 hover:bg-emerald-500/20 text-white"
                  >
                    {showSalahTimes ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
                </div>
              </CardHeader>

              <CardContent
                className={cn(
                  "p-4 sm:p-5 pt-0 transition-all duration-300 ease-in-out",
                  showSalahTimes ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden",
                )}
              >
                <div className="space-y-2 mt-2">
                  {[
                    { prayer: "Fajr", time: "04:45 AM", color: "bg-blue-500/20 border-blue-500/30" },
                    { prayer: "Dhuhr", time: "12:30 PM", color: "bg-emerald-500/20 border-emerald-500/30" },
                    { prayer: "Asr", time: "03:45 PM", color: "bg-purple-500/20 border-purple-500/30" },
                    { prayer: "Maghrib", time: "06:15 PM", color: "bg-amber-500/20 border-amber-500/30" },
                    { prayer: "Isha", time: "07:45 PM", color: "bg-indigo-500/20 border-indigo-500/30" },
                    { prayer: "Taraweeh", time: "08:30 PM", color: "bg-pink-500/20 border-pink-500/30" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between p-2 sm:p-3 rounded-xl ${item.color} border border-white/5 backdrop-blur-sm`}
                    >
                      <span className="text-white font-medium text-sm">{item.prayer}</span>
                      <span className="text-white/90 bg-black/30 px-2 py-1 rounded-md text-xs">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Verse */}
            <Card className="bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardHeader className="p-4 sm:p-5 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg sm:text-xl text-white">Daily Verse</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSection("dailyVerse")}
                    className="bg-amber-500/10 hover:bg-amber-500/20 text-white"
                  >
                    {expandedSections.dailyVerse ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent
                className={cn(
                  "p-4 sm:p-5 pt-0 transition-all duration-300 ease-in-out",
                  expandedSections.dailyVerse ? "max-h-96 opacity-100" : "max-h-20 opacity-100 overflow-hidden",
                )}
              >
                <div className="bg-gradient-to-br from-amber-900/30 to-amber-700/20 p-4 sm:p-5 rounded-xl border border-amber-500/20 mt-2">
                  <p className="text-lg sm:text-xl text-amber-300 mb-4 text-center font-arabic">
                    إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ
                  </p>
                  <p className="text-sm sm:text-md text-white/90 text-center italic mb-3">
                    "Indeed, as-Safa and al-Marwah are among the symbols of Allah..."
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="bg-black/30 text-amber-200/80 border-amber-500/20 text-xs">
                      Juz 2 • Page 24 • Al-Baqara (Verse 158)
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 px-4 sm:px-5 pb-4 sm:pb-5">
                <div className="flex justify-between w-full">
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                    <Heart className="h-4 w-4 mr-1" /> Save
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                    <Bookmark className="h-4 w-4 mr-1" /> Bookmark
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="p-4 space-y-4 m-0">
            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-white">Ramadan Challenges</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Complete these challenges to enhance your Ramadan experience
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSection("challenges")}
                    className="bg-amber-500/10 hover:bg-amber-500/20 text-white"
                  >
                    {expandedSections.challenges ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent
                className={cn(
                  "space-y-4 transition-all duration-300 ease-in-out",
                  expandedSections.challenges ? "max-h-96 opacity-100" : "max-h-20 opacity-100 overflow-hidden",
                )}
              >
                {[
                  { title: "Complete Taraweeh Prayer", progress: taraweehProgress, color: "bg-purple-500" },
                  { title: "Read Quran Daily", progress: 85, color: "bg-emerald-500" },
                  { title: "Give Charity", progress: 60, color: "bg-amber-500" },
                  { title: "Learn New Dua", progress: 40, color: "bg-blue-500" },
                  { title: "Help Someone in Need", progress: 70, color: "bg-pink-500" },
                ].map((challenge, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">{challenge.title}</span>
                      <span className="text-white/70 text-xs">{challenge.progress}%</span>
                    </div>
                    <Progress
                      value={challenge.progress}
                      className="h-2 bg-white/10"
                      indicatorClassName={challenge.color}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-sm">
                  View All Challenges
                </Button>
              </CardFooter>
            </Card>

            {/* ... (rest of the challenges content) */}
          </TabsContent>

          <TabsContent value="recipes" className="p-4 space-y-4 m-0">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">Iftar Recipes</h2>
              <Button variant="outline" size="sm" className="text-white/70 border-white/20">
                <Search className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div
              className={cn(
                "space-y-4 transition-all duration-300 ease-in-out",
                expandedSections.recipes ? "max-h-full" : "max-h-96 overflow-hidden",
              )}
            >
              {[
                {
                  title: "Dates & Almond Smoothie",
                  time: "5 min",
                  difficulty: "Easy",
                  image: "/placeholder.svg?height=120&width=200",
                  tags: ["Drink", "Quick"],
                },
                {
                  title: "Moroccan Harira Soup",
                  time: "45 min",
                  difficulty: "Medium",
                  image: "/placeholder.svg?height=120&width=200",
                  tags: ["Soup", "Traditional"],
                },
                {
                  title: "Chicken Samosas",
                  time: "60 min",
                  difficulty: "Medium",
                  image: "/placeholder.svg?height=120&width=200",
                  tags: ["Appetizer", "Fried"],
                },
                {
                  title: "Lamb Biryani",
                  time: "90 min",
                  difficulty: "Hard",
                  image: "/placeholder.svg?height=120&width=200",
                  tags: ["Main", "Rice"],
                },
              ].map((recipe, index) => (
                <Card key={index} className="bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 h-40 sm:h-auto">
                      <img
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{recipe.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {recipe.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-amber-500/10 text-amber-300 border-amber-500/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-white/70">
                        <span>⏱️ {recipe.time}</span>
                        <span>📊 {recipe.difficulty}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 w-full text-white/80 border-white/20 hover:bg-white/10"
                      >
                        View Recipe
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => toggleSection("recipes")}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600"
            >
              {expandedSections.recipes ? "Show Less" : "Show More Recipes"}
            </Button>

            <div className="mt-4">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Suhoor Ideas</h2>
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm p-4">
                <div className="space-y-3">
                  {["Overnight Oats with Dates", "Protein-Packed Egg Wraps", "Quinoa & Vegetable Bowl"].map(
                    (item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-black/30 rounded-lg">
                        <span className="text-white text-sm">{item}</span>
                        <Button variant="ghost" size="sm" className="text-white/70">
                          View
                        </Button>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* ... (rest of the tab contents) */}
        </ScrollArea>

        {/* Navigation */}
        <div className="mt-auto bg-black/40 backdrop-blur-md border-t border-white/10">
          <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 bg-transparent h-auto p-2">
              <TabsTrigger
                value="home"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 flex flex-col items-center py-2 gap-1"
              >
                <Home size={18} />
                <span className="text-[10px] sm:text-xs">Home</span>
              </TabsTrigger>
              <TabsTrigger
                value="challenges"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-amber-300 text-white/60 flex flex-col items-center py-2 gap-1"
              >
                <Target size={18} />
                <span className="text-[10px] sm:text-xs">Challenges</span>
              </TabsTrigger>
              <TabsTrigger
                value="recipes"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-emerald-300 text-white/60 flex flex-col items-center py-2 gap-1"
              >
                <Utensils size={18} />
                <span className="text-[10px] sm:text-xs">Recipes</span>
              </TabsTrigger>
              <TabsTrigger
                value="quran"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-blue-300 text-white/60 flex flex-col items-center py-2 gap-1"
              >
                <Book size={18} />
                <span className="text-[10px] sm:text-xs">Quran</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-purple-300 text-white/60 flex flex-col items-center py-2 gap-1"
              >
                <Settings size={18} />
                <span className="text-[10px] sm:text-xs">Settings</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Tabs>
    </div>
  )
}


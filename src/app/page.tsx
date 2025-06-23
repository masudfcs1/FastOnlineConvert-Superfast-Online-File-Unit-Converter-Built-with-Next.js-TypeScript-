// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import {
//   FileText,
//   ImageIcon,
//   Video,
//   Music,
//   Archive,
//   Zap,
//   Shield,
//   Cloud,
//   Check,
//   Star,
//   Upload,
//   ArrowRight,
//   Users,
//   Globe,
//   Sparkles,
// } from "lucide-react"

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const scaleOnHover = {
//   whileHover: { scale: 1.05 },
//   whileTap: { scale: 0.95 },
// }

// export default function FastOnlineConvertLanding() {
//   const [email] = useState("")

//   const fileTypes = [
//     { icon: FileText, name: "Documents", formats: "PDF, DOCX, TXT, RTF" },
//     { icon: ImageIcon, name: "Images", formats: "JPG, PNG, GIF, SVG, WebP" },
//     { icon: Video, name: "Videos", formats: "MP4, AVI, MOV, MKV, WebM" },
//     { icon: Music, name: "Audio", formats: "MP3, WAV, FLAC, AAC, OGG" },
//     { icon: Archive, name: "Archives", formats: "ZIP, RAR, 7Z, TAR, GZ" },
//   ]

//   const features = [
//     {
//       icon: Zap,
//       title: "Lightning Fast",
//       description: "Convert files in seconds with our optimized processing engine",
//     },
//     {
//       icon: Shield,
//       title: "Secure & Private",
//       description: "Your files are encrypted and automatically deleted after conversion",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Processing",
//       description: "No software installation required. Convert directly in your browser",
//     },
//     {
//       icon: Globe,
//       title: "Universal Access",
//       description: "Access from any device, anywhere in the world, anytime",
//     },
//   ]

//   const plans = [
//     {
//       name: "Free",
//       price: "$0",
//       period: "forever",
//       description: "Perfect for occasional use",
//       features: ["5 conversions per day", "Files up to 10MB", "Basic file formats", "Standard processing speed"],
//       popular: false,
//     },
//     {
//       name: "Pro",
//       price: "$9.99",
//       period: "per month",
//       description: "Ideal for professionals",
//       features: [
//         "Unlimited conversions",
//         "Files up to 500MB",
//         "All file formats",
//         "Priority processing",
//         "Batch conversion",
//         "API access",
//       ],
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: "$29.99",
//       period: "per month",
//       description: "For teams and businesses",
//       features: [
//         "Everything in Pro",
//         "Files up to 2GB",
//         "Team collaboration",
//         "Advanced security",
//         "Custom integrations",
//         "Priority support",
//       ],
//       popular: false,
//     },
//   ]

//   const stats = [
//     { number: "10M+", label: "Files Converted" },
//     { number: "500K+", label: "Happy Users" },
//     { number: "99.9%", label: "Uptime" },
//     { number: "150+", label: "File Formats" },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}
//       <motion.header
//         className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//               <Zap className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               FastOnlineConvert
//             </span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Features
//             </a>
//             <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Pricing
//             </a>
//             <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
//               About
//             </a>
//             <Button variant="outline" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
//               Sign In
//             </Button>
//             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//               Get Started
//             </Button>
//           </nav>
//         </div>
//       </motion.header>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4">
//         <div className="container mx-auto text-center">
//           <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto">
//             <motion.div variants={fadeInUp}>
//               <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
//                 <Sparkles className="w-4 h-4 mr-1" />
//                 Convert Any File Format Instantly
//               </Badge>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
//             >
//               Convert Files at
//               <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Lightning Speed
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Transform any file format in seconds. No downloads, no installations, no limits. Just fast, secure, and
//               reliable file conversion in your browser.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//             >
//               <motion.div {...scaleOnHover}>
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
//                 >
//                   <Upload className="w-5 h-5 mr-2" />
//                   Start Converting Now
//                 </Button>
//               </motion.div>
//               <motion.div {...scaleOnHover}>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-2 border-gray-300 hover:border-blue-300 px-8 py-4 text-lg font-semibold rounded-xl"
//                 >
//                   Watch Demo
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Stats */}
//             <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
//               {stats.map((stat, index) => (
//                 <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* File Types Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Support for All File Types</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Convert between hundreds of file formats with just a few clicks
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
//           >
//             {fileTypes.map((type, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <type.icon className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
//                 <p className="text-sm text-gray-600">{type.formats}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose FastOnlineConvert?</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built for speed, security, and simplicity</p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Choose the plan that fits your needs. Upgrade or downgrade anytime.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//           >
//             {plans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
//                   plan.popular ? "border-blue-500 shadow-blue-100" : "border-gray-200"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
//                       <Star className="w-4 h-4 mr-1" />
//                       Most Popular
//                     </Badge>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                   <p className="text-gray-600 mb-4">{plan.description}</p>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                     <span className="text-gray-600 ml-2">/{plan.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   className={`w-full py-3 rounded-xl font-semibold ${
//                     plan.popular
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//                       : "bg-gray-100 hover:bg-gray-200 text-gray-900"
//                   }`}
//                 >
//                   {plan.name === "Free" ? "Get Started Free" : `Choose ${plan.name}`}
//                 </Button>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">Ready to Convert Your Files?</h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Join millions of users who trust FastOnlineConvert for their file conversion needs.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//                 className="bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm"
//               />
//               <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 whitespace-nowrap">
//                 Get Started
//               </Button>
//             </div>

//             <p className="text-blue-100 text-sm">No credit card required • Free forever plan available</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Zap className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold">FastOnlineConvert</span>
//               </div>
//               <p className="text-gray-400 mb-4">The fastest and most secure way to convert files online.</p>
//               <div className="flex space-x-4">
//                 <Users className="w-5 h-5 text-gray-400" />
//                 <Globe className="w-5 h-5 text-gray-400" />
//                 <Shield className="w-5 h-5 text-gray-400" />
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     API
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Integrations
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Status
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Security
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Privacy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} FastOnlineConvert. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  ImageIcon,
  Video,
  Music,
  Archive,
  Zap,
  Shield,
  Cloud,
  Check,
  Star,
  Upload,
  Users,
  Globe,
  Sparkles,
  Play,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
} as const

import { easeInOut } from "framer-motion"

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: easeInOut,
  },
}

export default function FastOnlineConvertLanding() {
  const [email, setEmail] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const fileTypes = [
    {
      icon: FileText,
      name: "Documents",
      formats: ["PDF", "DOCX", "TXT", "RTF", "ODT"],
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: ImageIcon,
      name: "Images",
      formats: ["JPG", "PNG", "GIF", "SVG", "WebP"],
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Video,
      name: "Videos",
      formats: ["MP4", "AVI", "MOV", "MKV", "WebM"],
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Music,
      name: "Audio",
      formats: ["MP3", "WAV", "FLAC", "AAC", "OGG"],
      color: "from-orange-400 to-red-400",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Archive,
      name: "Archives",
      formats: ["ZIP", "RAR", "7Z", "TAR", "GZ"],
      color: "from-indigo-400 to-purple-400",
      bgColor: "from-indigo-500/10 to-purple-500/10",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Quantum Speed",
      description: "AI-powered conversion engine processes files at unprecedented speeds",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Military Grade Security",
      description: "End-to-end encryption with zero-knowledge architecture",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: Cloud,
      title: "Edge Computing",
      description: "Global CDN ensures optimal performance from anywhere",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Support for 500+ file formats across all platforms",
      gradient: "from-blue-400 to-indigo-500",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for personal use",
      features: ["10 conversions/day", "Files up to 25MB", "Basic formats", "Standard speed"],
      popular: false,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "Professional",
      price: "$12",
      period: "per month",
      description: "For power users",
      features: [
        "Unlimited conversions",
        "Files up to 1GB",
        "All formats",
        "Lightning speed",
        "Batch processing",
        "API access",
        "Priority support",
      ],
      popular: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited file size",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "White-label solution",
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  const stats = [
    { number: "50M+", label: "Files Converted", icon: FileText },
    { number: "2M+", label: "Active Users", icon: Users },
    { number: "99.99%", label: "Uptime", icon: Shield },
    { number: "500+", label: "Formats", icon: Globe },
  ]

  // Floating particles effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FastOnlineConvert
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["Features", "Pricing", "API", "About"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden lg:block text-gray-300 hover:text-white hover:bg-gray-800/50">
              Sign In
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25">
                Get Started
              </Button>
            </motion.div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {["Features", "Pricing", "API", "About"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Generation File Conversion
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Convert Files
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                At Light Speed
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of file conversion. Powered by AI, secured by quantum encryption, and optimized for
              the modern web.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-blue-500/25 border border-blue-500/20"
                >
                  <Upload className="w-6 h-6 mr-3" />
                  Start Converting
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-600 hover:border-blue-400 bg-gray-800/50 backdrop-blur-sm px-12 py-6 text-xl font-bold rounded-2xl hover:bg-gray-700/50"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* File Types Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Universal Format Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Convert between any file format with our advanced AI-powered engine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {fileTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${type.bgColor} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.name}</h3>
                  <div className="space-y-1">
                    {type.formats.map((format, formatIndex) => (
                      <motion.div
                        key={format}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: formatIndex * 0.1 }}
                        className="text-sm text-gray-400 bg-gray-700/50 rounded-lg px-3 py-1 inline-block mr-2 mb-2"
                      >
                        {format}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with the latest innovations in cloud computing and artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-300`}
                />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Power Level
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Flexible pricing that scales with your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
                viewport={{ once: true }}
                className={`relative group ${plan.popular ? "md:-mt-8" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-bold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-300`}
                />
                <div
                  className={`relative bg-gray-800/80 backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
                      : "border-gray-700/50 hover:border-gray-600/50"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.period !== "contact us" && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {plan.name === "Starter" ? "Get Started Free" : `Choose ${plan.name}`}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-white mb-8">Ready to Experience the Future?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join millions of users who have revolutionized their workflow with FastOnlineConvert
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-xl py-4 px-6 text-lg"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold px-8 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25 whitespace-nowrap">
                  Start Free Trial
                </Button>
              </motion.div>
            </div>

            <p className="text-gray-400 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FastOnlineConvert
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The most advanced file conversion platform on the planet. Powered by AI, secured by quantum encryption.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Globe className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Shield className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations", "Security", "Enterprise"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Help Center", "Blog", "Status", "Changelog", "Community"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Partners", "Privacy", "Terms"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors relative group"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} FastOnlineConvert. All rights reserved. Built with ⚡ and 💜
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

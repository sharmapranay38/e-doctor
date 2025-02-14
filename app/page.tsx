"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Stethoscope, Brain, Shield } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Your AI-Powered Health Assistant</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          e-Doctor provides quick, reliable medical advice using AI and machine learning.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/symptom-checker">
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        <FeatureCard
          icon={<Stethoscope className="h-12 w-12 text-primary" />}
          title="Symptom Analysis"
          description="Describe your symptoms and get instant AI-powered analysis."
        />
        <FeatureCard
          icon={<Brain className="h-12 w-12 text-primary" />}
          title="Smart Chatbot"
          description="Interact with our AI to get personalized health advice."
        />
        <FeatureCard
          icon={<Shield className="h-12 w-12 text-primary" />}
          title="Health Insights"
          description="Receive tailored health reports and lifestyle recommendations."
        />
      </motion.div>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-card rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}


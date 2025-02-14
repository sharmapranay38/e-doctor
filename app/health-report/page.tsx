"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Heart, Activity } from "lucide-react"

export default function HealthReport() {
  // TODO: Fetch and process user data for health insights
  const possibleConditions = ["Common Cold", "Allergies", "Stress"]
  const lifestyleRecommendations = [
    "Get 7-9 hours of sleep each night",
    "Exercise for at least 30 minutes daily",
    "Maintain a balanced diet rich in fruits and vegetables",
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-24"
    >
      <h1 className="text-3xl font-bold mb-8">Your Health Report</h1>
      <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-yellow-500" />
              Possible Conditions
            </CardTitle>
            <CardDescription>Based on your symptoms and input</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {possibleConditions.map((condition, index) => (
                <li key={index} className="mb-2">
                  <Badge variant="secondary">{condition}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-6 w-6 text-red-500" />
              Lifestyle Recommendations
            </CardTitle>
            <CardDescription>Suggestions for better health</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {lifestyleRecommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <Activity className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.main>
  )
}


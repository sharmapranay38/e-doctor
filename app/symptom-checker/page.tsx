"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Loader2 } from "lucide-react"
import { toast } from "@/components/ui/toast"

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!symptoms.trim()) {
      toast({
        title: "Error",
        description: "Please enter your symptoms.",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    // TODO: Implement AI diagnosis logic
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Analysis Complete",
      description: "Your symptoms have been analyzed. Please check your health report.",
    })
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-24"
    >
      <h1 className="text-3xl font-bold mb-8">Symptom Checker</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex items-center">
          <Input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe your symptoms..."
            className="flex-grow mr-2"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => toast({ title: "Voice Input", description: "Voice input feature coming soon!" })}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Symptoms"
          )}
        </Button>
      </form>
    </motion.main>
  )
}


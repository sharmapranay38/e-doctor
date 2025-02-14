"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Loader2 } from "lucide-react"

export default function Chatbot() {
  const [messages, setMessages] = useState([{ role: "bot", content: "Hi! I'm e-Doctor. How can I assist you today?" }])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      setIsLoading(true)
      // TODO: Implement AI response logic
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I'm processing your request. As an AI language model, I don't have real-time medical knowledge or the ability to diagnose. Please consult with a healthcare professional for accurate medical advice.",
        },
      ])
      setIsLoading(false)
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-4rem)] flex-col p-24"
    >
      <h1 className="text-3xl font-bold mb-8">Chat with e-Doctor</h1>
      <div className="flex-grow overflow-auto mb-4 space-y-4 pr-4" style={{ maxHeight: "calc(100vh - 16rem)" }}>
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-md ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <Avatar>
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                </Avatar>
                <div
                  className={`p-4 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {message.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
            <div className="flex items-center space-x-2 max-w-md bg-muted p-4 rounded-lg">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>e-Doctor is typing...</span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading}>
          Send
        </Button>
      </form>
    </motion.main>
  )
}


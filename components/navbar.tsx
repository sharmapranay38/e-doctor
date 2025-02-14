import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Home, Stethoscope, MessageSquare, FileText } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">e-Doctor</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/symptom-checker">
            <Button variant="ghost" size="sm">
              <Stethoscope className="mr-2 h-4 w-4" />
              Symptom Checker
            </Button>
          </Link>
          <Link href="/chatbot">
            <Button variant="ghost" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chatbot
            </Button>
          </Link>
          <Link href="/health-report">
            <Button variant="ghost" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Health Report
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}


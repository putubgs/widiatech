import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  text: string
  author: string
  position: string
  company: string
  image: string
}

export function TestimonialCard({ text, author, position, company, image }: TestimonialCardProps) {
  return (
    <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{author}</h4>
            <p className="text-sm text-gray-400">{position}</p>
            <p className="text-sm text-gray-400">{company}</p>
          </div>
        </div>
        <blockquote className="text-gray-300 italic">&quot;{text}&quot;</blockquote>
      </CardContent>
    </Card>
  )
}


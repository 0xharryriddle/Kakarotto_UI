import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { saiyaFont } from "@/styles/fonts"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full h-full min-h-screen bg-secondary text-primary">
            <h2 className={`uppercase font-bold text-7xl tracking-widest  ${saiyaFont.className}`}>This page is not found</h2>
            <p className="text-2xl font-medium">{"You just hit a route that doesn't exist..."}</p>
            <p className="text-2xl font-medium">Please check your URL or return to the home page</p>
            <Button className="hover:cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90 " asChild>
                <Link href="/" className="text-lg">Return Home</Link>
            </Button>
        </div>
    )
}
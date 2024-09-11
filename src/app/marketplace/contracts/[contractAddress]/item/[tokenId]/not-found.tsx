import { saiyaFont } from "@/styles/fonts"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full h-full min-h-screen text-primary">
            <h2 className={`uppercase font-bold text-7xl tracking-widest  ${saiyaFont.className}`}>Not found any NFTs</h2>
        </div>
    )
}
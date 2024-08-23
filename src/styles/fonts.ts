import localFont from 'next/font/local'
import { Inter } from "next/font/google";
 
const saiyaFont = localFont({ src: '../../public/fonts/Saiyan-Sans.ttf' })
const saiyaLeftFont = localFont({ src: '../../public/fonts/Saiyan-Sans Left Oblique.ttf' })
const saiyaRightFont = localFont({ src: '../../public/fonts/Saiyan-Sans Right Oblique.ttf' })
const inter = Inter({ subsets: ["latin"] });
 
export { saiyaFont, saiyaLeftFont, saiyaRightFont, inter}
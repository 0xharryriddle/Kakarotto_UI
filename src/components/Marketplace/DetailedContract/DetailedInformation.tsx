'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Button } from '@/components/ui/button';
import { ArrowLeftCircleIcon } from 'lucide-react';
import { accessToPinataImage } from '@/utils/image.util';
import * as Enums from "@/utils/enum.util";

//  This tool is programmed in a language called p5.js
//  You can find more info on p5.js here: https://p5js.org/
// 
//  This is a basic example of how to make your own animation function
// function animate(p5, props) {
//     const {
//       mainImage, // The main image
//       size, // The size of the canvas
//       currentFrame, // The current frame
//       totalFrames, // The total number of frames
//       bgColor, // The background color
//     } = props;
//     const biggestImageDimension =
//       mainImage.width > mainImage.height ? mainImage.width : mainImage.height;

//     // Want to scale the image up or down? Change the .63 to a different number
//     p5.scale((size / biggestImageDimension) * .63);
//     p5.background(bgColor);
//     p5.rotateY(currentFrame * ((2 * Math.PI) / totalFrames));
//     p5.texture(mainImage);

//     // Experiment with different shapes
//     p5.plane(mainImage.width, mainImage.height);
//     // p5.sphere(size / 3);
//     // p5.box(size / 2)
//     }

interface DetailedInformationProps {
    image: string;
    category: Enums.Categories;
}

export default function DetailedInformation({ image }: DetailedInformationProps) {
    const router = useRouter();

    const sketch: Sketch = (p5) => {
        let img: any;
        const size = 500;
        const totalFrames = 500;
        // Preload the image
        p5.preload = () => {
            const imageURL = accessToPinataImage(image);
            img = p5.loadImage(imageURL);
        };

        p5.setup = () => {
            p5.createCanvas(600, 400, p5.WEBGL);
        };

        p5.draw = () => {
            p5.background(size);

            // p5.push();
            const biggestImageDimension =
                img.width > img.height ? img.width : img.height;

            p5.scale((size / biggestImageDimension) * .73);
            p5.rotateY(p5.frameCount * ((2 * Math.PI) / totalFrames));
            p5.texture(img);
            p5.plane(img.width, img.height);
            // p5.pop();
        };
    };


    return (
        <div className="flex flex-col justify-center gap-5 text-primary w-full h-full">
            <div className="w-full">
                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4' onClick={() => { router.back() }}>
                    <ArrowLeftCircleIcon size={32} />
                    <span className="text-xl font-bold">Back</span>
                </Button>
            </div>
            <div className="w-full flex flex-row gap-5">
                <div className="rounded-lg overflow-hidden h-fit">
                    <NextReactP5Wrapper sketch={sketch} />
                </div>
                <div className="">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Owner:</span>
                            <span className="text-lg">0x1234567890abcdef1234567890abcdef12345678</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Buyer:</span>
                            <span className="text-lg">0x1234567890abcdef1234567890abcdef12345678</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Price:</span>
                            <span className="text-lg">0.1 ETH</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Status:</span>
                            <span className="text-lg">Sold</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Created At:</span>
                            <span className="text-lg">2021-07-22 10:00:00</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Expires At:</span>
                            <span className="text-lg">2021-07-22 10:00:00</span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-bold">Updated At:</span>
                            <span className="text-lg">2021-07-22 10:00:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

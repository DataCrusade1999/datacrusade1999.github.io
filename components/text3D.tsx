'use client';
import React from "react";
import { Suspense } from 'react'
import { Center, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Text3DMain({ threeDTextProps = "Ashutosh" }) {

    return (
        <Suspense fallback={<><span>Sorry Try again!</span></>}>
            <Canvas>
                <Center rotation={[0, 0, 0]}>
                    <Text3D
                        curveSegments={32}
                        bevelEnabled
                        bevelSize={0.04}
                        bevelThickness={0.1}
                        height={0.1}
                        lineHeight={0.5}
                        letterSpacing={-0.06}
                        size={3}
                        font={"/fonts/Bai Jamjuree_Regular.json"}
                    >
                        {threeDTextProps}
                        <meshNormalMaterial />
                    </Text3D>
                </Center>
            </Canvas>
        </Suspense>
    );
}


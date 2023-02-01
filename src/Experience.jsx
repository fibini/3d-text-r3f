import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useState } from 'react'

export default function Experience()
{
    const [ matcapTexture ] = useMatcapTexture('070B0C_B2C7CE_728FA3_5B748B', 256)

    const [ capsuleGeometry, setCapsuleGeometry ] = useState()
    
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <capsuleGeometry ref={ setCapsuleGeometry }/>

        {/* <mesh scale={ 1.5 }>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}
        <Center>
            <Text3D 
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.75}
                height={ 0.2}
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                FIBINI
                <meshMatcapMaterial matcap={ matcapTexture } />
            </Text3D>
        </Center>
        {[...Array(100)].map((value, index) =>
            <mesh
                key={ index }
                geometry={ capsuleGeometry }
                position={ [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ] }
                scale={ 0.3 + Math.random() * 0.3 }
                rotation={ [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ] }
            
            >
                <meshMatcapMaterial matcap={ matcapTexture } />
            </mesh>
        )}
        

    </>
}
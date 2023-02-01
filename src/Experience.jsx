import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { TorusGeometry } from 'three'

export default function Experience()
{
    const [ matcapTexture ] = useMatcapTexture('070B0C_B2C7CE_728FA3_5B748B', 256)
    
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

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

    </>
}
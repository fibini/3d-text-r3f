import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import {useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const capsuleGeometry = new THREE.CapsuleGeometry()
const material = new THREE.MeshMatcapMaterial()

export default function Experience()
{
    // const capsuleGroup = useRef()
    const capsules = useRef([])

    const [ matcapTexture ] = useMatcapTexture('070B0C_B2C7CE_728FA3_5B748B', 256)

    useEffect(() => 
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = THREE.sRGBEncoding

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    useFrame((state, delta) =>
    {
        for(const capsule of capsules.current)
        {
            capsule.rotation.z += delta * 0.2
        }
    })

    // const [ capsuleGeometry, setCapsuleGeometry ] = useState()
    // const [ material, setMaterial] = useState()
    
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <capsuleGeometry ref={ setCapsuleGeometry }/>
        <meshMatcapMaterial ref={ setMaterial } matcap={ matcapTexture } /> */}

        {/* <mesh scale={ 1.5 }>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}
        <Center>
            <Text3D
                material={ material }
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
            </Text3D>
        </Center>

        {/* <group ref={ capsuleGroup }> */}
            {[...Array(100)].map((value, index) =>
                <mesh
                    ref={ (element) => capsules.current[index]=element}
                    key={ index }
                    geometry={ capsuleGeometry }
                    material={ material }
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
                
                />
            )}
        {/* </group> */}
        

    </>
}
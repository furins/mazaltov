import React, { useState, Suspense, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { proxy, useSnapshot } from 'valtio'

import { OrbitControls, ContactShadows, useGLTF, useCursor } from '@react-three/drei'

const state = proxy({ current: null, mode: 0 })
const colori = {
    "tetto": "#6e7396",
    "tetto001": "#6e7396",
    "tetto002": "#6e7396",
    "tetto003": "#6e7396",
    "tetto004": "#6e7396",
    "sala01": "#c0c1c8",
    "sala11": "#c0c1c8",
    "sala12": "#c0c1c8",
    "sala13": "#c0c1c8",
    "sala14": "#c0c1c8",
    "sala21": "#c0c1c8",
    "sala31": "#c0c1c8",
    "sala32": "#c0c1c8",
    "sala33": "#c0c1c8",
    "sala34": "#c0c1c8",
    "sala35": "#c0c1c8",
    "sala41": "#c0c1c8",
    "sala51": "#c0c1c8",
    "perimetro_esterno": "#253081",
}

function Loading() {
    return (
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 64, 64]} />
            <meshStandardMaterial
                attach="material"
                color="blue"
                transparent
                opacity={0.6}
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
}

function Model({ name, ...props }) {
    // Ties this component to the state model
    const snap = useSnapshot(state)
    // Fetching the GLTF, nodes is a collection of all the meshes
    // It's cached/memoized, it only gets loaded and parsed once
    const { nodes } = useGLTF('/scene.gltf')
    // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)
    return (
        <mesh
            // Click sets the mesh as the new target
            onClick={(e) => { e.stopPropagation(); state.current = name }}
            // If a click happened but this mesh wasn't hit we null out the target,
            // This works because missed pointers fire before the actual hits
            onPointerMissed={(e) => e.type === 'click' && (state.current = null)}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true)
            }}
            onPointerOut={(e) => setHovered(false)}
            name={name}
            geometry={nodes[name].geometry}
            //material={nodes[name].material}
            material-color={snap.current === name ? '#ff6080' : colori[name]}
            {...props}
            dispose={null}
        />
    )
}

class Mappa3D extends Component {
    constructor() {
        super();
        this.canvas = React.createRef()
    }

    render() {
        return (
            <Canvas camera={{ position: [0, 0.45, 0], fov: 10 }} dpr={[1, 2]} style={{ zIndex: -9999, position: 'relative' }}>
                <pointLight position={[100, 100, 100]} intensity={0.8} />
                <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
                <Suspense fallback={<Loading />}>
                    <group name='ketuppah' position={[0.0227, 0.025, -0.0155]} rotation={[0, Math.PI, 0]} visible={false}>
                        <Model name="tetto" />
                        <Model name="tetto001" />
                        <Model name="tetto002" />
                        <Model name="tetto003" />
                        <Model name="tetto004" />
                    </group>
                    <group position={[0.1, -0.004, -0.04]} rotation={[0, Math.PI, 0]} scale={[1, 0.2, 1]}>
                        <Model name="perimetro_esterno" />
                    </group>
                    <group position={[0.1, -0.005, -0.04]} rotation={[0, Math.PI, 0]}>
                        <Model name="sala01" />
                        <Model name="sala11" />
                        <Model name="sala12" />
                        <Model name="sala13" />
                        <Model name="sala14" />
                        <Model name="sala21" />
                        <Model name="sala31" />
                        <Model name="sala32" />
                        <Model name="sala33" />
                        <Model name="sala34" />
                        <Model name="sala35" />
                        <Model name="sala41" />
                        <Model name="sala51" />
                        <ContactShadows rotation-x={Math.PI / 2} position={[0, -1, 0]} opacity={0.25} width={200} height={200} blur={1} far={50} />
                    </group>
                </Suspense>
                <OrbitControls ref={this.canvas} makeDefault target={[0, 0, 0]} />
            </Canvas>

        );
    }
}

export default Mappa3D;

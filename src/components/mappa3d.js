import React, { useState, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { proxy, useSnapshot } from 'valtio'

import { OrbitControls, TransformControls, ContactShadows, useGLTF, useCursor } from '@react-three/drei'

const modes = ['translate', 'rotate', 'scale']
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
            // Right click cycles through the transform modes
            onContextMenu={(e) => snap.current === name && (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))}
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

function Controls() {
    // Get notified on changes to state
    const snap = useSnapshot(state)
    const scene = useThree((state) => state.scene)
    return (
        <>
            {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
            {snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={modes[snap.mode]} />}
            {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
            {/* <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} target={[0.1, 0, 0]} /> */}
            <OrbitControls makeDefault target={[0, 0, 0]} />
        </>
    )
}

function Mappa3D(props) {
    const headerColor = useSelector(function (state) {
        return state.headerColor.value.payload
    })

    return (
        <header className={headerColor} style={{ height: `50vh` }}>
            <Canvas camera={{ position: [0, 0.25, 0], fov: 30 }} dpr={[1, 2]}>
                {/* <pointLight position={[100, 100, 100]} intensity={0.8} /> */}
                {/* <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} /> */}
                <Suspense fallback={<Loading />}>
                    <group name='ketuppah' position={[0.0227, 0.025, -0.0155]} rotation={[0, Math.PI, 0]} visible={false}>
                        <Model name="tetto" />
                        <Model name="tetto001" />
                        <Model name="tetto002" />
                        <Model name="tetto003" />
                        <Model name="tetto004" />
                    </group>
                    <group position={[0.1, 0, -0.04]} rotation={[0, Math.PI, 0]}>

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
                <Controls />
            </Canvas>
        </header>
    );
}

export default Mappa3D;

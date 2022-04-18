import React, { useState, Suspense, useRef } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { proxy, useSnapshot } from 'valtio'
import * as THREE from 'three'
import { ContactShadows, useGLTF, useCursor } from '@react-three/drei'
import CameraControls from 'camera-controls';
CameraControls.install({ THREE })

const DEG90 = Math.PI * 0.5;
const DEG45 = Math.PI * 0.25;
const DEG06 = Math.PI * 0.06;


extend({ CameraControls })



const Controls = ({ target }) => {

    const ref = useRef()
    const camera = useThree((state) => state.camera)
    const gl = useThree((state) => state.gl)
    const scene = useThree((state) => state.scene)

    function paddingInCssPixel(cameraControls, mesh, top, right, bottom, left) {

        const fov = camera.fov * THREE.MathUtils.DEG2RAD;
        const rendererHeight = gl.getSize(new THREE.Vector2()).height;

        console.log("scene: ", scene)
        console.log("mesh: ", mesh)
        const meshObj = scene.getObjectByName(mesh)
        console.log("meshObj: ", meshObj)

        const boundingBox = new THREE.Box3().setFromObject(meshObj);
        const size = boundingBox.getSize(new THREE.Vector3());
        const boundingWidth = size.x;
        const boundingHeight = size.y;
        const boundingDepth = size.z;

        var distanceToFit = cameraControls.getDistanceToFitBox(boundingWidth, boundingHeight, boundingDepth);
        var paddingTop = 0;
        var paddingBottom = 0;
        var paddingLeft = 0;
        var paddingRight = 0;

        // loop to find almost convergence points
        for (var i = 0; i < 10; i++) {

            const depthAt = distanceToFit - boundingDepth * 0.5;
            const cssPixelToUnit = (2 * Math.tan(fov * 0.5) * Math.abs(depthAt)) / rendererHeight;
            paddingTop = top * cssPixelToUnit;
            paddingBottom = bottom * cssPixelToUnit;
            paddingLeft = left * cssPixelToUnit;
            paddingRight = right * cssPixelToUnit;

            distanceToFit = cameraControls.getDistanceToFitBox(
                boundingWidth + paddingLeft + paddingRight,
                boundingHeight + paddingTop + paddingBottom,
                boundingDepth
            );

        }

        cameraControls.fitToBox(meshObj, true, { paddingLeft: paddingLeft, paddingRight: paddingRight, paddingBottom: paddingBottom, paddingTop: paddingTop });

    }

    if (typeof (ref.current) !== "undefined")
        if (target === 'miao') {
            paddingInCssPixel(ref.current, 'perimetro_esterno', 10, 10, 10, 10);
            // ref.current.rotateTo(0, DEG90, true);
        }
        else {
            ref.current.rotateTo(DEG06, -1 * DEG45, true);
        }

    useFrame((state, delta) => ref.current.update(delta))
    return <cameraControls ref={ref} args={[camera, gl.domElement]} />
}


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

const Mappa3D = (props) => {
    const canvasRef = useRef()
    return <Canvas ref={canvasRef} camera={{ position: [0, 0.45, 0], fov: 10 }} dpr={[1, 2]} style={{ zIndex: -9999, position: 'relative' }}>
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
        <Controls {...props} />
    </Canvas>;
}



export default Mappa3D;

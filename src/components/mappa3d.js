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



const Controls = ({ target, setTarget, rotazione, canvasRef }) => {

    const ref = useRef()
    const camera = useThree((state) => state.camera)
    const gl = useThree((state) => state.gl)
    const scene = useThree((state) => state.scene)

    function paddingInCssPixel(cameraControls, mesh, top, right, bottom, left) {

        const fov = camera.fov * THREE.MathUtils.DEG2RAD;
        const rendererHeight = gl.getSize(new THREE.Vector2()).height;

        const meshObj = scene.getObjectByName(mesh)

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
    if (typeof (ref.current) !== "undefined") {
        paddingInCssPixel(ref.current, 'perimetro_esterno', 10, 10, 10, 10);
        if (rotazione != null) {
            ref.current.rotateTo(rotazione[0], rotazione[1], true);
        }

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
    "sala01": "#6f75af",
    "sala11": "#6f75af",
    "sala12": "#6f75af",
    "sala13": "#6f75af",
    "sala14": "#6f75af",
    "sala21": "#6f75af",
    "sala31": "#6f75af",
    "sala32": "#6f75af",
    "sala33": "#6f75af",
    "sala34": "#6f75af",
    "sala35": "#6f75af",
    "sala41": "#6f75af",
    "sala51": "#6f75af",
    "perimetro_esterno": "#253081",
}

let meshVisibile = {
    "tetto": false,
    "tetto001": false,
    "tetto002": false,
    "tetto003": false,
    "tetto004": false,
    "sala01": true,
    "sala11": true,
    "sala12": true,
    "sala13": true,
    "sala14": true,
    "sala21": true,
    "sala31": true,
    "sala32": true,
    "sala33": true,
    "sala34": true,
    "sala35": true,
    "sala41": true,
    "sala51": true,
    "perimetro_esterno": true,
}

const meshHoverable = {
    "tetto": false,
    "tetto001": false,
    "tetto002": false,
    "tetto003": false,
    "tetto004": false,
    "sala01": true,
    "sala11": true,
    "sala12": true,
    "sala13": true,
    "sala14": true,
    "sala21": true,
    "sala31": true,
    "sala32": true,
    "sala33": true,
    "sala34": true,
    "sala35": true,
    "sala41": true,
    "sala51": true,
    "perimetro_esterno": false,
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

const hotspotStore = {
    "outside": { color: 'lightpink', position: [0.0227, -0.004, -0.0155], url: '/2294472375_24a3b8ef46_o.jpg', link: 1 },
    "inside": { color: 'lightblue', position: [0.1, -0.004, -0.04], url: '/Photosphere1.jpg', link: 0 }
}

function Hotspot({ name, setPagina, ...props }) {
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)

    return (<mesh position={hotspotStore[name].position}
        onClick={(e) => { e.stopPropagation(); state.current = name; if (setPagina) setPagina(name); }}
        onPointerMissed={(e) => e.type === 'click' && (state.current = null)}
        onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
        }}
        onPointerOut={(e) => setHovered(false)}
        {...props}
        dispose={null}>
        <sphereGeometry args={[0.003, 32, 32]} />
        <meshBasicMaterial color="red" />
    </mesh>)
}

function Model({ name, setPagina, target, ...props }) {
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
            onClick={(e) => {
                if (meshVisibile[name]) {
                    e.stopPropagation();
                    if (setPagina) {
                        setPagina(name);
                    }
                    if (meshHoverable[name]) {
                        setHovered(true);
                        if (name !== "perimetro_esterno") state.current = name;
                    }
                }
            }}
            // If a click happened but this mesh wasn't hit we null out the target,
            // This works because missed pointers fire before the actual hits
            onPointerMissed={(e) => e.type === 'click' && (state.current = null)}
            onPointerOver={(e) => {
                if (meshHoverable[name]) {
                    e.stopPropagation();
                    setHovered(true);
                    if (name !== "perimetro_esterno") state.current = name;
                }
            }}
            onPointerOut={(e) => setHovered(false)}
            name={name}
            geometry={nodes[name].geometry}

            {...props}
            dispose={null}
        >
            <meshStandardMaterial
                attach="material"
                color={snap.current === name ? '#797ea2' : colori[name]}
                opacity={1.0}
                transparent
            />
        </mesh>
    )
}

const LuciDisco = ({ pulsing, ...props }) => {
    const lucegialla = useRef()
    const luceverde = useRef()
    const lucerossa = useRef()
    const luceblu = useRef()
    useFrame(({ clock }) => {
        if (pulsing) {
            lucegialla.current.intensity = 2 * ((clock.getElapsedTime() + 0.1) % 0.4);
            luceverde.current.intensity = 2 * ((clock.getElapsedTime() + 0.2) % 0.4);
            lucerossa.current.intensity = 2 * ((clock.getElapsedTime() + 0.3) % 0.4);
            luceblu.current.intensity = 2 * ((clock.getElapsedTime() + 0.4) % 0.4);
        } else {
            lucegialla.current.intensity = 2
            luceverde.current.intensity = 2
            lucerossa.current.intensity = 2
            luceblu.current.intensity = 2
        }
    })
    return <>
        <pointLight ref={lucerossa} position={[0.0535, -0.0025, -0.0155]} intensity={2} color="#ff0000" />
        <pointLight ref={luceblu} position={[0.05, -0.0025, -0.01]} intensity={2} color="#0000ff" />
        <pointLight ref={lucegialla} position={[0.05, -0.0025, -0.020]} intensity={2} color="#ffff00" />
        <pointLight ref={luceverde} position={[0.06, -0.0025, -0.0155]} intensity={2} color="#00ff00" />
    </>
}

const Mappa3D = (props) => {
    const canvasRef = useRef()
    console.log(props.target)
    if (props.target === 'chuppah') {
        console.log(props.target)
        meshVisibile["tetto"] = true
        meshVisibile["tetto001"] = true
        meshVisibile["tetto002"] = true
        meshVisibile["tetto003"] = true
        meshVisibile["tetto004"] = true
    } else {
        meshVisibile["tetto"] = false
        meshVisibile["tetto001"] = false
        meshVisibile["tetto002"] = false
        meshVisibile["tetto003"] = false
        meshVisibile["tetto004"] = false
    }

    return <Canvas ref={canvasRef} camera={{ position: [0, 0.45, 0], fov: 10 }} dpr={[1, 2]} style={{ zIndex: -9999, position: 'relative' }}>
        <pointLight position={[10, 10, 10]} intensity={2} />
        <LuciDisco pulsing={true} />
        {/*         <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} /> */}
        <Suspense fallback={<Loading />}>
            {/* <group name="hotspots">
                <Hotspot name="outside" setPagina={props.setPagina} />
                <Hotspot name="inside" setPagina={props.setPagina} />
            </group> */}
            <group name='ketuppah' position={[0.0227, 0.020, -0.0155]} rotation={[0, Math.PI, 0]} >
                <Model name="tetto" visible={meshVisibile["tetto"]} />
                <Model name="tetto001" visible={meshVisibile["tetto001"]} />
                <Model name="tetto002" visible={meshVisibile["tetto002"]} />
                <Model name="tetto003" visible={meshVisibile["tetto003"]} />
                <Model name="tetto004" visible={meshVisibile["tetto004"]} />
            </group>
            <group position={[0.1, -0.004, -0.04]} rotation={[0, Math.PI, 0]} scale={[1, 0.2, 1]}>
                <Model name="perimetro_esterno" />
            </group>
            <group position={[0.1, -0.005, -0.04]} rotation={[0, Math.PI, 0]}>
                <Model name="sala01" setPagina={props.setPagina} />
                <Model name="sala11" setPagina={props.setPagina} />
                <Model name="sala12" setPagina={props.setPagina} />
                <Model name="sala13" setPagina={props.setPagina} />
                <Model name="sala14" setPagina={props.setPagina} />
                <Model name="sala21" setPagina={props.setPagina} />
                <Model name="sala31" setPagina={props.setPagina} />
                <Model name="sala32" setPagina={props.setPagina} />
                <Model name="sala33" setPagina={props.setPagina} />
                <Model name="sala34" setPagina={props.setPagina} />
                <Model name="sala35" setPagina={props.setPagina} />
                <Model name="sala41" setPagina={props.setPagina} />
                <Model name="sala51" setPagina={props.setPagina} />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -1, 0]} opacity={0.25} width={200} height={200} blur={1} far={50} />
            </group>

        </Suspense>
        <Controls canvasRef={canvasRef} {...props} />
    </Canvas>;
}

export { DEG06, DEG45, DEG90 }

export default Mappa3D;

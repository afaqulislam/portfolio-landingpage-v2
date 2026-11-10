"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#A6FF00";
const VIEWBOX = 128;
const SCALE = 2.42 / VIEWBOX;

const toVector = (x: number, y: number, z = 0) =>
  new THREE.Vector3((x - 64) * SCALE, (64 - y) * SCALE, z);

type Stroke = {
  curve: THREE.Curve<THREE.Vector3>;
  caps: [THREE.Vector3, THREE.Vector3];
};

type StrokeGeometry = {
  outer: THREE.TubeGeometry;
  body: THREE.TubeGeometry;
  core: THREE.TubeGeometry;
  caps: [THREE.Vector3, THREE.Vector3];
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useGlowTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");

    if (!context) return null;

    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "rgba(166,255,0,0.72)");
    gradient.addColorStop(0.24, "rgba(166,255,0,0.26)");
    gradient.addColorStop(0.58, "rgba(166,255,0,0.075)");
    gradient.addColorStop(1, "rgba(166,255,0,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    return canvasTexture;
  }, []);

  useEffect(() => () => texture?.dispose(), [texture]);

  return texture;
}

function useMonogram() {
  const geometry = useMemo<StrokeGeometry[]>(() => {
    const aStart = toVector(32, 32);
    const aLeftEnd = toVector(16, 96);
    const aRightEnd = toVector(48, 96);
    const aBarStart = toVector(24, 66);
    const aBarEnd = toVector(40, 66);
    const iStart = toVector(92, 34);
    const iEnd = toVector(92, 96);

    const uStart = toVector(56, 80);
    const uTop = toVector(56, 90);
    const uBottom = toVector(82, 90);
    const uEnd = toVector(82, 80);
    const uCurve = new THREE.CurvePath<THREE.Vector3>();
    uCurve.add(new THREE.LineCurve3(uStart, uTop));
    uCurve.add(
      new THREE.CubicBezierCurve3(
        uTop,
        toVector(56, 98),
        toVector(82, 98),
        uBottom,
      ),
    );
    uCurve.add(new THREE.LineCurve3(uBottom, uEnd));

    const strokes: Stroke[] = [
      { curve: new THREE.LineCurve3(aStart, aLeftEnd), caps: [aStart, aLeftEnd] },
      {
        curve: new THREE.LineCurve3(aStart, aRightEnd),
        caps: [aStart, aRightEnd],
      },
      {
        curve: new THREE.LineCurve3(aBarStart, aBarEnd),
        caps: [aBarStart, aBarEnd],
      },
      { curve: uCurve, caps: [uStart, uEnd] },
      { curve: new THREE.LineCurve3(iStart, iEnd), caps: [iStart, iEnd] },
    ];

    return strokes.map(({ curve, caps }) => ({
      outer: new THREE.TubeGeometry(curve, 112, 0.106, 18, false),
      body: new THREE.TubeGeometry(curve, 112, 0.073, 18, false),
      core: new THREE.TubeGeometry(curve, 112, 0.026, 10, false),
      caps,
    }));
  }, []);

  const materials = useMemo(() => {
    const frame = new THREE.MeshStandardMaterial({
      color: "#151515",
      metalness: 1,
      roughness: 0.17,
      envMapIntensity: 2.1,
    });
    const casing = new THREE.MeshStandardMaterial({
      color: "#050505",
      metalness: 0.98,
      roughness: 0.16,
      envMapIntensity: 2,
    });
    const lime = new THREE.MeshPhysicalMaterial({
      color: ACCENT,
      emissive: ACCENT,
      emissiveIntensity: 0.46,
      metalness: 0.72,
      roughness: 0.14,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      envMapIntensity: 2.1,
    });
    const core = new THREE.MeshBasicMaterial({
      color: "#F1FFD2",
      toneMapped: false,
    });
    const card = new THREE.MeshPhysicalMaterial({
      color: "#050505",
      metalness: 0.58,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 2.2,
      iridescence: 0.22,
      iridescenceIOR: 1.32,
      iridescenceThicknessRange: [120, 420],
    });
    const rim = new THREE.MeshStandardMaterial({
      color: ACCENT,
      emissive: ACCENT,
      emissiveIntensity: 0.72,
      metalness: 0.54,
      roughness: 0.22,
      envMapIntensity: 1.6,
    });
    const ring = new THREE.MeshStandardMaterial({
      color: "#C9CFC0",
      emissive: ACCENT,
      emissiveIntensity: 0.12,
      metalness: 1,
      roughness: 0.14,
      envMapIntensity: 2.2,
    });
    const glow = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    return { frame, casing, lime, core, card, rim, ring, glow };
  }, []);

  useEffect(
    () => () => {
      geometry.forEach(({ outer, body, core }) => {
        outer.dispose();
        body.dispose();
        core.dispose();
      });
      Object.values(materials).forEach((material) => material.dispose());
    },
    [geometry, materials],
  );

  return { geometry, materials };
}

function OrbitRings({
  reducedMotion,
  materials,
}: {
  reducedMotion: boolean;
  materials: ReturnType<typeof useMonogram>["materials"];
}) {
  const nearRing = useRef<THREE.Group>(null);
  const farRing = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    if (nearRing.current) {
      nearRing.current.rotation.z += delta * 0.18;
    }
    if (farRing.current) {
      farRing.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <group position={[0, 0, -0.34]}>
      <group rotation={[0.2, 0.48, 0.06]}>
        <group ref={nearRing}>
          <mesh material={materials.ring}>
            <torusGeometry args={[1.56, 0.0075, 10, 192]} />
          </mesh>
          <mesh
            position={[1.56, 0, 0]}
            material={materials.lime}
          >
            <sphereGeometry args={[0.043, 18, 18]} />
          </mesh>
          <mesh
            position={[1.56, 0, 0]}
            material={materials.glow}
          >
            <sphereGeometry args={[0.12, 16, 16]} />
          </mesh>
        </group>
      </group>

      <group rotation={[-0.3, -0.62, 0.22]}>
        <group ref={farRing}>
          <mesh material={materials.frame}>
            <torusGeometry args={[1.78, 0.0055, 8, 192]} />
          </mesh>
          <mesh position={[1.78, 0, 0]} material={materials.rim}>
            <sphereGeometry args={[0.032, 16, 16]} />
          </mesh>
          <mesh position={[1.78, 0, 0]} material={materials.glow}>
            <sphereGeometry args={[0.09, 14, 14]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Monogram({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { geometry, materials } = useMonogram();
  const glowTexture = useGlowTexture();
  const dot = useMemo(() => toVector(92, 25), []);

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;
    const targetY = reducedMotion
      ? 0
      : Math.sin(t * 0.34) * 0.16 + state.pointer.x * 0.08;
    const targetX = reducedMotion
      ? 0
      : Math.sin(t * 0.25) * 0.035 - state.pointer.y * 0.05;
    const targetOffsetY = reducedMotion ? 0 : Math.sin(t * 0.42) * 0.028;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      5,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      5,
      delta,
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      targetOffsetY,
      5,
      delta,
    );
  });

  return (
    <group ref={group} rotation={[0, -0.08, 0]}>
      {glowTexture ? (
        <mesh position={[0, 0, -0.55]} scale={[4.1, 4.1, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={glowTexture}
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ) : null}

      <OrbitRings reducedMotion={reducedMotion} materials={materials} />

      <RoundedBox
        args={[2.7, 2.7, 0.18]}
        radius={0.35}
        smoothness={10}
        position={[0, 0, -0.03]}
      >
        <primitive object={materials.frame} attach="material" />
      </RoundedBox>

      <RoundedBox
        args={[2.59, 2.59, 0.13]}
        radius={0.335}
        smoothness={10}
        position={[0, 0, 0.075]}
      >
        <primitive object={materials.rim} attach="material" />
      </RoundedBox>

      <RoundedBox
        args={[2.47, 2.47, 0.17]}
        radius={0.315}
        smoothness={10}
        position={[0, 0, 0.16]}
      >
        <primitive object={materials.card} attach="material" />
      </RoundedBox>

      {geometry.map((stroke, index) => (
        <group key={index}>
          <mesh
            geometry={stroke.outer}
            material={materials.casing}
            position={[0, 0, 0.27]}
          />
          <mesh
            geometry={stroke.body}
            material={materials.lime}
            position={[0, 0, 0.32]}
          />
          <mesh
            geometry={stroke.core}
            material={materials.core}
            position={[0, 0, 0.354]}
          />
          {stroke.caps.map((cap, capIndex) => (
            <group key={capIndex}>
              <mesh
                position={[cap.x, cap.y, 0.27]}
                material={materials.casing}
              >
                <sphereGeometry args={[0.106, 18, 18]} />
              </mesh>
              <mesh
                position={[cap.x, cap.y, 0.32]}
                material={materials.lime}
              >
                <sphereGeometry args={[0.073, 18, 18]} />
              </mesh>
              <mesh
                position={[cap.x, cap.y, 0.354]}
                material={materials.core}
              >
                <sphereGeometry args={[0.026, 10, 10]} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      <mesh position={[dot.x, dot.y, 0.29]} material={materials.glow}>
        <sphereGeometry args={[0.245, 24, 24]} />
      </mesh>
      <mesh position={[dot.x, dot.y, 0.27]} material={materials.casing}>
        <sphereGeometry args={[0.108, 20, 20]} />
      </mesh>
      <mesh position={[dot.x, dot.y, 0.32]} material={materials.lime}>
        <sphereGeometry args={[0.074, 20, 20]} />
      </mesh>
      <mesh position={[dot.x, dot.y, 0.354]} material={materials.core}>
        <sphereGeometry args={[0.026, 10, 10]} />
      </mesh>

      <pointLight
        position={[0.52, 0.72, 0.72]}
        intensity={2.8}
        color={ACCENT}
        distance={2.4}
        decay={2}
      />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight
        position={[3.5, 4.5, 5]}
        intensity={2.7}
        color="#ffffff"
      />
      <directionalLight
        position={[-4, -2, 3]}
        intensity={1.35}
        color="#DDE5D2"
      />
      <directionalLight
        position={[0, -4, 2]}
        intensity={0.65}
        color={ACCENT}
      />
      <pointLight
        position={[-2, -1.4, 2.8]}
        intensity={14}
        color={ACCENT}
        distance={8}
        decay={2}
      />
      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={5}
          color="#ffffff"
          position={[0, 3, -3]}
          scale={[5, 1.4, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2.8}
          color={ACCENT}
          position={[3.4, -1.2, 2]}
          scale={[1.3, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color="#E5E9DE"
          position={[-3.6, 1.2, 1.5]}
          scale={[1.1, 2.8, 1]}
        />
        <Lightformer
          form="rect"
          intensity={3.2}
          color="#ffffff"
          position={[0, -0.4, 4]}
          scale={[4, 0.4, 1]}
        />
        <Lightformer
          form="ring"
          intensity={3.4}
          color="#ffffff"
          position={[0, 3.2, 2]}
          scale={2}
        />
      </Environment>
    </>
  );
}

export default function HeroLogoScene() {
  const reducedMotion = useReducedMotion();

  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0.1, 5.4], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Monogram reducedMotion={reducedMotion} />
        <Lights />
        <Sparkles
          count={34}
          scale={[3.3, 3.3, 1.4]}
          size={1.7}
          speed={reducedMotion ? 0 : 0.18}
          opacity={0.55}
          color={ACCENT}
          noise={0.3}
        />
        <ContactShadows
          position={[0, -1.52, 0.05]}
          opacity={0.52}
          scale={4.6}
          blur={2.7}
          far={4}
          resolution={256}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}

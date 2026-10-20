"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  const isNosotros = pathname === "/nosotros" || pathname?.startsWith("/nosotros");

  useEffect(() => {
    if (isNosotros) return;

    let scene: any;
    let camera: any;
    let renderer: any;
    let cubes: any[] = [];
    let time = 0;
    let animationId: number;

    const init = async () => {
      const THREE = await import("three");

      // Scene setup
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x0a0a0f, 10, 15);

      // Camera
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x0a0a0f, 1);

      // Helper functions
      function randint(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
      }

      function RGB(r: number, g: number, b: number) {
        function colorcheck(c: number) {
          if (c > 255) c = 255;
          if (c < 0) c = 0;
          return c;
        }
        r = colorcheck(r);
        g = colorcheck(g);
        b = colorcheck(b);
        return "rgb(" + r + "," + g + "," + b + ")";
      }

      function rgb2hex(rgb: string) {
        const match = rgb.match(
          /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
        );
        return match && match.length === 4
          ? "0x" +
              ("0" + parseInt(match[1], 10).toString(16)).slice(-2) +
              ("0" + parseInt(match[2], 10).toString(16)).slice(-2) +
              ("0" + parseInt(match[3], 10).toString(16)).slice(-2)
          : "";
      }

      function rgb2color(r: number, g: number, b: number) {
        return rgb2hex(RGB(r, g, b));
      }

      function sin(t: number, h: number) {
        return Math.sin(t) * h;
      }

      // Create cubes grid
      for (let x = -6; x <= 6; x++) {
        for (let z = -6; z <= 6; z++) {
          const cube: any = [];
          const geometry = new THREE.BoxGeometry(1, 1, 1, 6, 6, 6);
          const smooth = geometry.clone();

          // Call360 brand colors: cyan, violet, amber
          const colorChoice = Math.random();
          let ccolor: string;
          if (colorChoice > 0.85) {
            ccolor = "#06b6d4"; // cyan
            cube.colored = true;
          } else if (colorChoice > 0.7) {
            ccolor = "#8b5cf6"; // violet
            cube.colored = true;
          } else if (colorChoice > 0.55) {
            ccolor = "#f59e0b"; // amber
            cube.colored = true;
          } else {
            ccolor = "#12121a"; // dark
            cube.colored = false;
          }

          cube.material = new THREE.MeshPhongMaterial({
            color: ccolor,
            transparent: true,
            opacity: cube.colored ? 0.9 : 0.3,
          });
          cube.mesh = new THREE.Mesh(smooth, cube.material);
          scene.add(cube.mesh);
          cube.mesh.position.x = x;
          cube.mesh.position.z = z;
          cube.height = randint(1, 10) / 10;
          cube.aniOffset = randint(1, 400) / 100;
          cubes.push(cube);
        }
      }

      // Lights
      for (let x = -5; x <= 5; x += 5) {
        for (let z = -5; z <= 5; z += 5) {
          const light = new THREE.PointLight("white", 0.8, 7.5);
          light.position.set(x, 2, z);
          scene.add(light);
        }
      }

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      // Camera position
      camera.position.y = 8;
      camera.position.x = 6;
      camera.position.z = 4;
      const lookAt = new THREE.Vector3(0, 0, 0);
      camera.lookAt(lookAt);

      // Color animation state
      const color = {
        r: 6,
        g: 182,
        b: 212, // Start with cyan
        rs: 0,
        gs: 0,
        bs: 0,
        rt: 139,
        gt: 92,
        bt: 246, // Target violet
      };

      // Animation loop
      function mainloop() {
        time += 1;

        // Camera movement
        camera.position.y += sin(time * 0.005 + 10, 0.005);
        camera.position.x += sin(time * 0.004 + 5, 0.005);
        camera.position.z += sin(time * 0.006, 0.005);
        camera.rotation.z += sin(time * 0.0045 + 15, 0.002);
        camera.lookAt(lookAt);

        // Color transition
        if (Math.abs(color.r - color.rt) >= 5) {
          color.r += color.rs;
        }
        if (Math.abs(color.g - color.gt) >= 5) {
          color.g += color.gs;
        }
        if (Math.abs(color.b - color.bt) >= 5) {
          color.b += color.bs;
        }
        if (
          Math.abs(color.r - color.rt) < 5 &&
          Math.abs(color.g - color.gt) < 5 &&
          Math.abs(color.b - color.bt) < 5
        ) {
          // New target colors (Call360 palette)
          const targets = [
            { r: 6, g: 182, b: 212 },   // cyan
            { r: 139, g: 92, b: 246 },   // violet
            { r: 245, g: 158, b: 11 },   // amber
            { r: 16, g: 185, b: 129 },   // emerald
          ];
          const target = targets[Math.floor(Math.random() * targets.length)];
          color.rt = target.r;
          color.gt = target.g;
          color.bt = target.b;

          const divisor = 20;
          color.rs =
            color.rt > color.r
              ? randint(5, 45) / divisor
              : -randint(5, 45) / divisor;
          color.gs =
            color.gt > color.g
              ? randint(5, 45) / divisor
              : -randint(5, 45) / divisor;
          color.bs =
            color.bt > color.b
              ? randint(5, 45) / divisor
              : -randint(5, 45) / divisor;
        }

        const r = Math.round(color.r);
        const g = Math.round(color.g);
        const b = Math.round(color.b);

        // Animate cubes
        for (let i = 0; i < cubes.length; i++) {
          const cube = cubes[i];
          cube.mesh.position.y = sin(time / 100 + cube.aniOffset, cube.height);
          if (cube.colored) {
            cube.mesh.material.color.setHex(rgb2color(r, g, b));
          }
        }

        renderer.render(scene, camera);
        animationId = requestAnimationFrame(mainloop);
      }

      mainloop();

      // Resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
      };
    };

    init();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [isNosotros]);

  if (isNosotros) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
}

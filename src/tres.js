import "./assets/perlin";
import "three-orbitcontrols";

(function() {
	const canvas = document.querySelector("#tres");
	let width = window.innerWidth;
	let height = window.innerHeight;

	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
	});
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
	renderer.setSize(width, height);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		30,
		window.innerWidth / window.innerHeight,
		1,
		10000
	);
	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	camera.position.set(0, 200, 0);
	controls.update();
	const sphere = new THREE.Group();
	scene.add(sphere);
	const material = new THREE.LineBasicMaterial({
		color: 0x000000,
	});

	console.log(camera.position);

	const linesAmount = 30;
	const radius = 100;
	const verticesAmount = 100;
	for (let j = 0; j < linesAmount; j++) {
		const index = j;
		const geometry = new THREE.Geometry();
		geometry.y = (index / linesAmount) * radius * 2;
		for (let i = 0; i <= verticesAmount; i++) {
			const vector = new THREE.Vector3();
			vector.x = Math.cos((i / verticesAmount) * Math.PI * 2);
			vector.z = Math.sin((i / verticesAmount) * Math.PI * 2);
			vector._o = vector.clone();
			geometry.vertices.push(vector);
		}
		const line = new THREE.Line(geometry, material);
		sphere.add(line);
	}

	function updateVertices(a) {
		for (let j = 0; j < sphere.children.length; j++) {
			const line = sphere.children[j];
			line.geometry.y += 0.1;
			if (line.geometry.y > radius * 2) {
				line.geometry.y = 0;
			}
			const radiusHeight = Math.sqrt(
				line.geometry.y * (2 * radius - line.geometry.y)
			);
			for (let i = 0; i <= verticesAmount; i++) {
				const vector = line.geometry.vertices[i];
				const ratio =
					noise.simplex3(
						vector.x * 0.009,
						vector.z * 0.009 + a * 0.0006,
						line.geometry.y * 0.009
					) * 20;
				vector.copy(vector._o);
				vector.multiplyScalar(radiusHeight + ratio);
				vector.y = line.geometry.y - radius;
			}
			line.geometry.verticesNeedUpdate = true;
		}
	}

	function render(a) {
		requestAnimationFrame(render);
		controls.update();
		updateVertices(a);
		renderer.render(scene, camera);
		//     renderer.render();
	}

	function onResize() {
		canvas.style.width = "";
		canvas.style.height = "";
		width = window.innerWidth;
		height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	requestAnimationFrame(render);
	let resizeTm;
	window.addEventListener("resize", function() {
		resizeTm = clearTimeout(resizeTm);
		resizeTm = setTimeout(onResize, 10);
	});

	$("#title h1").hover(() => {
		$("#tres")
			.css("display", "block")
			.hide()
			.fadeIn(200);
	});

	$("#title h1").mouseout(() => {
		$("#tres").fadeOut(200);
	});

	// window.addEventListener( 'resize', onWindowResize, false );

	// function onWindowResize(){

	// camera.aspect = window.innerWidth / window.innerHeight;
	// camera.updateProjectionMatrix();

	// renderer.setSize( window.innerWidth, window.innerHeight );

	// }
	// camera.rotation.set(0, 90, 100);
})();

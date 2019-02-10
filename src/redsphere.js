import './assets/perlin.js'
import 'three-orbitcontrols'

;(function() {
    var canvas = document.querySelector('#redsphere');
    var width = window.innerWidth, 
        height = window.innerHeight;
    
    
    var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000);
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    camera.position.set(0, 200, 0);
    controls.update();
    var sphere = new THREE.Group();
    scene.add(sphere);
    var colorRed = new THREE.Color(0xff0000);
    var colorBlack = new THREE.Color(0x000000);
    var material = new THREE.LineBasicMaterial({
        color: colorRed,

    });
    
    console.log(camera.position);


  

    
    var linesAmount = 30;
    var radius = 200;
    var verticesAmount = 100;
    for(var j=0;j<linesAmount;j++){
        var index = j;
        var geometry = new THREE.Geometry();
        geometry.y = (index/linesAmount) * radius*2;
        for(var i=0;i<=verticesAmount;i++) {
            var vector = new THREE.Vector3();
            vector.x = Math.cos(i/verticesAmount * Math.PI*2);
            vector.z = Math.sin(i/verticesAmount * Math.PI*2);
            vector._o = vector.clone();
            geometry.vertices.push(vector);
        }
        var line = new THREE.Line(geometry, material);
        sphere.add(line);
    }
    
    
    function updateVertices (a) {
     for(var j=0;j<sphere.children.length;j++){
         var line = sphere.children[j];
         line.geometry.y += 0.1;
         if(line.geometry.y > radius*2) {
             line.geometry.y = 0;
         }
         var radiusHeight = Math.sqrt(line.geometry.y * (2*radius-line.geometry.y));
         for(var i=0;i<=verticesAmount;i++) {
             var vector = line.geometry.vertices[i];
                var ratio = noise.simplex3(vector.x*0.009, vector.z*0.009 + a*0.0006, line.geometry.y*0.009) * 10;
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
        renderer.render(scene, camera );
    //     renderer.render();
    }
    
    function onResize() {
        canvas.style.width = '';
        canvas.style.height = '';
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();  
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    requestAnimationFrame(render);
    var resizeTm;
    window.addEventListener("resize", function(){
        resizeTm = clearTimeout(resizeTm);
        resizeTm = setTimeout(onResize, 10);
    });

    $("#title h1").hover( () => {
        material.color = colorBlack;
        $(".wrapper").css("background","#c60000");
        $("#redsphere").fadeOut(300);
        // $("#tres").css("display", "block").hide().fadeIn();
        $("h1").fadeOut(300, () => {
            $("h1").text("OI. I'M VIC.").css("color","#000000").fadeIn();
        }) 
    });
    
    
    $("#title h1").mouseout( () => {
        material.color = colorRed;
        $(".wrapper").css("background","#121212");
        $("#redsphere").css("display", "block").hide().fadeIn();
        // $("#tres").fadeOut(300);
        $("h1").fadeOut(300, () => {
            $("h1").text("VIC SIDIOUS").css("color","red").fadeIn();
        })
    
    });


    // window.addEventListener( 'resize', onWindowResize, false );
    
    // function onWindowResize(){
    
    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();
    
    // renderer.setSize( window.innerWidth, window.innerHeight );
    
    // }
    // camera.rotation.set(0, 90, 100);

      })()

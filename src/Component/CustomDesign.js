import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Dropdown, Form, Button, InputGroup } from 'react-bootstrap';
import  './custome.css';
//import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { event } from 'jquery';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

function CustomDesign() {
  const [color, setColor] = useState("#ffffff");
  const canvasRef = useRef(null);
  let loader;
  var scene;
  var renderer;
  var camera;
  var controls;
  var floor;
  var floorPosition;
  var movingObject;
  var obj;
  var rightwall;
  var lefttwall;
  var opositewall;
  var doorandwindows;
  var otherObjects = true;
  var deleteObject;
  var light5;
  var roofColorObj;
  var frontWallBox;
  var lefttwallBox;
  var rightwallBox;
  var opositewallBox;
  var frontWallCheck =true;
  var lefttwallCheck = false;
  var rightwallCheck = false;
  var opositewallCheck = false;
  const frustum = new THREE.Frustum();
  const cameraViewProjectionMatrix = new THREE.Matrix4();

  function updateFrustum(camera) {
    camera.updateMatrixWorld(); // Ensure the camera's world matrix is updated
    cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
  }

  function calculateObjectBoundingSphere(object) {
    const boundingBox = new THREE.Box3().setFromObject(object);
    const boundingSphere = new THREE.Sphere();
    boundingBox.getBoundingSphere(boundingSphere);
    object.boundingSphere = boundingSphere;
  }

  function isObjectInFrustum(object) {
    if (!object.boundingSphere) {
      calculateObjectBoundingSphere(object);
    }
    object.updateMatrixWorld(); // Ensure the object's world matrix is updated
    return frustum.intersectsObject(object);
  }
  

  const arr = [
    
    {
      name: "Doors",
      items: [{
        name: "Double Side Steel Door",
        clickHandler: () => {console.log("Loading Item 1 under Door")
        loader.load('Models/door/1.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = .2;
          windowMesh.scale.y = .2;
          windowMesh.scale.z = .3;
          windowMesh.position.x =0;
          windowMesh.position.y =0;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Double Side Glass Door",
        clickHandler: () => {console.log("Loading Item 2 under Door")
        loader.load('Models/door/2.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = .2;
          windowMesh.scale.y = .2;
          windowMesh.scale.z = .3;
          windowMesh.position.x =0;
          windowMesh.position.y =0;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Double Side Wood Door",
        clickHandler: () => {console.log("Loading Item 3 under Door")
        loader.load('Models/door/3.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = .2;
          windowMesh.scale.y = .2;
          windowMesh.scale.z = .3;
          windowMesh.position.x =0;
          windowMesh.position.y =0;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Painted Wood Door",
        clickHandler: () => {console.log("Loading Item 4 under Door")
        loader.load('Models/door/4.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = .4;
          windowMesh.scale.y = .2;
          windowMesh.scale.z = .3;
          windowMesh.position.x =0;
          windowMesh.position.y =0;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Wood Door",
        clickHandler: () => {console.log("Loading Item 5 under Door")
        loader.load('Models/door/5.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = .4;
          windowMesh.scale.y = .2;
          windowMesh.scale.z = .3;
          windowMesh.position.x =0;
          windowMesh.position.y =0;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
      name: "Windows",
      items: [{
        name: "Woodpaper Window",
        clickHandler: () => {console.log("Loading Item 1 under window")
        loader.load('Models/window/1/Project Name.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = 4;
          windowMesh.scale.y = 4;
          windowMesh.scale.z = 5;
          windowMesh.position.x =0;
          windowMesh.position.y =.1;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Woodpaper Grey Window",
        clickHandler: () => {console.log("Loading Item 2 under window")
        loader.load('Models/window/2/Project Name.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = 4;
          windowMesh.scale.y = 4;
          windowMesh.scale.z = 5;
          windowMesh.position.x =0;
          windowMesh.position.y =.1;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Updown Window",
        clickHandler: () => {console.log("Loading Item 3 under window")
        loader.load('Models/window/3/Project Name/Project Name.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = 444;
          windowMesh.scale.y = 444;
          windowMesh.scale.z = 555;
          windowMesh.position.x =0;
          windowMesh.position.y =.1;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Black Glass Window",
        clickHandler: () => {console.log("Loading Item 4 under window")
        loader.load('Models/window/4/Project Name.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = 44;
          windowMesh.scale.y = 44;
          windowMesh.scale.z = 50;
          windowMesh.position.x =0;
          windowMesh.position.y =.1;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Brown Glass Window",
        clickHandler: () => {console.log("Loading Item 5 under window")
        loader.load('Models/window/5/Project Name/Project Name.gltf',function(gltf){
          const windowMesh = gltf.scene;
          console.log("windowmesh:"+windowMesh);
          windowMesh.scale.x = 44;
          windowMesh.scale.y = 44;
          windowMesh.scale.z = 50;
          windowMesh.position.x =0;
          windowMesh.position.y =.1;
          windowMesh.position.z =.1;
          const window2 = windowMesh.clone();
          window2.position.z = -.1;
          const group  = new THREE.Group();
          group.add(windowMesh);
          group.add(window2);
          doorandwindows = group;
          otherObjects = false;
          obj.add(group);
          if (isObjectInFrustum(group)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
      name: "Chair",
      items: [{
        name: "Blue Cushion Chair",
        clickHandler: () => {console.log("Loading Item 1 under Chair")
        loader.load('Models/Chairs/Project chair1.gltf.glb',function(gltf){
          console.log(gltf);
          var chair = gltf.scene;
          chair.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          chair.scale.x =50;
          chair.scale.y =50;
          chair.scale.z =50;
          chair.position.z += 10;
          chair.rotateY(-Math.PI/2);
          movingObject = chair;
          otherObjects = true;
          scene.add(chair);
          if (isObjectInFrustum(chair)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Black Cushion Chair",
        clickHandler: () => {console.log("Loading Item 2 under Chair")
        loader.load('Models/Chairs/Project chair2.gltf.glb',function(gltf){
          console.log(gltf);
          var chair = gltf.scene;
          chair.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          chair.scale.x =50;
          chair.scale.y =50;
          chair.scale.z =50;
          chair.position.z += 10;
          chair.rotateY(-Math.PI/2);
          movingObject = chair;
          otherObjects = true;
          scene.add(chair);
          if (isObjectInFrustum(chair)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Sofa Inherited Chair",
        clickHandler: () => {console.log("Loading Item 3 under Chair")
        loader.load('Models/Chairs/Project chair 3.gltf.glb',function(gltf){
          console.log(gltf);
          var chair = gltf.scene;
          chair.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          chair.scale.x =5;
          chair.scale.y =5;
          chair.scale.z =5;
          chair.position.z += 10;
          chair.rotateY(-Math.PI/2);
          movingObject = chair;
          otherObjects = true;
          scene.add(chair);
          if (isObjectInFrustum(chair)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Relaxing Wood Chair",
        clickHandler: () => {console.log("Loading Item 4 under Chair")
        loader.load('Models/Chairs/Project chair 4/Project Name.gltf',function(gltf){
          console.log(gltf);
          var chair = gltf.scene;
          chair.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          chair.scale.x =50;
          chair.scale.y =40;
          chair.scale.z =50;
          chair.position.z += 10;
          chair.rotateY(-Math.PI/2);
          movingObject = chair;
          otherObjects = true;
          scene.add(chair);
          if (isObjectInFrustum(chair)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Couple Chairs",
        clickHandler: () => {console.log("Loading Item 5 under Chair")
        loader.load('Models/Chairs/Project chair_5/Project Name.gltf',function(gltf){
          console.log(gltf);
          var chair = gltf.scene;
          chair.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          chair.scale.x =500;
          chair.scale.y =500;
          chair.scale.z =500;
          chair.position.z += 10;
          chair.rotateY(-Math.PI/2);
          movingObject = chair;
          otherObjects = true;
          scene.add(chair);
          if (isObjectInFrustum(chair)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
      name: "Table",
      items: [{
        name: "Dark Brown Wood Table",
        clickHandler: () => {console.log("Loading Item 1 under Table")
        loader.load('Models/table/table 1/Project Name.gltf',function(gltf){
          console.log(gltf);
          var table = gltf.scene;
          table.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          table.scale.x =8;
          table.scale.y =8;
          table.scale.z =6;
          table.position.z += 10;
          table.rotateY(-Math.PI/2);
          movingObject = table;
          otherObjects = true;
          scene.add(table);
          if (isObjectInFrustum(table)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Painted Table",
        clickHandler: () => {console.log("Loading Item 2 under Table")
        loader.load('Models/table/table 2/Project Name.gltf',function(gltf){
          console.log(gltf);
          var table = gltf.scene;
          table.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          table.scale.x =.1;
          table.scale.y =.1;
          table.scale.z =.1;
          table.position.z += 10;
          table.rotateY(-Math.PI/2);
          movingObject = table;
          otherObjects = true;
          scene.add(table);
          if (isObjectInFrustum(table)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Blue Plan Table",
        clickHandler: () => {console.log("Loading Item 3 under Table")
        loader.load('Models/table/table 3/Project Name.gltf',function(gltf){
          console.log(gltf);
          var table = gltf.scene;
          table.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          table.scale.x =28;
          table.scale.y =28;
          table.scale.z =28;
          table.position.z += 10;
          table.rotateY(-Math.PI/2);
          movingObject = table;
          otherObjects = true;
          scene.add(table);
          if (isObjectInFrustum(table)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Dark Blue Plan Table",
        clickHandler: () => {console.log("Loading Item 4 under Table")
        loader.load('Models/table/table 4/Project Name.gltf',function(gltf){
          console.log(gltf);
          var table = gltf.scene;
          table.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          table.scale.x =28;
          table.scale.y =28;
          table.scale.z =28;
          table.position.z += 10;
          table.rotateY(-Math.PI/2);
          movingObject = table;
          otherObjects = true;
          scene.add(table);
          if (isObjectInFrustum(table)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Glass Plan Table",
        clickHandler: () => {console.log("Loading Item 5 under Table")
        loader.load('Models/table/table 5/Project Name.gltf',function(gltf){
          console.log(gltf);
          var table = gltf.scene;
          table.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          table.scale.x =28;
          table.scale.y =28;
          table.scale.z =28;
          table.position.z += 10;
          table.rotateY(-Math.PI/2);
          movingObject = table;
          otherObjects = true;
          scene.add(table);
          if (isObjectInFrustum(table)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
      name: "Dinning Table",
      items: [{
        name: "Blue Dinning Table With Light",
        clickHandler: () => {console.log("Loading Item 1 under Dinning Table")
        loader.load('Models/dinning table/1/Project Name.gltf',function(gltf){
          console.log(gltf);
          var dinningTable = gltf.scene;
          dinningTable.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          dinningTable.scale.x =3.5;
          dinningTable.scale.y =3.5;
          dinningTable.scale.z =3.5;
          dinningTable.position.z += 10;
          dinningTable.rotateY(-Math.PI/2);
          movingObject = dinningTable;
          otherObjects = true;
          scene.add(dinningTable);
          if (isObjectInFrustum(dinningTable)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "4 Person Dinning Table",
        clickHandler: () => {console.log("Loading Item 2 under Dinning Table")
        loader.load('Models/dinning table/2/Project Name.gltf',function(gltf){
          console.log(gltf);
          var dinningTable = gltf.scene;
          dinningTable.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          dinningTable.scale.x =22;
          dinningTable.scale.y =22;
          dinningTable.scale.z =22;
          dinningTable.position.z += 10;
          dinningTable.rotateY(-Math.PI/2);
          movingObject = dinningTable;
          otherObjects = true;
          scene.add(dinningTable);
          if (isObjectInFrustum(dinningTable)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Dark Blue 4 Person Dinning Table",
        clickHandler: () => {console.log("Loading Item 3 under Dinning Table")
        loader.load('Models/dinning table/3/Project Name.gltf',function(gltf){
          console.log(gltf);
          var dinningTable = gltf.scene;
          dinningTable.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          dinningTable.scale.x =22;
          dinningTable.scale.y =22;
          dinningTable.scale.z =22;
          dinningTable.position.z += 10;
          dinningTable.rotateY(-Math.PI/2);
          movingObject = dinningTable;
          otherObjects = true;
          scene.add(dinningTable);
          if (isObjectInFrustum(dinningTable)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Adjustible Dinning Table",
        clickHandler: () => {console.log("Loading Item 4 under Dinning Table")
        // loader.load('Models/cupboard/4/Project Name (1)/Project Name.gltf',function(gltf){
        //   console.log(gltf);
        //   var cupboard = gltf.scene;
        //   cupboard.traverse(function(child){
        //     child.userData.selectable = true;
        //     child.layers.set(0);
        //   });
        //   cupboard.scale.x =30;
        //   cupboard.scale.y =30;
        //   cupboard.scale.z =30;
        //   cupboard.position.z += 10;
        //   cupboard.rotateY(-Math.PI/2);
        //   movingObject = cupboard;
        //   scene.add(cupboard);
        //   animate();
        // });
      
        },
      },
      {
        name: "4 Person Plan Dinning Table",
        clickHandler: () => {console.log("Loading Item 5 under Dinning Table")
        loader.load('Models/dinning table/5/Project Name.gltf',function(gltf){
          console.log(gltf);
          var dinningTable = gltf.scene;
          dinningTable.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          dinningTable.scale.x =3.5;
          dinningTable.scale.y =3.5;
          dinningTable.scale.z =3.5;
          dinningTable.position.z += 10;
          dinningTable.rotateY(-Math.PI/2);
          movingObject = dinningTable;
          otherObjects = true;
          scene.add(dinningTable);
          if (isObjectInFrustum(dinningTable)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
      name: "Cupboard",
      items: [{
        name: "Green Shaded Cupboard",
        clickHandler: () => {console.log("Loading Item 1 under cubboard")
        loader.load('Models/cupboard/1/Project Name/Project Name.gltf',function(gltf){
          console.log(gltf);
          var cupboard = gltf.scene;
          cupboard.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          cupboard.scale.x =25;
          cupboard.scale.y =25;
          cupboard.scale.z =25;
          cupboard.position.z += 10;
          cupboard.rotateY(-Math.PI/2);
          movingObject = cupboard;
          otherObjects = true;
          scene.add(cupboard);
          if (isObjectInFrustum(cupboard)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Green Shaded Plan Cupboard",
        clickHandler: () => {console.log("Loading Item 2 under cubboard")
        loader.load('Models/cupboard/2/Project Name.gltf',function(gltf){
          console.log(gltf);
          var cupboard = gltf.scene;
          cupboard.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          cupboard.scale.x =900;
          cupboard.scale.y =900;
          cupboard.scale.z =900;
          cupboard.position.z += 10;
          cupboard.rotateY(-Math.PI/2);
          movingObject = cupboard;
          otherObjects = true;
          scene.add(cupboard);
          if (isObjectInFrustum(cupboard)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Parrot Shaded Cupboard",
        clickHandler: () => {console.log("Loading Item 3 under cubboard")
        loader.load('Models/cupboard/3/Project Name/Project Name.gltf',function(gltf){
          console.log(gltf);
          var cupboard = gltf.scene;
          cupboard.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          cupboard.scale.x =30;
          cupboard.scale.y =30;
          cupboard.scale.z =30;
          cupboard.position.z += 10;
          cupboard.rotateY(-Math.PI/2);
          movingObject = cupboard;
          otherObjects = true;
          scene.add(cupboard);
          if (isObjectInFrustum(cupboard)) {
            animate();
          }
        });
  
        },
      },
      {
        name: "Black Shaded Cupboard",
        clickHandler: () => {console.log("Loading Item 4 under cubboard")
        loader.load('Models/cupboard/4/Project Name (1)/Project Name.gltf',function(gltf){
          console.log(gltf);
          var cupboard = gltf.scene;
          cupboard.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          cupboard.scale.x =30;
          cupboard.scale.y =30;
          cupboard.scale.z =30;
          cupboard.position.z += 10;
          cupboard.rotateY(-Math.PI/2);
          movingObject = cupboard;
          otherObjects = true;
          scene.add(cupboard);
          if (isObjectInFrustum(cupboard)) {
            animate();
          }
        });
      
        },
      },
      {
        name: "Dark Blue Shaded Cupboard",
        clickHandler: () => {console.log("Loading Item 5 under cubboard")
        loader.load('Models/cupboard/5/Project Name/Project Name.gltf',function(gltf){
          console.log(gltf);
          var cupboard = gltf.scene;
          cupboard.traverse(function(child){
            child.userData.selectable = true;
            child.layers.set(0);
          });
          cupboard.scale.x =30;
          cupboard.scale.y =30;
          cupboard.scale.z =30;
          cupboard.position.z += 10;
          cupboard.rotateY(-Math.PI/2);
          movingObject = cupboard;
          otherObjects = true;
          scene.add(cupboard);
          if (isObjectInFrustum(cupboard)) {
            animate();
          }
        });
        
        },
      },
      ]
    },
    {
    name: "bed",
    items: [{
      name: "Couple Small Bed",
      clickHandler: () => {console.log("Loading Item 1 under bed")
      loader.load('Models/bed/1/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        var bed = gltf.scene;
        bed.traverse(function(child){
          child.userData.selectable = true;
          child.layers.set(0);
        });
        bed.scale.x =900;
        bed.scale.y =900;
        bed.scale.z =900;
        bed.position.z += 10;
        bed.rotateY(-Math.PI/2);
        movingObject = bed;
        otherObjects = true;
        scene.add(bed);
        if (isObjectInFrustum(bed)) {
          animate();
        }
      });
    
      },
    },
    {
      name: "Couple Comfort Bed",
      clickHandler: () => {console.log("Loading Item 2 under bed")
      loader.load('Models/bed/2/Project Name.gltf',function(gltf){
        console.log(gltf);
        var bed = gltf.scene;
        bed.traverse(function(child){
          child.userData.selectable = true;
          child.layers.set(0);
        });
        bed.scale.x =900;
        bed.scale.y =900;
        bed.scale.z =900;
        bed.position.z += 10;
        bed.rotateY(-Math.PI/2);
        movingObject = bed;
        otherObjects = true;
        scene.add(bed);

        if (isObjectInFrustum(bed)) {
          animate();
        }
      });
    
      },
    },
    {
      name: "Small Wided Bed",
      clickHandler: () => {console.log("Loading Item 3 under bed")
      loader.load('Models/bed/3/Project Name.gltf',function(gltf){
        console.log(gltf);
        var bed = gltf.scene;
        bed.traverse(function(child){
          child.userData.selectable = true;
          child.layers.set(0);
        });
        bed.scale.x =900;
        bed.scale.y =900;
        bed.scale.z =900;
        bed.position.z += 10;
        bed.rotateY(-Math.PI/2);
        movingObject = bed;
        otherObjects = true;
        scene.add(bed);
        if (isObjectInFrustum(bed)) {
          animate();
        }
      });

      },
    },
    {
      name: "Brown Long Bed",
      clickHandler: () => {console.log("Loading Item 4 under bed")
      loader.load('Models/bed/4/Project Name.gltf',function(gltf){
        console.log(gltf);
        var bed = gltf.scene;
        bed.traverse(function(child){
          child.userData.selectable = true;
          child.layers.set(0);
        });
        bed.scale.x =900;
        bed.scale.y =900;
        bed.scale.z =900;
        bed.position.z += 10;
        //bed.rotateY(-Math.PI/2);
        movingObject = bed;
        otherObjects = true;
        scene.add(bed);
        if (isObjectInFrustum(bed)) {
          animate();
        }
      });
    
      },
    },
    {
      name: "Long White Bed",
      clickHandler: () => {console.log("Loading Item 5 under bed")
      loader.load('Models/bed/5/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        var bed = gltf.scene;
        bed.traverse(function(child){
          child.userData.selectable = true;
          child.layers.set(0);
        });
        bed.scale.x =700*5;
        bed.scale.y =700*5;
        bed.scale.z =650*5;
        bed.position.z += 10;
        //bed.rotateY(-Math.PI/2);
        movingObject = bed;
        otherObjects = true;
        scene.add(bed);
        if (isObjectInFrustum(bed)) {
          animate();
        }
      });
      
      },
    },
    ]
  },
  {
    name: "floor",
    items: [{
      name: "Sky Blue Floor",
      clickHandler: () =>{ console.log("Loading Item 1 under floor")},
    },
    {
      name: "Black Sheet Patern Floor",
      clickHandler: () => {console.log("Loading Item 2 under floor")
    
      loader.load('Models/floor/2/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        floor = gltf.scene;
        floor.position.z = floorPosition+4;
        floor.scale.x =floorPosition+1;
        floor.scale.y =.3;
        floor.scale.z =floorPosition-2;
        floor.traverse( ( object ) => {
                       if ( object.isMesh ) {
                           object.material.color.set( 0x9EDED8  );
                       }
                   } );
                   otherObjects = true;
        scene.add(floor);
        if (isObjectInFrustum(floor)) {
          animate();
        }
      });
      
      },
    },
    {
      name: "Brown Tiled Floor",
      clickHandler: () => {console.log("Loading Item 3 under floor")
      loader.load('Models/floor/3/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        floor = gltf.scene;
        floor.position.z = floorPosition+4;
        floor.scale.x =floorPosition+1;
        floor.scale.y =.3;
        floor.scale.z =floorPosition-2;
        floor.traverse( ( object ) => {
                       if ( object.isMesh ) {
                           object.material.color.set( 0x9EDED8  );
                       }
                   } );
                   otherObjects = true;
        scene.add(floor);
        if (isObjectInFrustum(floor)) {
          animate();
        }
      });
    
      },
    },
    {
      name: "Plan Floor",
      clickHandler: () => {console.log("Loading Item 4 under bed")
      loader.load('Models/floor/4/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        floor = gltf.scene;
        floor.position.z = floorPosition+4;
        floor.scale.x =floorPosition+1;
        floor.scale.y =.3;
        floor.scale.z =floorPosition-2;
        floor.traverse( ( object ) => {
                       if ( object.isMesh ) {
                           object.material.color.set( 0x9EDED8  );
                       }
                   } );
                   otherObjects = true;
        scene.add(floor);
        if (isObjectInFrustum(floor)) {
          animate();
        }
      });
      
      },
    },
    {
      name: "Blue Wood Patern Floor",
      clickHandler: () => {console.log("Loading Item 5 under bed")
      loader.load('Models/floor/5/Project Name.gltf',function(gltf){
        console.log(gltf);
        floor = gltf.scene;
        floor.position.z = floorPosition+4;
        floor.scale.x =floorPosition+1;
        floor.scale.y =.3;
        floor.scale.z =floorPosition-2;
        floor.traverse( ( object ) => {
                       if ( object.isMesh ) {
                           object.material.color.set( 0x9EDED8  );
                       }
                   } );
                   otherObjects = true;
        scene.add(floor);
        if (isObjectInFrustum(floor)) {
          animate();
        }
      });
    
      },
    },
    ]
  },
  {
    name: "Roof",
    items: [{
      name: "Plan Pattern Roof",
      clickHandler: () => {console.log("Loading Item 1 under roof")
      loader.load('Models/roof1/Project Name/Project Name.gltf',function(gltf){
        console.log(gltf);
        const roof = gltf.scene;
        roof.position.z = floorPosition;
        roof.scale.x = floorPosition+1;
        roof.scale.y =.3;
        roof.scale.z = floorPosition-2;
        roof.position.y = obj.scale.y/2;
        roof.position.z +=4;
        roof.rotateY(-Math.PI);
        roof.traverse( ( object ) => {
                       if ( object.isMesh ) {
                           object.material.color.set( 0x6d998f  );
                       }
                   } );
        otherObjects = true;
        roofColorObj = roof;
        scene.add(roof);
        if (isObjectInFrustum(roof)) {
          animate();
        }
      });
      },
    },
    
    ]
  },
  

]
  

  useEffect(() => {

        
    document.addEventListener("DOMContentLoaded", function () {
      const sidebar = document.querySelector(".sidebar");
      const toggleButton = document.querySelector(".sidebar-toggle");

      toggleButton?.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-collapsed");
         toggleButton.querySelector(".sidebar-toggle-icon").classList.toggle("arrow-up");
      toggleButton.querySelector(".sidebar-toggle-icon").classList.toggle("arrow-down");
      });
     
    });

    
    var canvas = document.querySelector('.webgl');
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    var width=0;
    var length=0;


    // adding lights
    const light =  new THREE.DirectionalLight(0xEDE4E2,1);
    light.position.set(2,2,5);
    scene.add(light);

    const light1 =  new THREE.DirectionalLight(0xEDE4E2,1);
    light1.position.set(-2,-2,-5);
    scene.add(light1);


    const light2 =  new THREE.DirectionalLight(0xEDE4E2,1);
    light2.position.set(0,2,0);
    scene.add(light2);

    const light3 =  new THREE.DirectionalLight(0xEDE4E2,1);
    light3.position.set(2,2,0);
    scene.add(light3);

    const light4 =  new THREE.DirectionalLight(0xEDE4E2,1);
    light4.position.set(-2,2,0);
    scene.add(light4);

    light5 =  new THREE.DirectionalLight(0xEDE4E2,1);
    light5.position.set(0,1,0);
    light5.position.copy(new THREE.Vector3(0.5,-37,8));
    scene.add(light5);

    const sizes ={
      width: window.innerWidth,
      height: window.innerHeight
    };
  
    camera = new THREE.PerspectiveCamera(60,sizes.width/sizes.height,0.1,1000);
    camera.fov = 100;
    camera.position.set(0,3,6);
    camera.updateProjectionMatrix();
    scene.add(camera);
    

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias:true 
    });
  
    renderer.setSize(800,400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;
    renderer.render(scene,camera);
  
    controls = new OrbitControls(camera,renderer.domElement);
    controls.addEventListener('change', function(){});
    
    loader = new GLTFLoader();
    //const loader = useLoader(GLTFLoader, "src/Models/Walls/scene.glb" );
    loader.load('Models/Walls/Scene.glb',function(gltf){
      console.log(gltf);
      obj = gltf.scene;
      // assigning dummy values
      obj.scale.x = (localStorage.getItem('width')/10)*12;
      floorPosition = obj.scale.x;
      obj.scale.y = (localStorage.getItem('height')/10)*15;
      obj.scale.z = obj.scale.z*4;
      obj.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( 0xb69090 );
        }
      } );
      // getting width of object inorder make room structure
      const boundingBox = new THREE.Box3().setFromObject(obj);
      width = boundingBox.getSize(new THREE.Vector3()).x;
      console.log("width of wall is :"+width);
      const boundingBox1 = new THREE.Box3().setFromObject(obj);
      length = boundingBox1.getSize(new THREE.Vector3()).y;
      // //diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(length, 2));
      // // cloning other 3 walls for room
      rightwall = obj.clone();
      lefttwall = obj.clone();
      opositewall = obj.clone();
      // // rotation of walls with respect to there positions
      rightwall.rotateY(Math.PI/2);
      lefttwall.rotateY(-Math.PI/2);
      opositewall.rotateY(Math.PI);
      // // posstions of walls with respect to x, y, and z
      rightwall.position.x += width/2;
      rightwall.position.z += width/2;
      lefttwall.position.x -= width/2;
      lefttwall.position.z += width/2;
      opositewall.position.z += width;
      // //alert("Leftwall points("+lefttwall.position.x+","+lefttwall.position.y+")\nRightwall points("+rightwall.position.x+","+rightwall.position.y+")");
      // //floorx = distance(lefttwall.position.x,lefttwall.position.y,rightwall.position.x,rightwall.position.y);
      //width=Math.abs(lefttwall.position.x-rightwall.position.x);
      //length=Math.abs(obj.position.z-opositewall.position.z);
      frontWallBox = new THREE.Box3().setFromObject(obj);
      lefttwallBox = new THREE.Box3().setFromObject(lefttwall);
      rightwallBox = new THREE.Box3().setFromObject(rightwall);
      opositewallBox = new THREE.Box3().setFromObject(opositewall);

      scene.add(obj);
      scene.add(rightwall);
      scene.add(lefttwall);
      scene.add(opositewall);
      if (isObjectInFrustum(obj)) {
        animate();
      }
      if (isObjectInFrustum(rightwall)) {
        animate();
      }
      if (isObjectInFrustum(lefttwall)) {
        animate();
      }
      if (isObjectInFrustum(opositewall)) {
        animate();
      }

    });



  
    animate();

    // add mouse listener here
    function onKeyDown(event) {
      if(otherObjects === true){
        if (event.keyCode === 65) { 
          movingObject.position.x -= 0.5;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
        if (event.keyCode === 68) { 
          movingObject.position.x += 0.5;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
        if (event.keyCode === 87) { 
          movingObject.position.z -= 0.5;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
        if (event.keyCode === 83) { 
          movingObject.position.z += 0.5;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
        if (event.keyCode === 76) { 
          movingObject.rotation.y += 0.05;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
        if (event.keyCode === 82) { 
          movingObject.rotation.y -= 0.05;
          if (isObjectInFrustum(movingObject)) {
            animate();
          }
        }
      } else {
        const doorAndWindowBox = new THREE.Box3().setFromObject(doorandwindows);
        if(frontWallCheck){
          if(doorAndWindowBox.intersectsBox(rightwallBox)){
            console.log("Collision with right wall detected");
            frontWallCheck = false;
            rightwallCheck = true;
            obj.remove(doorandwindows);
            rightwall.add(doorandwindows);
            doorandwindows.rotateY(Math.PI);
            doorandwindows.x += 0.05;
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if(doorAndWindowBox.intersectsBox(lefttwallBox)){
            console.log("Collision with left wall detected");
            frontWallCheck = false;
            lefttwallCheck = true;
            obj.remove(doorandwindows);
            lefttwall.add(doorandwindows);
            doorandwindows.rotateY(Math.PI);
            doorandwindows.x -= 0.05
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 65) { 
            doorandwindows.position.x -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 68) { 
            doorandwindows.position.x += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 87) { 
            doorandwindows.position.y += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 83) { 
            doorandwindows.position.y -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          
        }
        if(rightwallCheck){
          if(doorAndWindowBox.intersectsBox(opositewallBox)){
            console.log("Collision with opposite wall detected");
            rightwallCheck = false;
            opositewallCheck = true;
            rightwall.remove(doorandwindows);
            opositewall.add(doorandwindows);
            doorandwindows.rotateY(Math.PI);
            doorandwindows.x += 0.05;
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 65) { 
            doorandwindows.position.x += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 68) { 
            doorandwindows.position.x -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 87) { 
            doorandwindows.position.y += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 83) { 
            doorandwindows.position.y -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
        }
        if(opositewallCheck){
          if(doorAndWindowBox.intersectsBox(lefttwallBox)){
            console.log("Collision with left wall detected");
            opositewallCheck = false;
            lefttwallCheck = true;
            opositewall.remove(doorandwindows);
            lefttwall.add(doorandwindows);
            doorandwindows.rotateY(Math.PI);
            doorandwindows.x += 0.05;
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 65) { 
            doorandwindows.position.x -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 68) { 
            doorandwindows.position.x += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 87) { 
            doorandwindows.position.y += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 83) { 
            doorandwindows.position.y -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
        }
        if(lefttwallCheck){
          if (event.keyCode === 65) { 
            doorandwindows.position.x += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 68) { 
            doorandwindows.position.x -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.x);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 87) { 
            doorandwindows.position.y += 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
          if (event.keyCode === 83) { 
            doorandwindows.position.y -= 0.05;
            //console.log("door and window position :"+ doorandwindows.position.y);
            if (isObjectInFrustum(doorandwindows)) {
              animate();
            }
          }
        }
         
      }
    }
    


    // object detection
    // Create a new Raycaster
    const raycaster = new THREE.Raycaster();

    // Add a click event listener to the renderer
    renderer.domElement.addEventListener('click', onObjectClick, false);

    function onObjectClick(event) {
      // Calculate mouse position in normalized device coordinates
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set the raycaster's position and direction
      raycaster.setFromCamera(mouse, camera);

      // Get the intersected objects
      const intersects = raycaster.intersectObjects(scene.children, true);

      // Check if any objects were intersected
      if (intersects.length > 0) {
        for (let i = 0; i < intersects.length; i++) {
          const clickedObject = intersects[i].object;
          const completeObject = clickedObject.parent;
          console.log(completeObject);
          deleteObject = completeObject;
        }
      }
    }


    // detele event listener
    // Get the delete button element
    const deleteButton = document.getElementById('delete');

    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', onDeleteButtonClick);

    function onDeleteButtonClick(event) {
      // Do something when the delete button is clicked
      console.log("delete is clicked");
      deleteObject.removeFromParent();
      if (isObjectInFrustum(deleteObject)) {
        animate();
      }
    }

  

    

    document.addEventListener('keydown', onKeyDown, false);

    function handleChangeColor(event) {
      var colorValue = event.target.value;
      console.log('Selected color:', colorValue);
      console.log(colorValue[0]);
      colorValue = "0x"+colorValue.substring(1);
      console.log(colorValue);
      obj.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( colorValue );
        }
      } );
      lefttwall.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( colorValue );
        }
      } );
      rightwall.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( colorValue );
        }
      } );
      opositewall.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( colorValue );
        }
      } );
      if (isObjectInFrustum(obj)) {
        animate();
      }
      if (isObjectInFrustum(rightwall)) {
        animate();
      }
      if (isObjectInFrustum(lefttwall)) {
        animate();
      }
      if (isObjectInFrustum(opositewall)) {
        animate();
      }
    }
    
    // const picker = document.getElementById('color-picker');
    // picker.addEventListener('change', handleChangeColor);    

    var colorPickerWall = document.getElementById('color-picker-wall');
    // Add an event listener to the color picker
    colorPickerWall.addEventListener('input', function() {
      // Retrieve the selected color value
      var hexColor = colorPickerWall.value;
      // Do something with the hex color value
      console.log('Selected color:', hexColor);
      obj.traverse( ( object ) => {
        if ( object.isMesh ) {
            object.material.color.set( new THREE.Color(hexColor) );
        }
      } );
      if (isObjectInFrustum(obj)) {
        animate();
      }
    });

    var colorPickerRoof = document.getElementById('color-picker-roof');
    // Add an event listener to the color picker
    colorPickerRoof.addEventListener('input', function() {
      // Retrieve the selected color value
      var hexColor = colorPickerRoof.value;
      // Do something with the hex color value
      console.log('Selected color:', hexColor);
      if(roofColorObj == null){
        console.log("Roof is not added");
      } else { 
        roofColorObj.traverse( ( object ) => {
          if ( object.isMesh ) {
              object.material.color.set( new THREE.Color(hexColor) );
          }
        } );
      }
      if (isObjectInFrustum(roofColorObj)) {
        animate();
      }
    });
       
    
    var colorPickerObject = document.getElementById('color-picker-object');
    // Add an event listener to the color picker
    colorPickerObject.addEventListener('input', function() {
      // Retrieve the selected color value
      var hexColor = colorPickerObject.value;
      // Do something with the hex color value
      console.log('Selected color:', hexColor);
      if(otherObjects === true){
        if(deleteObject === null){
          console.log("Object is not selected");
        } else {
          deleteObject.traverse( ( object ) => {
          if ( object.isMesh ) {
              object.material.color.set( new THREE.Color(hexColor) );
          }
          } );
        }
      } else {
        if(doorandwindows === null){
          console.log("Object is not selected ");
        } else {
          doorandwindows.traverse( ( object ) => {
          if ( object.isMesh ) {
              object.material.color.set( new THREE.Color(hexColor) );
          }
          } );
        }
      }
      if (isObjectInFrustum(deleteObject)) {
        animate();
      }
      if (isObjectInFrustum(doorandwindows)) {
        animate();
      }
    });


    var colorPickerFloor = document.getElementById('color-picker-floor');
    // Add an event listener to the color picker
    colorPickerFloor.addEventListener('input', function() {
      // Retrieve the selected color value
      var hexColor = colorPickerFloor.value;
      // Do something with the hex color value
      console.log('Selected color:', hexColor);
      if(floor == null){
        console.log("Floor is not added");
      } else { 
        floor.traverse( ( object ) => {
          if ( object.isMesh ) {
              object.material.color.set( new THREE.Color(hexColor) );
          }
        } );
      }
      if (isObjectInFrustum(floor)) {
        animate();
      }
    });

    var downloadButton = document.getElementById('download');
    downloadButton.addEventListener('click', downloadScene);

    // Function to download the scene
    function downloadScene() {
      // Create a GLTFExporter instance
      var exporter = new GLTFExporter();

      // Export the scene to GLTF format
      exporter.parse(scene, function(result) {
        var output = JSON.stringify(result, null, 2);

        // Create a download link
        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(new Blob([output], { type: 'application/octet-stream' }));
        downloadLink.download = 'room.gltf'; // Set the desired file name and extension

        // Trigger the download
        downloadLink.click();
      }, { binary: true });
    }




  }, []);

  

  

  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
  }

  

  return (
    <Container fluid>
  <Row>
    {/* Left Sidebar */}
    <Col md={3} lg={2} className="left-sidebar">
      <div className="left-sidebar-container">
        <div className="arrow-icon"></div>
        <div className="search-container">
          <Form>
            <Form.Control type="text" placeholder="Search" className="search-box" />
            <Button variant="light" className="search-btn">
              Search
            </Button>
          </Form>
          <hr className="search-hr" />
          {arr.map((item, i) => (
              <Dropdown key={i} className="dropdown">
                <Dropdown.Toggle variant="secondary" block>
                  {item.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {item.items.map((dropItem, ind) => (
                    <Dropdown.Item key={ind} onClick={() => {dropItem.clickHandler(item)}}> {dropItem.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ))}
        </div>
      </div>
    </Col>

    {/* Main Content */}
    <Col md={6} lg={8} className="main-content">
      <div className="main-content-container">
        <Button variant="light" id="download" className="reset-btn">Download</Button>
        <Button variant="light" id="delete" className="delete-btn">Delete</Button>
        <hr className="main-hr" />
        <h1 className="main-title">Main Content</h1>
        <div id="scene" className="scene-container"> <canvas className="webgl"  ></canvas> </div>
      </div>
    </Col>

    {/* Right Sidebar */}
    <Col md={3} lg={2} className="right-sidebar">
      <div className="right-sidebar-container">
        <h1>Walls Color</h1>
        <hr className="right-hr" />
        <InputGroup className="right-input-group">
          <InputGroup.Text>Color:</InputGroup.Text>
          <Form.Control type="color" defaultValue="#ffffff"  id="color-picker-wall" />
        </InputGroup>
        <h1>Roof Color</h1>
        <hr className="right-hr" />
        <InputGroup className="right-input-group">
          <InputGroup.Text>Color:</InputGroup.Text>
          <Form.Control type="color" defaultValue="#ffffff"  id="color-picker-roof" />
        </InputGroup>
        <h1>Objects Color</h1>
        <hr className="right-hr" />
        <InputGroup className="right-input-group">
          <InputGroup.Text>Color:</InputGroup.Text>
          <Form.Control type="color" defaultValue="#ffffff"  id="color-picker-object" />
        </InputGroup>
        <h1>Floor Color</h1>
        <hr className="right-hr" />
        <InputGroup className="right-input-group">
          <InputGroup.Text>Color:</InputGroup.Text>
          <Form.Control type="color" defaultValue="#ffffff"  id="color-picker-floor" />
        </InputGroup>
      </div>
    </Col>
  </Row>
</Container>


  
  );
}
export default CustomDesign;
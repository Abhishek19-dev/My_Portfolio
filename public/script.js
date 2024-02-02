// //Constellation effect
//   //it finds the distance with every other particles in particlesArray and if distance is minimum and in range it draws the line
//   // see distance . png to know how to calculate distance using pythagoras


//   const canvas = document.getElementById('canvas1')
//   const ctx = canvas.getContext('2d')  // this is to create an object 
//   const particlesArray = []
//   let hue = 0 ; //this is for color saturation
  
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
  
//   window.addEventListener('resize',function(){
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
      
//   })
  
//   const mouse = {
//       x : undefined,
//       y:  undefined
//   }
  
//   //create a particles every time we move
//   canvas.addEventListener('click',function(e){ // event function contain all the propertites of click 
//       mouse.x = e.x
//       mouse.y = e.y 
//       //create more than 10 particles
//       for(let i = 0 ; i < 2;i++){
//           particlesArray.push(new Particle())
//       }
//   })
  
//   canvas.addEventListener('mousemove',function(e){
//       mouse.x = e.x
//       mouse.y = e.y 
//       for(let i = 0 ; i < 5;i++){
//           particlesArray.push(new Particle())
//       }
//   })
  
  
//   class Particle{
//       constructor(){
//           this.x = mouse.x;
//           this.y = mouse.y
//           // this.x = Math.random() * canvas.width
//           // this.y = Math.random() * canvas.height
//           this.size = Math.random()* 15 + 1; // using particles make of any size
//           this.speedX = Math.random() * 3 - 1.5 // using particles go to any side  in x or y 
//           this.speedY = Math.random() * 3 - 1.5 // using particles go to any side  in x or y
//           this.color = 'hsl('+ hue + ' 100% , 50%)'
//       }
//       update(){
//           this.x += this.speedX
//           this.y += this.speedY
//           if (this.size > 0.2) {
//               this.size -= 0.1 // this is that shrinking size animation
//           }
//       }
//       draw(){
//           // ctx.fillStyle = 'white'
//           ctx.fillStyle = this.color
//           ctx.beginPath();
//           ctx.arc(this.x , this.y , this.size , 0 , Math.PI * 2)
//           ctx.fill()
//       }
//   }
  
  
//   function handleParticles(){
//       for(let i = 0; i < particlesArray.length; i++){
//           particlesArray[i].update()
//           particlesArray[i].draw()
          
//           //calculate distance
//           for(let j = 1 ; j < particlesArray.length ; j++){
//               const dx = particlesArray[i].x - particlesArray[j].x
//               const dy = particlesArray[i].y - particlesArray[j].y
//               const distance = Math.sqrt(dx * dx + dy * dy) // see pythagoras png and cal dist using pythagoras
  
//               if(distance < 100){
//                   ctx.beginPath()
//                   ctx.strokeStyle = particlesArray[i].color
//                   ctx.lineWidth = 0.2
//                   ctx.moveTo(particlesArray[i].x , particlesArray[i].y)
//                   ctx.lineTo(particlesArray[j].x , particlesArray[j].y)
//                   ctx.stroke() //To draw the line
//                   ctx.closePath()
//               }
//           }
  
  
//           //this is also used in shrinking and deltend element
//           if(particlesArray[i].size <= 0.3){
//               particlesArray.splice(i  , 1)
//               i--
//           }
  
  
//       }
//   }
  
//   function animate(){
//       ctx.clearRect(0 , 0 , canvas.width, canvas.height) //this clears any drawings on canvas
  
//       handleParticles() 
//       hue+=2
//       requestAnimationFrame(animate) //It calls it only once the fucntioh
//   }
  
//   animate()
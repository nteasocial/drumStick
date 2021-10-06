
      function playSound(e){
       const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
         const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
         if (!audio) return; //stop the audio
         audio.currentTime=0; //rewind it
         audio.play();
         key.classList.add('playing');
      }

       function removeTransition(e){
          if(e.propertyName !== 'transform') return;
          this.classList.remove('playing');
       }

       const keys = document.querySelectorAll('.key');
       keys.forEach(key => key.addEventListener('transitioned', removeTransition));


       window.addEventListener("keydown", playSound);
    

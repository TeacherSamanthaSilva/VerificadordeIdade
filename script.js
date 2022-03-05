function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var formularioano = window.document.getElementById('txtano')
    var res = window.document.querySelector('divres')
    if(formularioano.value.lenght == 0 || formularioano.value.length > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
       var formulariosexo = document.getElementsByName('radsexo')
       var idade = ano - Number(formularioano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if(radsexo[0].checked){
          genero = 'masculino'
          if(idade >=0 && idade <=3){

            img.setAttribute('src','images/babyboy.jpg')
    
        }else if(idade >=3 && idade <=14){
    
            img.setAttribute('src','images/boy.jpg')
    
        }else if(idade >=14 && idade <=21){
    
            img.setAttribute('src','images/youngman.jpg')
    
        }else if(idade >=21 && idade <=60){
    
            img.setAttribute('src','images/man.jpg')
    
        }else{
    
            img.setAttribute('src','images/oldman.jpg')
            
        }
      }else if(radsexo[1].checked){
          genero = 'feminino'
      }
      if(idade >=0 && idade <=3){

        img.setAttribute('src','images/babygirl.jpg')

    }else if(idade >=3 && idade <=14){

        img.setAttribute('src','images/girl.jpg')

    }else if(idade >=14 && idade <=21){

        img.setAttribute('src','images/youngwoman.jpg')

    }else if(idade >=21 && idade <=60){

        img.setAttribute('src','images/woman.jpg')

    }else{

        img.setAttribute('src','images/oldwoman.jpg')
        
    }
    }
}
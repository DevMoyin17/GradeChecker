function gradechecker() {
    var score = inp.value
    var songA = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.44.24_d16b5dd0.mp3')
    var songB = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.44.23_336fdc64.mp3')
    var songC = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.44.23_7db3157f.mp3')
    var songD = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.43.44_1965c625.mp3')
    var songE = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.43.40_469c947f.mp3')
    var songF = new Audio('Audio/WhatsApp Audio 2024-05-12 at 00.43.43_56da7c03.mp3')

   if(score>=70 && score <=100) {
   showGrade.innerHTML = 'A- Excellent 🙌'
   showGrade.style.color = 'green'
   songA.play()

    } else if (score>=60 && score < 70) {
            showGrade.innerHTML = 'B- Very Good 👏'
            showGrade.style.color = 'blue'
            songB.play()

        } else if(score>=50 && score <60) {
            showGrade.innerHTML = 'C- Good 👍'
            showGrade.style.color = 'orange'
            songC.play()

        } else if(score>=40 && score <50) {
            showGrade.innerHTML = 'D- Pass 😥'
           showGrade.style.color = 'purple'
           songD.play()

        } else if(score>=30 && score <40) {
            showGrade.innerHTML = 'E- Fail 😑'
            showGrade.style.color = 'orange'
            songE.play()

        } else if(score>=0 && score<30){
            showGrade.innerHTML = 'F-Poor 😢'
            showGrade.style.color = 'red'
            songF.play()
        }
        else {
            //  if(score == '')
            showGrade.innerHTML = 'Not recognised'
        }
        
        inp.value = ''
    }   




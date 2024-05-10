function gradechecker() {
    var score = inp.value
    
   if(score>=70 && score <=100) {
   showGrade.innerHTML = 'A- Excellent 🙌'
   showGrade.style.color = 'green'

    } else if (score>=60 && score < 70) {
            showGrade.innerHTML = 'B- Very Good 👏'
            showGrade.style.color = 'blue'

        } else if(score>=50 && score <60) {
            showGrade.innerHTML = 'C- Good 👍'
            showGrade.style.color = 'orange'

        } else if(score>=40 && score <50) {
            showGrade.innerHTML = 'D- Pass 😥'
           showGrade.style.color = 'purple'

        } else if(score>=30 && score <40) {
            showGrade.innerHTML = 'E- Fail 😑'
            showGrade.style.color = 'orange'

        } else if(score>=0 && score<30){
            showGrade.innerHTML = 'F-Poor 😢'
            showGrade.style.color = 'red'
        }
        
        inp.value = ''
    }   




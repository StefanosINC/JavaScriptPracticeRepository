

const Mark = {

    firstname: "Mark",
    weight: 78,
    height: 1.69,

    caculateBMI: function(){
        let BMI = this.weight / (this.height * this.height);
        return BMI;
    
    }

    
};

const John = {
     firstname: "JOhn",
     weight: 92,
     height: 1.95,

     caculateBMI: function(){
         let BMI =this.weight / (this.height * this.height);
        return BMI;
    
     }

    
 };

 const GeneralPerson = {
    firstname: "",
    weight: 0,
    height: 0,

    caculateBMI: function(){
        let BMI = this.weight / (this.height * this.height);
       return BMI;
   
    }

   
};




GeneralPerson.caculateBMI()
    if(Mark.caculateBMI() > John.caculateBMI()){
        console.log(`Mark BMI ${Mark.caculateBMI()} is higher than Johns which is ${John.caculateBMI()}`);
    }
    else{
        console.log("Error");
    }

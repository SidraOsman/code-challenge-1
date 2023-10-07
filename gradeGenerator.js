function gradeGenerator(grades){
    if(grades > 79){
        console.log ("A");
    }else if(60<grades && grades<79){
        console.log ("B");
    }else if (49<grades && grades<59){
        console.log ("C");
    }else if (40<grades && grades<49){
        console.log ("D");
    }else if (grades < 40){
        console.log ("E");
    }else {
        console.log ("Failed");
    }
}

gradeGenerator(89);
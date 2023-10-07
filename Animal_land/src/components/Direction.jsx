import React, { useState } from "react";

const Direction = (props) => {


    const [count, setcount] = useState(0);
    const [arr, setarr] = useState(["Click the Start button to begin!!!!"]);

    const randomIndex = () => {
        return Math.floor(Math.random() * props.ques.length)
    }
    var current = randomIndex();
    var Question = "Messi"



    const rightdirectionHandler = (event) => {
        event.stopPropagation()
        props.click(0)
        props.begin(5)
        document.getElementById("card").style.backgroundColor="Yellow";
        if (count < 1) {
            setcount(count + 1);
            current = randomIndex();
            Question = props.ques[current];
            var change = document.getElementById("view");
            var next = document.getElementById("Start");
            next.innerHTML = "Next"
            setarr(ar => [...arr, change.innerHTML])
            change.innerHTML = Question;
            console.log(arr)
            console.log(arr.length)
        } else if (count == 1) {
            setcount(count + 1);
            current = randomIndex();
            Question = props.ques[current]
            var change = document.getElementById("view");
            setarr(ar => [...arr, change.innerHTML])
            console.log(arr)
            console.log(arr.length)
            change.innerHTML = Question;
        } else {
            setcount(count + 1);
            current = randomIndex();
            Question = props.ques[current]
            var change = document.getElementById("view");
            setarr(ar => [...arr, change.innerHTML])
            console.log(arr)
            console.log(arr.length)
            change.innerHTML = Question;
        }


    }

    const leftdirectionHandler = (event) => {

        

        event.stopPropagation();
        document.getElementById("card").style.backgroundColor="Yellow";
        if(arr.length==0){
            return
        }
        console.log(arr.length)
        props.click(0)
        props.begin(5)
        const newChild = document.getElementById("Previous");
        const change = document.getElementById("view");

        if (arr != null) {
            change.innerHTML = arr[arr.length - 1];
            if (arr.length == 1) {
                setarr([]);
            } else {
                setarr(arr.slice(0, arr.length - 1));
            }

            console.log(arr);
        }
        
    }

return (
    <div className="Direction">
        <button className="button previous" id="Previous" onClick={leftdirectionHandler}>Previous</button>
        <button className="button right" id="Start" onClick={rightdirectionHandler}>Start</button>
    </div>
)
}

export default Direction;
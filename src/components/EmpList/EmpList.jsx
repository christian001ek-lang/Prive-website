import { employees } from "./EmpListData";


import "./Emplist.css"

export default function EmpList() {

    let textStyling = {
        backgroundColor: "red",
        padding: "12px",
        width: "400px"

    }
    return (
        <div>

            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis illum laudantium, error ipsam possimus. Placeat non, consequuntur debitis, dolorem nobis iure, vel quam eligendi illum aperiam cumque expedita doloremque?</p>

            <p style={textStyling}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
                quia dignissimos, dolores consequuntur non vero nesciunt alias!
                Blanditiis molestias id recusandae necessitatibus neque sequi iusto
                sapiente beatae libero ut!
            </p>

            <p style={textStyling}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
                quia dignissimos, dolores consequuntur non vero nesciunt alias!
                Blanditiis molestias id recusandae necessitatibus neque sequi iusto
                sapiente beatae libero ut!
            </p>

            {employees.map((emp) => {
                return (
                    <ul
                        style={{ backgroundColor: "red", color: "white", padding: "12px" }}
                    >
                        <img src={emp.images} alt="" />
                        <li> {emp.id} </li>
                        <li> {emp.name} </li>
                        <li> {emp.department} </li>
                        <li> {emp.salary} </li>
                    </ul>
                );
            })}
        </div>
    );
}

// styling 2 type 1 css  and > css > lib and framwok

// !! css js  padding-top > paddingTop> pt flex

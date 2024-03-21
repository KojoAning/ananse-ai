import React from "react";


function LessonCard({ data }){
    const data = ['hello','hi']
    let num_cards = data.length

    return(
        <div>
            {data.length > 0 ? ( 
                <div>
                    {data.map((item, index) => (
                        <p key={index}>{item}</p> 
                    ))}
                </div>
            ) : (
                <p>No data available</p> 
            )}
            
        </div>
    )

}

export default  LessonCard;
import React from "react";

export default class Emoji extends React.Component {
    
    addEmoji = (text,emoji) => `${emoji} ${text} ${emoji}`;
    
    render(override){
        
        let text = "I Love JavaScript";
        if(override) text = override;
        console.log('On Emoji');
        console.log(text);

        return(
            <div>{text}</div>
        );
    }
}

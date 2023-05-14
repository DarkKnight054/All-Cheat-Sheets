import React from "react";

class Button extends React.Component{


    // Controlling the re-render of Button Component.
    shouldComponentUpdate(nextProps){
        const { change: nextChange, locale: nextLocale } = nextProps;
        const { change: currentChange, locale: currentLocale } = this.props;
        if(nextChange === currentChange && nextLocale === currentLocale)
        {
            return false;
        } else {
            return true;
        }
    }

    render(){
        let { change, locale } = this.props;
        if(locale === "bn-BD")locale = "en-US";
        else locale = "bn-BD";
        return(
            <button onClick={()=>change(locale)}>Click Here</button>
        );
    }
}
export default Button;
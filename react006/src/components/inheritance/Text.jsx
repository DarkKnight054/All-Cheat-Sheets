import Emoji from "./Emoji";

export default class Text extends Emoji{

    render(){

        console.log('On Text');
        const text = this.addEmoji('I love Allah', '🙋');
        return super.render(text);
    }
}
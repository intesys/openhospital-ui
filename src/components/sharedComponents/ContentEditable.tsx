let createReactClass = require('create-react-class');

let ContentEditable = createReactClass({
    render(){
        return (
        	<span onInput={this.handleInput} onBlur={this.handleChange} contentEditable="true" dangerouslySetInnerHTML={{__html: this.props.html}}>
        	</span>
        );
    },
    shouldComponentUpdate(nextProps){
        return nextProps.html !== this.getDOMNode().innerHTML;
    },
    handleChange(){
        let html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});
class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
        this.props = {};
        this.state = {};
    }

    connectedCallback() {
        this.render();
        this.componentDidMount();
    }

    attributeChangedCallback(name, oldval, newval) {
        this.props[name] = newval;
        this.render();
        this.componentDidUpdate();
    }

    disconnectedCallback() {
        this.componentWillUnmount();

    }

    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }

    render() {
        this._shadowRoot.innerHTML = `
          
        `
    }

    componentDidMount() {


    }

    componentDidUpdate() {


    }

    componentWillUnmount() {


    }

}
export {
    BaseComponent
}
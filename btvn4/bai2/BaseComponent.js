class BaseComponent extends HTMLElement{
    props;
    state;
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
        this.props = {};
        this.state = {};
    }

    connectedCallback(){
        this.render();
        this.componentDidMount();
    }

    attributeChangedCallback(name, oldValue,newValue){
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }

    disconnectCallback(){
        this.componentWillUnmount();
    }

    setState(newState){
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }

    /**
     * IN html ra ngoài màn hình
     * gán sự kiện cho các thẻ bên trong component
     */
    render(){

    }
    /**
     * được gọi khi component được sinh ra
     * gọi 1 lần duy nhất
     * 
     */
    componentDidMount(){

    }
    /**
     * được gọi khi props hoặc state thay đổi , sau khi render
     */
    componentDidUpdate(){

    }
    /**
     * Được gọi trước khi component biến mất
     */
    componentWillUnmount(){

    }
}

export{BaseComponent};